/* ==========================================================================
   ZB Concep — imágenes del demo
   Fotos de banco (magnific.com) usadas como marcador visual, en el mismo
   formato y la misma lógica de tomas que pide la guía de fotografía:
   main = producto solo · alt = puesta · detail = macro · scale = escala
   Se reemplazan por el catálogo real cuando la clienta entregue sus fotos.
   ========================================================================== */

(function () {
  const BASE = "assets/img/";

  // Fotos por tipo de pieza. "mains" rota entre los productos de ese tipo
  // para que cada uno se vea distinto aunque compartan banco de imágenes.
  const PHOTOS = {
    anillo: {
      mains: ["rings-pair-white.jpg", "ring-worn-rose.jpg", "ring-cushion-gray.jpg", "ring-band-minimal.jpg"],
      alt: "ring-hand-mannequin.jpg",
      detail: "ring-macro-dark.jpg",
      pos: { alt: "center 35%", detail: "center 60%" }
    },
    aretes: {
      mains: ["earring-worn.jpg", "flatlay-chain.jpg"],
      alt: "earring-worn.jpg",
      detail: "flatlay-chain.jpg",
      pos: { main1: "60% 30%", alt: "center 30%", detail: "64% 40%" }
    },
    collar: {
      mains: ["necklace-worn.jpg"],
      alt: "necklace-worn.jpg",
      detail: "necklace-worn.jpg",
      pos: { main0: "center 30%", alt: "center 15%", detail: "center 55%" }
    },
    pulsera: {
      mains: ["bracelet-worn.jpg", "bracelet-emerald.jpg"],
      alt: "bracelet-worn.jpg",
      detail: "bracelet-emerald.jpg",
      pos: { detail: "center 45%" }
    }
  };

  // Escenas de campaña (portada, mega menú, colecciones, editorial)
  const SCENES = {
    hero:     { file: "hero-pearl-necklace.jpg", pos: "56% 55%" },
    brisa:    { file: "necklace-worn.jpg",   pos: "center 22%" },
    ambar:    { file: "ring-worn-rose.jpg",  pos: "center 38%" },
    esencial: { file: "flatlay-chain.jpg",   pos: "center 42%" }
  };

  function typeIndex(p) {
    const ids = ZB.products.filter(x => x.type === p.type).map(x => x.id);
    const i = ids.indexOf(p.id);
    return i < 0 ? 0 : i;
  }

  function img(file, pos) {
    // Sin loading="lazy": el contenido se inyecta por innerHTML en cada ruta, y en
    // ese caso Chrome a veces no pinta una imagen "lazy" hasta el primer scroll.
    return `<img src="${BASE}${file}" alt="" decoding="async"${pos ? ` style="object-position:${pos}"` : ""}>`;
  }

  function tag(text) {
    return text ? `<span class="art-tag">${text}</span>` : "";
  }

  function productFrame(p, variant) {
    const set = PHOTOS[p.type] || PHOTOS.anillo;
    const idx = typeIndex(p) % set.mains.length;
    if (variant === "alt") return { file: set.alt, pos: set.pos.alt };
    if (variant === "detail") return { file: set.detail, pos: set.pos.detail };
    // "main" y "scale" comparten la misma toma de producto
    return { file: set.mains[idx], pos: set.pos["main" + idx] };
  }

  ZB.art = {
    product(p, variant = "main", cls = "", label = "") {
      const f = productFrame(p, variant);
      return `<div class="art ${cls}">${img(f.file, f.pos)}${tag(label)}</div>`;
    },
    scene(key, wide = false, cls = "", label = "") {
      const s = SCENES[key] || SCENES.hero;
      return `<div class="art ${cls}">${img(s.file, s.pos)}${tag(label)}</div>`;
    }
  };
})();
