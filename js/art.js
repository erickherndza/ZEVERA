/* ==========================================================================
   ZB Concep — imágenes provisionales
   Dibujos vectoriales simples que ocupan el lugar de las fotos reales.
   Mismo formato (4:5) y misma lógica de tomas que pide la guía de fotografía:
   main = producto solo · alt = puesta · detail = macro · scale = escala
   ========================================================================== */

(function () {
  let uid = 0;

  const METAL = {
    amarillo: ["#F6E3AE", "#D9B465", "#A67C2E", "#EFD69A"],
    blanco:   ["#FFFFFF", "#D5D8DD", "#9EA3AB", "#EEF0F2"],
    plata:    ["#FFFFFF", "#D0D2D6", "#9A9EA5", "#ECEDEF"],
    rosa:     ["#F8DCCF", "#DDA48E", "#A8705C", "#F0C9B7"]
  };

  function defs(id, metal) {
    const m = METAL[metal] || METAL.amarillo;
    return `
      <defs>
        <linearGradient id="m${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${m[0]}"/><stop offset=".35" stop-color="${m[1]}"/>
          <stop offset=".62" stop-color="${m[2]}"/><stop offset="1" stop-color="${m[3]}"/>
        </linearGradient>
        <radialGradient id="a${id}" cx=".38" cy=".32" r=".75">
          <stop offset="0" stop-color="#FFD58A"/><stop offset=".45" stop-color="#E2922C"/><stop offset="1" stop-color="#9A4A0E"/>
        </radialGradient>
        <linearGradient id="d${id}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#FFFFFF"/><stop offset=".5" stop-color="#DCE3EA"/><stop offset="1" stop-color="#FFFFFF"/>
        </linearGradient>
        <filter id="s${id}" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
      </defs>`;
  }

  function stone(id, kind, x, y, r) {
    if (kind === "diamante") {
      return `<g>
        <polygon points="${x - r},${y} ${x - r * .5},${y - r * .7} ${x + r * .5},${y - r * .7} ${x + r},${y} ${x},${y + r * 1.1}" fill="url(#d${id})" stroke="#9FA8B3" stroke-width="1"/>
        <path d="M${x - r},${y} H${x + r} M${x - r * .5},${y - r * .7} L${x - r * .2},${y} L${x},${y + r * 1.1} L${x + r * .2},${y} L${x + r * .5},${y - r * .7}" stroke="#AAB3BD" stroke-width=".8" fill="none"/>
      </g>`;
    }
    if (kind === "ambar") {
      return `<ellipse cx="${x}" cy="${y}" rx="${r}" ry="${r * .9}" fill="url(#a${id})"/>
        <ellipse cx="${x - r * .3}" cy="${y - r * .35}" rx="${r * .28}" ry="${r * .16}" fill="#FFF3D6" opacity=".55"/>`;
    }
    return "";
  }

  // Dibujo de la pieza, centrado en (200, 250) dentro de una caja 400×500
  function piece(p, id) {
    const g = `url(#m${id})`;
    const shadow = (cx, cy, rx) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * .16}" fill="#000" opacity=".13" filter="url(#s${id})"/>`;

    if (p.type === "anillo") {
      let top = "";
      if (p.id === "sello") {
        top = `<ellipse cx="200" cy="262" rx="40" ry="20" fill="${g}" stroke="#8E6A55" stroke-width="1"/>
               <text x="200" y="268" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="17" fill="#8E6A55" opacity=".8">ZB</text>`;
      } else if (p.id === "eternidad") {
        top = Array.from({ length: 11 }, (_, i) => {
          const t = Math.PI * (i / 10);
          const x = 200 - 92 * Math.cos(t), y = 300 + 33 * Math.sin(t);
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" fill="url(#d${id})" stroke="#A7B0BA" stroke-width=".8"/>`;
        }).join("");
      } else if (p.stone === "diamante") {
        top = `<path d="M186 272 L192 252 M214 272 L208 252" stroke="${g}" stroke-width="4"/>` + stone(id, "diamante", 200, 250, 22);
      } else if (p.stone === "ambar") {
        top = `<ellipse cx="200" cy="262" rx="30" ry="24" fill="${g}"/>` + stone(id, "ambar", 200, 260, 24);
      }
      return shadow(200, 352, 110) + `
        <path d="M105 300 A95 34 0 0 1 295 300" fill="none" stroke="${g}" stroke-width="10" opacity=".75"/>
        <path d="M105 300 A95 34 0 0 0 295 300" fill="none" stroke="${g}" stroke-width="15"/>` + top;
    }

    if (p.type === "aretes") {
      const one = (x) => {
        if (p.id === "argollas") return `<circle cx="${x}" cy="265" r="50" fill="none" stroke="${g}" stroke-width="9"/>`;
        if (p.id === "aretes-ola") return `<path d="M${x} 190 C${x + 40} 220 ${x - 40} 270 ${x} 310 S${x + 30} 350 ${x + 10} 360" fill="none" stroke="${g}" stroke-width="10" stroke-linecap="round"/>`;
        return `<path d="M${x} 185 q-14 0 -14 16 q0 12 14 20 v18" fill="none" stroke="${g}" stroke-width="3"/>
                <circle cx="${x}" cy="246" r="6" fill="${g}"/>` + stone(id, "ambar", x, 290, 30);
      };
      return shadow(200, 380, 120) + one(140) + one(260);
    }

    if (p.type === "collar") {
      let pend = "";
      if (p.id === "collar-horizonte") pend = `<rect x="170" y="316" width="60" height="7" rx="3.5" fill="${g}"/>` + stone(id, "diamante", 200, 312, 7);
      else if (p.id === "colgante-sol") pend = `<circle cx="200" cy="344" r="36" fill="none" stroke="${g}" stroke-width="7" stroke-dasharray="3 2"/>` + stone(id, "ambar", 200, 344, 27);
      const drop = p.id === "cadena-fina" ? 300 : 318;
      return shadow(200, 400, 120) + `
        <path d="M70 90 C 90 ${drop + 30}, 310 ${drop + 30}, 330 90" fill="none" stroke="${g}" stroke-width="3" stroke-dasharray="${p.id === "cadena-fina" ? "5 2" : "none"}"/>` + pend;
    }

    // pulsera
    const beads = p.stone === "ambar" ? [160, 200, 240].map(x => stone(id, "ambar", x, 318 + (x === 200 ? 4 : 0), 13)).join("") : "";
    return shadow(200, 362, 125) + `
      <ellipse cx="200" cy="280" rx="118" ry="62" fill="none" stroke="${g}" stroke-width="7" opacity=".7"/>
      <path d="M82 280 A118 62 0 0 0 318 280" fill="none" stroke="${g}" stroke-width="12" stroke-dasharray="${p.stone === "ambar" ? "none" : "16 5"}" stroke-linecap="round"/>` + beads;
  }

  const BG = {
    main: ["#F4F0EA", "#ECE6DD"],
    scale: ["#EFEAE3", "#E4DDD2"],
    detail: ["#F1ECE5", "#E6DFD5"],
    alt: ["#D8BFA9", "#BF9E83"]
  };

  function productSvg(p, variant) {
    const id = ++uid;
    const bg = BG[variant] || BG.main;
    let inner = piece(p, id);
    let extra = "";
    if (variant === "alt") {
      // Toma "puesta": forma suave que sugiere piel, sin figura real
      extra = `<ellipse cx="200" cy="560" rx="260" ry="330" fill="#E6CDB8" opacity=".55"/>
               <ellipse cx="120" cy="120" rx="160" ry="120" fill="#FFFFFF" opacity=".12"/>`;
      inner = `<g transform="translate(200 250) scale(1.12) translate(-200 -250)">${inner}</g>`;
    } else if (variant === "detail") {
      inner = `<g transform="translate(200 250) scale(2.3) translate(-200 -272)">${inner}</g>`;
    } else if (variant === "scale") {
      inner = `<g transform="translate(200 250) scale(.62) translate(-200 -260)">${inner}</g>
               <line x1="120" y1="420" x2="280" y2="420" stroke="#9C958C" stroke-width="1"/>
               <line x1="120" y1="414" x2="120" y2="426" stroke="#9C958C"/><line x1="280" y1="414" x2="280" y2="426" stroke="#9C958C"/>`;
    }
    return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      ${defs(id, p.metal)}
      <linearGradient id="bg${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient>
      <rect width="400" height="500" fill="url(#bg${id})"/>
      ${extra}${inner}
    </svg>`;
  }

  // Escena de campaña (portada, colecciones, menú)
  const SCENES = {
    brisa: { bg: ["#2B3A42", "#141C21"], glow: "#8FA7B3", metal: "amarillo", p: "collar-horizonte" },
    ambar: { bg: ["#3B2616", "#150D07"], glow: "#E39A3B", metal: "amarillo", p: "colgante-sol" },
    esencial: { bg: ["#3A3530", "#1A1714"], glow: "#CDB894", metal: "rosa", p: "sello" },
    hero: { bg: ["#35302A", "#15120F"], glow: "#E8CF95", metal: "amarillo", p: "solitario-brisa" }
  };

  function sceneSvg(key, wide) {
    const s = SCENES[key] || SCENES.hero;
    const p = ZB.products.find(x => x.id === s.p);
    const id = ++uid;
    const W = wide ? 1600 : 400, H = wide ? 900 : 500;
    const cx = wide ? 1060 : 200, cy = wide ? 380 : 230, k = wide ? 1.9 : 1;
    const sparkle = (x, y, r) => `<path d="M${x} ${y - r} L${x + r * .18} ${y - r * .18} L${x + r} ${y} L${x + r * .18} ${y + r * .18} L${x} ${y + r} L${x - r * .18} ${y + r * .18} L${x - r} ${y} L${x - r * .18} ${y - r * .18}Z" fill="#FFF6DF" opacity=".85"/>`;
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      ${defs(id, s.metal)}
      <radialGradient id="bg${id}" cx="${wide ? .66 : .5}" cy=".42" r="${wide ? .7 : .8}">
        <stop offset="0" stop-color="${s.bg[0]}"/><stop offset="1" stop-color="${s.bg[1]}"/>
      </radialGradient>
      <radialGradient id="gl${id}" cx=".5" cy=".5" r=".5">
        <stop offset="0" stop-color="${s.glow}" stop-opacity=".35"/><stop offset="1" stop-color="${s.glow}" stop-opacity="0"/>
      </radialGradient>
      <rect width="${W}" height="${H}" fill="url(#bg${id})"/>
      <circle cx="${cx}" cy="${cy}" r="${wide ? 420 : 210}" fill="url(#gl${id})"/>
      <g transform="translate(${cx} ${cy}) scale(${k}) translate(-200 -270)">${piece(p, id).replace(/opacity="\.13"/, 'opacity=".4"')}</g>
      ${sparkle(cx + 90 * k, cy - 70 * k, 14 * k)}${sparkle(cx - 110 * k, cy - 20 * k, 8 * k)}
    </svg>`;
  }

  function tag(text) {
    return text ? `<span class="art-tag">${text}</span>` : "";
  }

  ZB.art = {
    product(p, variant = "main", cls = "", label = "") {
      return `<div class="art ${cls}">${productSvg(p, variant)}${tag(label)}</div>`;
    },
    scene(key, wide = false, cls = "", label = "") {
      return `<div class="art ${cls}">${sceneSvg(key, wide)}${tag(label)}</div>`;
    }
  };
})();
