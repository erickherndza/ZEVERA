/* ==========================================================================
   ZEVERA — lógica del demo
   Rutas por hash: #inicio · #coleccion(-filtro) · #producto-<id>
   ========================================================================== */

(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Preferencias del visitante (solo conveniencia) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem("zb." + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("zb." + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };

  const state = {
    lang: store.get("lang", "es"),
    type: store.get("type", "a"),
    accent: store.get("accent", "esmeralda"),
    bag: store.get("bag", []),
    favs: new Set(store.get("favs", [])),
    filters: { type: new Set(), metal: new Set(), stone: new Set(), coll: new Set(), price: new Set() },
    preset: "",
    query: "",
    sort: "rec"
  };

  const T = () => ZB.i18n[state.lang];
  const L = obj => obj[state.lang];
  const money = n => "RD$ " + n.toLocaleString("en-US");
  const byId = id => ZB.products.find(p => p.id === id);
  const waLink = msg => `https://wa.me/${ZB.whatsapp}?text=${encodeURIComponent(msg)}`;

  const ICON = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    left: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
    right: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
    filter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>',
    truck: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>',
    store: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v10h16V10M3 10l2-5h14l2 5z"/><path d="M10 20v-5h4v5"/></svg>',
    swap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h14l-3-3M20 16H6l3 3"/></svg>',
    cal: '<svg viewBox="0 0 36 36" class="exp-icon" aria-hidden="true"><rect x="5" y="8" width="26" height="23"/><path d="M5 14h26M12 5v6M24 5v6"/><circle cx="18" cy="22" r="3"/></svg>',
    pen: '<svg viewBox="0 0 36 36" class="exp-icon" aria-hidden="true"><path d="M7 29l3-9L24 6l6 6-14 14z"/><path d="M21 9l6 6M7 29l9-3"/></svg>',
    gift: '<svg viewBox="0 0 36 36" class="exp-icon" aria-hidden="true"><rect x="6" y="14" width="24" height="16"/><path d="M4 10h28v4H4zM18 10v20"/><path d="M18 10c-3-5-9-5-8-1 1 2 5 1 8 1zM18 10c3-5 9-5 8-1-1 2-5 1-8 1z"/></svg>'
  };

  /* ---------- Estilo (tipografía + color de firma) ---------- */
  function applyStyle() {
    document.documentElement.dataset.type = state.type;
    const a = ZB.accents.find(x => x.id === state.accent) || ZB.accents[0];
    document.documentElement.style.setProperty("--accent", a.hex);
    document.documentElement.lang = state.lang;
  }

  /* ---------- Piezas de interfaz reutilizables ---------- */
  function card(p) {
    const fav = state.favs.has(p.id);
    const coll = L(ZB.collections[p.coll]).name;
    return `<article class="card">
      <div class="card-media">
        <a href="#producto-${p.id}" aria-label="${esc(L(p).name)}">
          ${ZB.art.product(p, "main")}
          ${ZB.art.product(p, "alt", "art-alt")}
        </a>
        <button class="fav" data-fav="${p.id}" aria-pressed="${fav}" aria-label="Favorito">${ICON.heart}</button>
      </div>
      <div class="card-body">
        <span class="card-coll">${esc(coll)}</span>
        <a class="card-name link-draw" href="#producto-${p.id}">${esc(L(p).name)}</a>
        <span class="card-price">${money(p.price)}</span>
      </div>
    </article>`;
  }

  /* Tarjeta del carrusel de portada: calco de tiffany.com (una sola foto fija,
     sin precio ni favorito; el nombre de colección va en serif, el de la
     pieza en texto simple debajo — ahí no hay caja ni "ver todo"). */
  function railCard(p) {
    const coll = L(ZB.collections[p.coll]).name;
    return `<article class="rail-card">
      <a class="card-media" href="#producto-${p.id}" aria-label="${esc(L(p).name)}">${ZB.art.product(p, "main")}</a>
      <div class="rail-card-body">
        <span class="rail-card-coll">${esc(coll)}</span>
        <a class="rail-card-name link-draw" href="#producto-${p.id}">${esc(L(p).name)}</a>
      </div>
    </article>`;
  }

  function langToggle() {
    return ["es", "en"].map(l => `<button data-lang="${l}" aria-pressed="${state.lang === l}">${l.toUpperCase()}</button>`).join("<span aria-hidden=\"true\">/</span>");
  }

  const TYPE_REP = { anillo: "solitario-brisa", aretes: "argollas", collar: "colgante-sol", pulsera: "pulsera-marea" };

  /* ---------- Chrome: cinta, anuncio, menú, pie, panel ---------- */
  function renderChrome() {
    const t = T();
    $("#announce").textContent = t.announce;
    $("#lang-desktop").innerHTML = langToggle();
    $("#search-btn").setAttribute("aria-label", state.lang === "es" ? "Buscar" : "Search");

    const n = t.nav, m = t.mega;
    const typeLinks = Object.keys(ZB.types).map(k => `<li><a class="link-draw" href="#coleccion-${k}">${ZB.types[k][state.lang]}</a></li>`).join("");
    const collLinks = Object.keys(ZB.collections).map(k => `<li><a class="link-draw" href="#coleccion-${k}">${L(ZB.collections[k]).name}</a></li>`).join("");
    $("#main-nav").innerHTML = `
      <div class="nav-item">
        <a class="nav-link" href="#coleccion">${n.joyeria}</a>
        <div class="mega"><div class="mega-inner">
          <div><h4>${m.cat}</h4><ul>${typeLinks}<li><a class="link-line" href="#coleccion">${m.all}</a></li></ul></div>
          <div><h4>${m.coll}</h4><ul>${collLinks}</ul></div>
          <div><h4>${m.feat}</h4><ul>
            <li><a class="link-draw" href="#coleccion-nuevo">${m.nuevo}</a></li>
            <li><a class="link-draw" href="#coleccion-grabado">${m.grabar}</a></li>
            <li><a class="link-draw" href="#coleccion-regalo">${m.regalo}</a></li>
          </ul></div>
          <div class="mega-feature">
            ${ZB.art.scene("ambar")}
            <div><h3>${m.featTitle}</h3><p>${m.featText}</p><a class="link-line label" href="#coleccion-ambar">${m.discover}</a></div>
          </div>
        </div></div>
      </div>
      <div class="nav-item"><a class="nav-link" href="#coleccion-brisa">${L(ZB.collections.brisa).name}</a></div>
      <div class="nav-item"><a class="nav-link" href="#coleccion-ambar">${L(ZB.collections.ambar).name}</a></div>
      <div class="nav-item"><a class="nav-link" href="#coleccion-anillo">${n.compromiso}</a></div>
      <div class="nav-item"><a class="nav-link" href="#coleccion-regalo">${n.regalos}</a></div>
      <div class="nav-item"><a class="nav-link" href="#historia">${n.historia}</a></div>`;

    const f = t.foot;
    const col = (h, items) => `<div class="foot-col"><h4>${h}</h4><ul>${items.map(i => `<li><a class="link-draw" href="#inicio">${i}</a></li>`).join("")}</ul></div>`;
    $("#site-footer").innerHTML = `
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <span class="logo-mark" style="font-size:1.35rem">ZEVERA</span>
            <p>${f.brand}</p>
            <p>WhatsApp · 829-763-4955</p>
          </div>
          ${col(f.help, f.helpL)}${col(f.services, f.servL)}${col(f.about, f.aboutL)}${col(f.legal, f.legalL)}
        </div>
        <div class="foot-bottom">
          <span>${f.rights}</span>
          <div class="lang" style="display:flex">${langToggle()}</div>
          <div class="pay" aria-label="Métodos de pago"><span>VISA</span><span>MASTERCARD</span></div>
        </div>
      </div>`;

    renderStylePanel();
    updateBagCount();
  }

  function renderStylePanel() {
    const s = T().style;
    const a = ZB.accents.find(x => x.id === state.accent) || ZB.accents[0];
    $("#style-toggle").innerHTML = `<i aria-hidden="true"></i>${s.btn}`;
    $("#style-panel").innerHTML = `
      <div><h3>${s.title}</h3><p style="margin-top:6px">${s.intro}</p></div>
      <div class="type-opts" role="group" aria-label="${s.type}">
        <span class="label muted">${s.type}</span>
        ${ZB.typePairs.map(tp => `<button class="type-opt" data-type="${tp.id}" aria-pressed="${state.type === tp.id}">
            <span class="sample" style="font-family:${tp.display};font-style:${tp.ital ? "italic" : "normal"}">Anillo Solitario Brisa</span>
            <span class="names">${tp.label} · ${tp.names}</span></button>`).join("")}
      </div>
      <div role="group" aria-label="${s.color}">
        <span class="label muted">${s.color} · ${L(a)} ${a.hex}</span>
        <div class="color-opts" style="margin-top:10px">
          ${ZB.accents.map(c => `<button class="color-opt" data-accent="${c.id}" aria-pressed="${state.accent === c.id}"><i style="background:${c.hex}"></i>${L(c)}</button>`).join("")}
        </div>
      </div>
      <button class="panel-close link-line" id="style-close">${s.done}</button>`;
  }

  /* ---------- Portada ---------- */
  function viewHome() {
    const t = T();
    const news = ZB.products.filter(p => p.isNew);
    const ph = t.photo;
    return `
      <section class="hero">
        <div class="hero-media">
          ${ZB.art.scene("hero", true, "hero-d", ph)}
          ${ZB.art.scene("hero", false, "hero-m", ph)}
        </div>
        <div class="hero-copy reveal">
          <span class="label">${t.heroEyebrow}</span>
          <h1>${t.heroTitle}</h1>
          <p>${t.heroText}</p>
          <a class="btn btn-light" href="#coleccion-esencial">${t.shop}</a>
        </div>
      </section>

      <section class="section rail-section">
        <div class="rail-wrap">
          <div class="rail" id="rail">${news.map(railCard).join("")}</div>
          <div class="rail-nav">
            <button class="chev" data-rail="-1" aria-label="${t.back}">${ICON.left}</button>
            <div class="rail-track"><span class="rail-thumb" id="rail-thumb"></span></div>
            <button class="chev" data-rail="1" aria-label="${t.next}">${ICON.right}</button>
          </div>
        </div>
      </section>

      <section class="section wrap">
        <div class="section-head center"><h2>${t.catTitle}</h2></div>
        <div class="cats">
          ${Object.keys(ZB.types).map(k => `
            <a class="cat" href="#coleccion-${k}">
              <div class="cat-media">${ZB.art.product(byId(TYPE_REP[k]), "main")}</div>
              <span class="cat-name">${ZB.types[k][state.lang]}</span>
            </a>`).join("")}
        </div>
      </section>

      ${["brisa", "ambar"].map((k, i) => `
      <section class="section">
        <div class="feature-full ${i ? "reverse" : ""}">
          <div class="feature-media">${ZB.art.scene(k, false, "", ph)}</div>
          <div class="feature-copy-wrap"><div class="feature-copy">
            <span class="label muted">${state.lang === "es" ? "Colección" : "Collection"}</span>
            <h2>${L(ZB.collections[k]).name}</h2>
            <p>${L(ZB.collections[k]).lead}</p>
            <a class="link-line label" href="#coleccion-${k}">${t.discoverColl}</a>
          </div></div>
        </div>
      </section>`).join("")}

      <section class="experience">
        <div class="wrap">
          <div class="section-head center"><h2>${t.expTitle}</h2></div>
          <div class="exp-grid">
            ${t.exp.map((e, i) => `<div class="exp">${[ICON.cal, ICON.pen, ICON.gift][i]}<h3>${e.t}</h3><p>${e.d}</p></div>`).join("")}
          </div>
          <div style="margin-top:44px;text-align:center"><a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink(state.lang === "es" ? "Hola, quiero agendar una cita en ZEVERA." : "Hi, I'd like to book a visit at ZEVERA.")}">${t.book}</a></div>
        </div>
      </section>

      <section class="section wrap story" id="historia-sec">
        <span class="label muted">${t.storyEyebrow}</span>
        <blockquote>${t.story}</blockquote>
        <span class="rule" aria-hidden="true"></span>
        <p class="muted">${t.storyText}</p>
        <a class="link-line label" href="#inicio">${t.readMore}</a>
      </section>

      <section class="wrap newsletter">
        <h2>${t.nlTitle}</h2>
        <p class="muted">${t.nlText}</p>
        <form id="nl-form" novalidate>
          <label for="nl-email" class="label" style="position:absolute;left:-9999px">${t.nlPh}</label>
          <input id="nl-email" type="email" placeholder="${t.nlPh}" autocomplete="email">
          <button type="submit">${t.nlBtn}</button>
        </form>
        <p class="form-note" id="nl-note" aria-live="polite"></p>
      </section>`;
  }

  /* ---------- Colección (listado) ---------- */
  const PRESETS = {
    nuevo: { es: "Novedades", en: "New arrivals", fn: p => p.isNew },
    grabado: { es: "Para personalizar", en: "To personalize", fn: p => p.engrave },
    regalo: { es: "Regalos bajo RD$ 15,000", en: "Gifts under RD$ 15,000", fn: p => p.price < 15000 }
  };

  function priceBand(p) { return p.price < 12000 ? "p1" : p.price <= 25000 ? "p2" : "p3"; }

  function results() {
    const f = state.filters;
    let list = ZB.products.filter(p =>
      (!f.type.size || f.type.has(p.type)) &&
      (!f.metal.size || p.metals.some(m => f.metal.has(m))) &&
      (!f.stone.size || f.stone.has(p.stone)) &&
      (!f.coll.size || f.coll.has(p.coll)) &&
      (!f.price.size || f.price.has(priceBand(p))) &&
      (!state.preset || !PRESETS[state.preset] || PRESETS[state.preset].fn(p)) &&
      (!state.query || (p.es.name + " " + p.en.name + " " + p.stone + " " + p.metals.join(" ")).toLowerCase().includes(state.query.toLowerCase()))
    );
    if (state.sort === "asc") list = list.slice().sort((a, b) => a.price - b.price);
    if (state.sort === "desc") list = list.slice().sort((a, b) => b.price - a.price);
    if (state.sort === "new") list = list.slice().sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return list;
  }

  function filterGroups() {
    const t = T();
    const count = (key, val) => ZB.products.filter(p => key === "metal" ? p.metals.includes(val) : key === "price" ? priceBand(p) === val : p[key] === val).length;
    const groups = [
      ["type", t.fType, Object.keys(ZB.types).map(k => [k, ZB.types[k][state.lang]])],
      ["metal", t.fMetal, Object.keys(ZB.metals).map(k => [k, L(ZB.metals[k])])],
      ["stone", t.fStone, Object.keys(ZB.stones).map(k => [k, L(ZB.stones[k])])],
      ["coll", t.fColl, Object.keys(ZB.collections).map(k => [k, L(ZB.collections[k]).name])],
      ["price", t.fPrice, t.prices]
    ];
    return groups.map(([key, title, opts], i) => `
      <details ${i < 3 || state.filters[key].size ? "open" : ""}>
        <summary>${title}</summary>
        <div class="opts">
          ${opts.map(([v, lab]) => `<label class="check"><input type="checkbox" data-f="${key}" value="${v}" ${state.filters[key].has(v) ? "checked" : ""}> ${esc(lab)} <span class="n">${count(key, v)}</span></label>`).join("")}
        </div>
      </details>`).join("") + `<button class="clear-btn link-line" data-clear>${t.clear}</button>`;
  }

  function gridHtml() {
    const t = T();
    const list = results();
    if (!list.length) return `<p class="empty">${t.none}</p>`;
    const cards = list.map(card);
    const noFilters = !Object.values(state.filters).some(s => s.size) && !state.preset && !state.query;
    if (noFilters && cards.length >= 6) {
      cards.splice(4, 0, `<a class="editorial-tile" href="#coleccion-ambar">
        ${ZB.art.scene("ambar")}
        <div class="copy"><span class="label">${state.lang === "es" ? "Colección Ámbar" : "Ámbar Collection"}</span><h3>${t.editorialTitle}</h3></div>
      </a>`);
    }
    return `<div class="grid">${cards.join("")}</div>`;
  }

  function plpTitle() {
    const t = T();
    if (state.query) return (state.lang === "es" ? "Resultados para “" : "Results for “") + esc(state.query) + "”";
    if (state.preset && PRESETS[state.preset]) return L(PRESETS[state.preset]);
    const f = state.filters;
    if (f.type.size === 1 && !f.coll.size) return ZB.types[[...f.type][0]][state.lang];
    if (f.coll.size === 1 && !f.type.size) return (state.lang === "es" ? "Colección " : "") + L(ZB.collections[[...f.coll][0]]).name + (state.lang === "en" ? " Collection" : "");
    return t.jewelry;
  }

  function viewPlp() {
    const t = T();
    const f = state.filters;
    const collLead = f.coll.size === 1 && !f.type.size ? L(ZB.collections[[...f.coll][0]]).lead : t.plpIntro;
    return `
      <div class="wrap">
        <nav class="crumbs" aria-label="Migas"><a href="#inicio" class="link-draw">${t.home}</a><span>/</span><a href="#coleccion" class="link-draw">${t.jewelry}</a></nav>
        <header class="plp-head reveal">
          <h1>${plpTitle()}</h1>
          <p>${collLead}</p>
        </header>
        <div class="plp">
          <aside class="filters-panel"><div class="filters" id="filters-desktop">${filterGroups()}</div></aside>
          <div>
            <div class="toolbar">
              <button class="filter-btn only-mobile" id="open-filters">${ICON.filter}${t.filterSort}</button>
              <span class="plp-count" id="plp-count">${t.pieces(results().length)}</span>
              <label class="only-desktop" style="align-items:center;gap:8px;font-size:var(--t-small)">
                <span class="muted">${t.sort}</span>
                <select id="sort">${Object.entries(t.sorts).map(([k, v]) => `<option value="${k}" ${state.sort === k ? "selected" : ""}>${v}</option>`).join("")}</select>
              </label>
            </div>
            <div id="plp-grid">${gridHtml()}</div>
          </div>
        </div>
        <section class="faq">
          <h2 style="margin-bottom:16px">${t.faqTitle}</h2>
          ${t.faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
        </section>
      </div>`;
  }

  function refreshPlp() {
    const g = $("#plp-grid"); if (!g) return;
    g.innerHTML = gridHtml();
    $("#plp-count").textContent = T().pieces(results().length);
    const fd = $("#filters-desktop"); if (fd) fd.innerHTML = filterGroups();
    const fm = $("#filters-mobile"); if (fm) fm.innerHTML = filterGroups();
    const n = $("#apply-count"); if (n) n.textContent = `${T().apply} (${results().length})`;
    const h = $(".plp-head h1"); if (h) h.innerHTML = plpTitle();
  }

  /* ---------- Ficha de producto ---------- */
  const pdp = { metal: null, size: null, engrave: false, text: "", gift: false };

  function galleryHtml(p) {
    const v = Object.assign({}, p, { metal: pdp.metal || p.metal });
    const ph = T().photo;
    return `<div class="gallery-track" id="gallery-track">
        ${ZB.art.product(v, "main", "zoomable", ph)}${ZB.art.product(v, "alt", "", ph)}${ZB.art.product(v, "detail", "", ph)}${ZB.art.product(v, "scale", "", ph)}
      </div>
      <div class="dots" id="dots">${[0, 1, 2, 3].map(i => `<span data-on="${i === 0}"></span>`).join("")}</div>`;
  }

  function viewPdp(p) {
    const t = T();
    if (!pdp.metal || !p.metals.includes(pdp.metal)) pdp.metal = p.metal;
    const coll = ZB.collections[p.coll];
    const sizeLabel = p.type === "anillo" ? t.size : p.type === "collar" ? t.length : t.size;
    const specs = [
      [t.specL.metal, L(ZB.metals[pdp.metal])],
      [t.specL.stone, L(ZB.stones[p.stone])],
      p.spec.ct ? [t.specL.ct, p.spec.ct] : null,
      [t.specL.weight, p.spec.weight],
      [t.specL.size, p.spec.size],
      [t.specL.ref, "ZEVERA-" + p.id.toUpperCase().slice(0, 8)]
    ].filter(Boolean);
    const pairs = (ZB.pairs[p.id] || []).map(byId).filter(Boolean);
    const waMsg = state.lang === "es" ? `Hola, me interesa el ${p.es.name} (${money(p.price)}).` : `Hi, I'm interested in the ${p.en.name} (${money(p.price)}).`;

    return `
      <div class="wrap">
        <nav class="crumbs" aria-label="Migas">
          <a href="#inicio" class="link-draw">${t.home}</a><span>/</span>
          <a href="#coleccion-${p.type}" class="link-draw">${ZB.types[p.type][state.lang]}</a><span>/</span>
          <span>${esc(L(p).name)}</span>
        </nav>
        <div class="pdp">
          <div class="gallery" id="gallery">${galleryHtml(p)}</div>

          <div class="buy">
            <div class="buy-head">
              <a class="label muted link-draw" style="justify-self:start" href="#coleccion-${p.coll}">${state.lang === "es" ? "Colección " : ""}${L(coll).name}</a>
              <h1 style="font-size:var(--t-h2)">${esc(L(p).name)}</h1>
              <span class="buy-price">${money(p.price)}</span>
            </div>
            <p class="buy-lead">${L(p).desc}</p>

            <div>
              <div class="opt-label"><span>${t.material}</span><b id="metal-name">${L(ZB.metals[pdp.metal])}</b></div>
              <div class="swatches">
                ${p.metals.map(m => `<button class="swatch" data-metal="${m}" aria-pressed="${pdp.metal === m}" aria-label="${L(ZB.metals[m])}"><span style="background:${ZB.metals[m].sw}"></span></button>`).join("")}
              </div>
            </div>

            ${p.sizes ? `<div>
              <div class="opt-label"><span>${sizeLabel}</span><button class="link-line" style="font-size:var(--t-small);letter-spacing:0;text-transform:none" id="size-guide">${t.sizeGuide}</button></div>
              <div class="sizes">${p.sizes.map(s => `<button class="size" data-size="${s}" aria-pressed="${String(pdp.size) === String(s)}">${s}</button>`).join("")}</div>
            </div>` : ""}

            ${p.engrave ? `<div class="addon">
              <label class="check"><input type="checkbox" id="engrave-on" ${pdp.engrave ? "checked" : ""}> ${t.engrave} <span class="n">${t.engraveFree}</span></label>
              <div id="engrave-box" ${pdp.engrave ? "" : "hidden"}>
                <label for="engrave-text" class="label muted" style="position:absolute;left:-9999px">${t.engrave}</label>
                <input class="engrave-input" id="engrave-text" maxlength="12" placeholder="${t.engravePh}" value="${esc(pdp.text)}">
                <div class="hint"><span>${t.engraveHint}</span><span id="engrave-count">${pdp.text.length}/12</span></div>
              </div>
            </div>` : ""}

            <label class="check"><input type="checkbox" id="gift-on" ${pdp.gift ? "checked" : ""}> ${t.gift}</label>

            <div class="cta-stack">
              <button class="btn btn-primary btn-block" id="add-bag">${t.addBag}</button>
              <a class="btn btn-secondary btn-block" target="_blank" rel="noopener" href="${waLink(waMsg)}">${t.askWa}</a>
            </div>

            <ul class="perks">
              <li>${ICON.truck}${t.perks[0]}</li><li>${ICON.store}${t.perks[1]}</li><li>${ICON.swap}${t.perks[2]}</li>
            </ul>

            <div class="acc">
              <details open><summary>${t.details}</summary><div class="acc-body"><dl class="spec">${specs.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl></div></details>
              <details><summary>${t.care}</summary><div class="acc-body"><p>${t.careText}</p></div></details>
              <details><summary>${t.shipping}</summary><div class="acc-body"><p>${t.shippingText}</p></div></details>
            </div>
          </div>
        </div>

        <section class="section">
          <div class="section-head"><h2>${t.pairTitle}</h2></div>
          <div class="grid">${pairs.map(card).join("")}</div>
        </section>
      </div>`;
  }

  function stickyBuy(p) {
    const sb = $("#sticky-buy");
    sb.hidden = false;
    sb.innerHTML = `<div class="sb-info"><span>${esc(L(p).name)}</span><span class="muted">${money(p.price)}</span></div>
      <button class="btn btn-primary" data-sticky-add>${T().addBag}</button>`;
    const target = $("#add-bag");
    if (!("IntersectionObserver" in window) || !target) return;
    const io = new IntersectionObserver(([e]) => { sb.dataset.show = String(!e.isIntersecting && e.boundingClientRect.top < 0); });
    io.observe(target);
    stickyBuy.io = io;
  }

  function addToBag(p) {
    const t = T();
    if (p.sizes && pdp.size === null) {
      toast(t.chooseSize);
      const s = $(".sizes"); if (s) s.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    state.bag.push({ id: p.id, metal: pdp.metal, size: pdp.size, text: pdp.engrave ? pdp.text.trim() : "", gift: pdp.gift });
    store.set("bag", state.bag);
    updateBagCount();
    openBag();
  }

  /* ---------- Bolsa ---------- */
  function updateBagCount() {
    const c = $("#bag-count");
    c.textContent = state.bag.length;
    c.dataset.empty = String(!state.bag.length);
  }

  function openBag() {
    const t = T();
    const lines = state.bag.map((l, i) => {
      const p = byId(l.id); if (!p) return "";
      const v = Object.assign({}, p, { metal: l.metal });
      return `<div class="bag-line">
        ${ZB.art.product(v, "main")}
        <div class="meta">
          <span>${esc(L(p).name)}</span>
          <span class="muted">${L(ZB.metals[l.metal])}${l.size !== null && l.size !== undefined ? " · " + esc(l.size) : ""}</span>
          ${l.text ? `<span class="muted">${t.engravedWith}: <em>${esc(l.text)}</em></span>` : ""}
          ${l.gift ? `<span class="muted">${t.giftWrap}</span>` : ""}
          <span style="margin-top:6px">${money(p.price)}</span>
          <button class="link-line muted" style="justify-self:start;font-size:.78rem;margin-top:6px" data-remove="${i}">${t.remove}</button>
        </div>
      </div>`;
    }).join("");
    const total = state.bag.reduce((s, l) => s + (byId(l.id)?.price || 0), 0);
    openDrawer($("#bag-drawer"), `
      <div class="drawer-top"><span class="label">${t.bag} (${state.bag.length})</span><button class="icon-btn" data-close aria-label="${t.close}">${ICON.close}</button></div>
      <div class="bag-body">${lines || `<p class="muted">${t.bagEmpty}</p>`}</div>
      ${state.bag.length ? `<div class="bag-foot">
        <div class="bag-total"><span>${t.subtotal}</span><span>${money(total)}</span></div>
        <button class="btn btn-primary btn-block" id="checkout">${t.checkout}</button>
      </div>` : ""}`);
  }

  /* ---------- Menú móvil por niveles ---------- */
  function openMenu() {
    const t = T(), n = t.nav, m = t.mega;
    const html = `
      <div class="drawer-top"><span class="logo-mark" style="font-size:1.1rem">ZEVERA</span><button class="icon-btn" data-close aria-label="${t.close}">${ICON.close}</button></div>
      <div class="levels">
        <div class="level" data-level="1" data-pos="center">
          <ul>
            <li><button data-go="2">${n.joyeria}<span aria-hidden="true">›</span></button></li>
            <li><a href="#coleccion-brisa">${L(ZB.collections.brisa).name}</a></li>
            <li><a href="#coleccion-ambar">${L(ZB.collections.ambar).name}</a></li>
            <li><a href="#coleccion-anillo">${n.compromiso}</a></li>
            <li><a href="#coleccion-regalo">${n.regalos}</a></li>
            <li><a href="#historia">${n.historia}</a></li>
          </ul>
          <div class="drawer-foot">
            ${ZB.art.scene("ambar", true)}
            <a class="link-line" style="justify-self:start" target="_blank" rel="noopener" href="${waLink(state.lang === "es" ? "Hola, quiero agendar una cita." : "Hi, I'd like to book a visit.")}">${n.citas} · WhatsApp 829-763-4955</a>
            <span>${t.account}</span>
            <div class="lang">${langToggle()}</div>
          </div>
        </div>
        <div class="level" data-level="2" data-pos="right">
          <button class="back" data-go="1">‹ ${t.back}</button>
          <h4>${m.cat}</h4>
          <ul class="sub">${Object.keys(ZB.types).map(k => `<li><a href="#coleccion-${k}">${ZB.types[k][state.lang]}</a></li>`).join("")}<li><a href="#coleccion">${m.all}</a></li></ul>
          <h4>${m.coll}</h4>
          <ul class="sub">${Object.keys(ZB.collections).map(k => `<li><a href="#coleccion-${k}">${L(ZB.collections[k]).name}</a></li>`).join("")}</ul>
          <h4>${m.feat}</h4>
          <ul class="sub"><li><a href="#coleccion-nuevo">${m.nuevo}</a></li><li><a href="#coleccion-grabado">${m.grabar}</a></li><li><a href="#coleccion-regalo">${m.regalo}</a></li></ul>
        </div>
      </div>`;
    openDrawer($("#menu-drawer"), html);
  }

  function openFilters() {
    const t = T();
    openDrawer($("#bag-drawer"), `
      <div class="drawer-top"><span class="label">${t.filterSort}</span><button class="icon-btn" data-close aria-label="${t.close}">${ICON.close}</button></div>
      <div class="bag-body">
        <label style="display:grid;gap:6px;font-size:var(--t-small)"><span class="label">${t.sort}</span>
          <select id="sort-m" style="border:1px solid var(--line);padding:10px;background:var(--bg);font-size:16px">${Object.entries(t.sorts).map(([k, v]) => `<option value="${k}" ${state.sort === k ? "selected" : ""}>${v}</option>`).join("")}</select>
        </label>
        <div class="filters" id="filters-mobile">${filterGroups()}</div>
      </div>
      <div class="bag-foot"><button class="btn btn-primary btn-block" data-close id="apply-count">${t.apply} (${results().length})</button></div>`);
  }

  let lastFocus = null;
  function openDrawer(el, html) {
    closeDrawers(true);
    lastFocus = document.activeElement;
    el.innerHTML = html;
    el.hidden = false;
    $("#backdrop").hidden = false;
    document.body.style.overflow = "hidden";
    const f = el.querySelector("button, a, input"); if (f) f.focus({ preventScroll: true });
  }
  function closeDrawers(silent) {
    ["#menu-drawer", "#bag-drawer"].forEach(s => { $(s).hidden = true; });
    $("#backdrop").hidden = true;
    document.body.style.overflow = "";
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  /* ---------- Búsqueda ---------- */
  function toggleSearch() {
    const existing = $("#search-bar");
    if (existing) { existing.remove(); return; }
    const bar = document.createElement("div");
    bar.className = "search-bar"; bar.id = "search-bar";
    bar.innerHTML = `<form id="search-form" role="search"><label for="q" style="position:absolute;left:-9999px">${T().searchPh}</label><input id="q" type="search" placeholder="${T().searchPh}" value="${esc(state.query)}"><button type="button" class="icon-btn" data-search-close aria-label="${T().close}">${ICON.close}</button></form>`;
    $("#site-header").appendChild(bar);
    $("#q").focus();
  }

  /* ---------- Aviso ---------- */
  let toastTimer;
  function toast(msg) {
    let el = $("#toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.dataset.show = "true";
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.dataset.show = "false"; }, 2600);
  }

  /* ---------- Rutas ---------- */
  function route() {
    const hash = (location.hash || "#inicio").slice(1);
    const app = $("#app");
    const sb = $("#sticky-buy"); sb.hidden = true; sb.dataset.show = "false";
    if (stickyBuy.io) { stickyBuy.io.disconnect(); stickyBuy.io = null; }
    document.body.dataset.pdp = "false";
    $$(".nav-link").forEach(a => a.removeAttribute("aria-current"));

    if (hash.startsWith("producto-")) {
      const p = byId(hash.slice(9));
      if (p) {
        if (route.lastProduct !== p.id) Object.assign(pdp, { metal: p.metal, size: null, engrave: false, text: "", gift: false });
        route.lastProduct = p.id;
        app.innerHTML = viewPdp(p);
        document.body.dataset.pdp = "true";
        stickyBuy(p);
        bindGallery();
        return;
      }
    }

    if (hash.startsWith("coleccion")) {
      const key = hash.slice(10);
      if (route.lastPlp !== hash) {
        Object.values(state.filters).forEach(s => s.clear());
        state.preset = ""; state.query = route.pendingQuery || "";
        if (ZB.types[key]) state.filters.type.add(key);
        else if (ZB.collections[key]) state.filters.coll.add(key);
        else if (PRESETS[key]) state.preset = key;
      }
      route.pendingQuery = "";
      route.lastPlp = hash;
      app.innerHTML = viewPlp();
      const cur = $(`.nav-link[href="#${hash}"]`); if (cur) cur.setAttribute("aria-current", "page");
      return;
    }

    route.lastPlp = null;
    app.innerHTML = viewHome();
    bindRail();
    if (hash === "historia") requestAnimationFrame(() => $("#historia-sec")?.scrollIntoView({ behavior: "smooth" }));
  }

  function bindGallery() {
    const track = $("#gallery-track"); if (!track) return;
    track.addEventListener("scroll", () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      $$("#dots span").forEach((d, k) => d.dataset.on = String(k === i));
    }, { passive: true });
  }

  function bindRail() {
    const r = $("#rail"), track = $(".rail-track"), thumb = $("#rail-thumb");
    if (!r || !track || !thumb) return;
    const update = () => {
      const max = r.scrollWidth - r.clientWidth;
      const trackW = track.clientWidth;
      const thumbW = Math.max(24, (r.clientWidth / r.scrollWidth) * trackW);
      const left = max > 0 ? (r.scrollLeft / max) * (trackW - thumbW) : 0;
      thumb.style.width = thumbW + "px";
      thumb.style.left = left + "px";
    };
    r.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
  }

  /* ---------- Eventos (delegados) ---------- */
  document.addEventListener("click", e => {
    const el = e.target.closest("button, a");
    if (!el) { if (e.target.id === "backdrop") closeDrawers(); return; }

    if (el.matches("#menu-open")) return openMenu();
    if (el.matches("#bag-btn")) return openBag();
    if (el.matches("#search-btn")) return toggleSearch();
    if (el.matches("[data-search-close]")) return toggleSearch();
    if (el.matches("[data-close]")) return closeDrawers();
    if (el.matches("#open-filters")) return openFilters();

    if (el.dataset.go) {
      $$(".level").forEach(l => { l.dataset.pos = l.dataset.level === el.dataset.go ? "center" : (l.dataset.level < el.dataset.go ? "left" : "right"); });
      const lv = $(`.level[data-level="${el.dataset.go}"] button, .level[data-level="${el.dataset.go}"] a`); if (lv) lv.focus({ preventScroll: true });
      return;
    }

    if (el.dataset.lang) {
      state.lang = el.dataset.lang; store.set("lang", state.lang);
      applyStyle(); renderChrome(); route();
      if (!$("#menu-drawer").hidden) openMenu();
      return;
    }

    if (el.dataset.fav) {
      const id = el.dataset.fav;
      state.favs.has(id) ? state.favs.delete(id) : state.favs.add(id);
      store.set("favs", [...state.favs]);
      $$(`[data-fav="${id}"]`).forEach(b => b.setAttribute("aria-pressed", String(state.favs.has(id))));
      return;
    }

    if (el.dataset.rail) {
      const r = $("#rail"); r.scrollBy({ left: Number(el.dataset.rail) * r.clientWidth * .8, behavior: "smooth" });
      return;
    }

    if (el.hasAttribute("data-clear")) {
      Object.values(state.filters).forEach(s => s.clear()); state.preset = ""; state.query = "";
      return refreshPlp();
    }

    if (el.dataset.metal) {
      pdp.metal = el.dataset.metal;
      const p = byId(route.lastProduct);
      $$(".swatch").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.metal === pdp.metal)));
      $("#metal-name").textContent = L(ZB.metals[pdp.metal]);
      $("#gallery").innerHTML = galleryHtml(p); bindGallery();
      const dd = $(".spec dd"); if (dd) dd.textContent = L(ZB.metals[pdp.metal]);
      return;
    }
    if (el.dataset.size) {
      pdp.size = el.dataset.size;
      $$(".size").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.size === pdp.size)));
      return;
    }
    if (el.matches("#size-guide")) return toast(state.lang === "es" ? "La guía de tallas se abre aquí en la tienda real." : "The size guide opens here in the real store.");
    if (el.matches("#add-bag") || el.hasAttribute("data-sticky-add")) return addToBag(byId(route.lastProduct));
    if (el.dataset.remove !== undefined) {
      state.bag.splice(Number(el.dataset.remove), 1); store.set("bag", state.bag); updateBagCount(); return openBag();
    }
    if (el.matches("#checkout")) return toast(T().checkoutNote);

    if (el.matches("#style-toggle")) {
      const p = $("#style-panel"); p.hidden = !p.hidden; el.setAttribute("aria-expanded", String(!p.hidden)); return;
    }
    if (el.matches("#style-close")) { $("#style-panel").hidden = true; $("#style-toggle").setAttribute("aria-expanded", "false"); return; }
    if (el.dataset.type && el.classList.contains("type-opt")) {
      state.type = el.dataset.type; store.set("type", state.type); applyStyle(); renderStylePanel(); $("#style-panel").hidden = false; return;
    }
    if (el.dataset.accent) {
      state.accent = el.dataset.accent; store.set("accent", state.accent); applyStyle(); renderStylePanel(); $("#style-panel").hidden = false; return;
    }

    // Navegar a un enlace interno cierra los paneles
    if (el.tagName === "A" && el.getAttribute("href")?.startsWith("#")) {
      closeDrawers(true);
      if (el.getAttribute("href") === location.hash) { e.preventDefault(); route(); }
      $("#search-bar")?.remove();
    }
  });

  document.addEventListener("change", e => {
    const el = e.target;
    if (el.dataset.f) {
      const set = state.filters[el.dataset.f];
      el.checked ? set.add(el.value) : set.delete(el.value);
      state.preset = "";
      return refreshPlp();
    }
    if (el.id === "sort" || el.id === "sort-m") { state.sort = el.value; return refreshPlp(); }
    if (el.id === "engrave-on") { pdp.engrave = el.checked; $("#engrave-box").hidden = !el.checked; if (el.checked) $("#engrave-text").focus(); return; }
    if (el.id === "gift-on") { pdp.gift = el.checked; }
  });

  document.addEventListener("input", e => {
    if (e.target.id === "engrave-text") {
      const clean = e.target.value.replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9& .]/g, "");
      if (clean !== e.target.value) e.target.value = clean;
      pdp.text = clean;
      $("#engrave-count").textContent = `${clean.length}/12`;
    }
  });

  document.addEventListener("submit", e => {
    e.preventDefault();
    if (e.target.id === "nl-form") {
      const v = $("#nl-email").value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      $("#nl-note").textContent = ok ? T().nlOk : T().nlErr;
      if (ok) $("#nl-email").value = "";
    }
    if (e.target.id === "search-form") {
      const q = $("#q").value.trim();
      route.pendingQuery = q;
      route.lastPlp = null;
      $("#search-bar")?.remove();
      if (location.hash === "#coleccion") route(); else location.hash = "coleccion";
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeDrawers();
      $("#style-panel").hidden = true;
      $("#search-bar")?.remove();
    }
  });

  window.addEventListener("hashchange", () => {
    route();
    if (location.hash !== "#historia") window.scrollTo({ top: 0 });
  });

  /* ---------- Inicio ---------- */
  applyStyle();
  renderChrome();
  route();
})();
