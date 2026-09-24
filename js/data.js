/* ==========================================================================
   ZB Concep — contenido del demo
   Todos los productos, precios y colecciones son de EJEMPLO.
   Se reemplazan por el catálogo real cuando se monte en Shopify.
   ========================================================================== */

window.ZB = window.ZB || {};

ZB.whatsapp = "18297634955"; // número de contacto de la clienta

ZB.collections = {
  brisa: {
    es: { name: "Brisa", lead: "Líneas finas que siguen el movimiento del mar Caribe. Oro de 14 quilates pensado para usar todos los días." },
    en: { name: "Brisa", lead: "Fine lines that follow the movement of the Caribbean sea. 14k gold made to be worn every day." }
  },
  ambar: {
    es: { name: "Ámbar", lead: "Ámbar dominicano seleccionado a mano y engastado en plata 925 y oro. Cada piedra es única." },
    en: { name: "Ámbar", lead: "Hand-selected Dominican amber set in 925 silver and gold. Every stone is one of a kind." }
  },
  esencial: {
    es: { name: "Esencial", lead: "Las piezas que se quedan contigo: argollas, cadenas y sellos para grabar." },
    en: { name: "Esencial", lead: "The pieces that stay with you: hoops, chains and signet rings to engrave." }
  }
};

ZB.types = {
  anillo:  { es: "Anillos",  en: "Rings",     one_es: "Anillo",   one_en: "Ring" },
  aretes:  { es: "Aretes",   en: "Earrings",  one_es: "Aretes",   one_en: "Earrings" },
  collar:  { es: "Collares", en: "Necklaces", one_es: "Collar",   one_en: "Necklace" },
  pulsera: { es: "Pulseras", en: "Bracelets", one_es: "Pulsera",  one_en: "Bracelet" }
};

ZB.metals = {
  amarillo: { es: "Oro amarillo 14k", en: "14k yellow gold", sw: "linear-gradient(135deg,#E9CF8E,#B98E3F)" },
  blanco:   { es: "Oro blanco 14k",   en: "14k white gold",  sw: "linear-gradient(135deg,#F4F5F7,#B9BDC4)" },
  rosa:     { es: "Oro rosa 14k",     en: "14k rose gold",   sw: "linear-gradient(135deg,#F1CDBD,#B9806B)" },
  plata:    { es: "Plata 925",        en: "925 silver",      sw: "linear-gradient(135deg,#F2F2F2,#A9ADB3)" }
};

ZB.stones = {
  diamante: { es: "Diamante", en: "Diamond" },
  ambar:    { es: "Ámbar dominicano", en: "Dominican amber" },
  ninguna:  { es: "Sin piedra", en: "No stone" }
};

ZB.products = [
  { id: "solitario-brisa", type: "anillo", coll: "brisa", metal: "amarillo", metals: ["amarillo","blanco","rosa"], stone: "diamante", price: 68500, sizes: [5,6,7,8,9], engrave: true, isNew: true,
    es: { name: "Anillo Solitario Brisa", desc: "Un diamante de 0.25 ct sobre una banda fina que se abre como una ola. Hecho para comprometerse sin perder la sencillez." },
    en: { name: "Brisa Solitaire Ring",   desc: "A 0.25 ct diamond on a slim band that opens like a wave. Made for a promise that stays simple." },
    spec: { weight: "2.1 g", size: "Banda de 1.6 mm", ct: "0.25 ct, color G, pureza VS2" } },
  { id: "aretes-ola", type: "aretes", coll: "brisa", metal: "blanco", metals: ["blanco","amarillo"], stone: "ninguna", price: 14900, isNew: true,
    es: { name: "Aretes Ola Brisa", desc: "Dos curvas pulidas que atrapan la luz al moverte." },
    en: { name: "Brisa Wave Earrings", desc: "Two polished curves that catch the light as you move." },
    spec: { weight: "1.8 g", size: "18 mm de alto" } },
  { id: "collar-horizonte", type: "collar", coll: "brisa", metal: "amarillo", metals: ["amarillo","rosa"], stone: "diamante", price: 22800, sizes: ["40 cm","45 cm"], engrave: true, isNew: true,
    es: { name: "Collar Horizonte Brisa", desc: "Una barra fina con un diamante pequeño, como el sol sobre el mar a las seis de la tarde." },
    en: { name: "Brisa Horizon Necklace", desc: "A fine bar with a small diamond, like the sun over the sea at six in the evening." },
    spec: { weight: "2.4 g", size: "Barra de 22 mm", ct: "0.03 ct" } },
  { id: "pulsera-marea", type: "pulsera", coll: "brisa", metal: "plata", metals: ["plata","amarillo"], stone: "ninguna", price: 9600, sizes: ["S","M","L"],
    es: { name: "Pulsera Marea Brisa", desc: "Eslabones ovalados que se acomodan a la muñeca." },
    en: { name: "Brisa Tide Bracelet", desc: "Oval links that settle on the wrist." },
    spec: { weight: "6.2 g", size: "Eslabón de 5 mm" } },
  { id: "anillo-gota-ambar", type: "anillo", coll: "ambar", metal: "plata", metals: ["plata","amarillo"], stone: "ambar", price: 12400, sizes: [5,6,7,8], isNew: true,
    es: { name: "Anillo Gota de Ámbar", desc: "Un cabujón de ámbar dominicano en forma de gota, con engaste de bisel." },
    en: { name: "Amber Drop Ring", desc: "A drop-shaped Dominican amber cabochon in a bezel setting." },
    spec: { weight: "3.9 g", size: "Piedra de 10 × 7 mm" } },
  { id: "colgante-sol", type: "collar", coll: "ambar", metal: "amarillo", metals: ["amarillo"], stone: "ambar", price: 18900, sizes: ["40 cm","45 cm","50 cm"], isNew: true,
    es: { name: "Colgante Sol de Ámbar", desc: "Ámbar redondo rodeado de un halo de oro martillado." },
    en: { name: "Amber Sun Pendant", desc: "Round amber framed by a halo of hammered gold." },
    spec: { weight: "3.1 g", size: "Colgante de 14 mm" } },
  { id: "aretes-miel", type: "aretes", coll: "ambar", metal: "plata", metals: ["plata"], stone: "ambar", price: 8700,
    es: { name: "Aretes Ámbar Miel", desc: "Gotas de ámbar color miel que cuelgan de un gancho fino." },
    en: { name: "Honey Amber Earrings", desc: "Honey-colored amber drops on a fine hook." },
    spec: { weight: "2.6 g", size: "24 mm de alto" } },
  { id: "pulsera-trenzada", type: "pulsera", coll: "ambar", metal: "rosa", metals: ["rosa","amarillo"], stone: "ambar", price: 16500, sizes: ["S","M","L"],
    es: { name: "Pulsera Ámbar Trenzada", desc: "Cadena trenzada con tres cuentas de ámbar." },
    en: { name: "Braided Amber Bracelet", desc: "A braided chain with three amber beads." },
    spec: { weight: "5.4 g", size: "Cuentas de 6 mm" } },
  { id: "eternidad", type: "anillo", coll: "esencial", metal: "blanco", metals: ["blanco","amarillo","rosa"], stone: "diamante", price: 54000, sizes: [5,6,7,8,9], engrave: true,
    es: { name: "Anillo Eternidad Esencial", desc: "Diamantes en engaste de canal alrededor de toda la banda." },
    en: { name: "Essential Eternity Ring", desc: "Channel-set diamonds all the way around the band." },
    spec: { weight: "2.8 g", size: "Banda de 2.2 mm", ct: "0.50 ct total" } },
  { id: "argollas", type: "aretes", coll: "esencial", metal: "amarillo", metals: ["amarillo","blanco","rosa"], stone: "ninguna", price: 11200,
    es: { name: "Argollas Esencial", desc: "Argollas medianas de tubo hueco, ligeras para todo el día." },
    en: { name: "Essential Hoops", desc: "Medium hollow-tube hoops, light enough for all day." },
    spec: { weight: "1.9 g", size: "20 mm de diámetro" } },
  { id: "cadena-fina", type: "collar", coll: "esencial", metal: "amarillo", metals: ["amarillo","blanco"], stone: "ninguna", price: 13500, sizes: ["40 cm","45 cm","50 cm"],
    es: { name: "Cadena Esencial Fina", desc: "Cadena forzada de 1 mm, la base para cualquier colgante." },
    en: { name: "Essential Fine Chain", desc: "A 1 mm cable chain, the base for any pendant." },
    spec: { weight: "2.2 g", size: "Eslabón de 1 mm" } },
  { id: "sello", type: "anillo", coll: "esencial", metal: "rosa", metals: ["rosa","amarillo","blanco"], stone: "ninguna", price: 15800, sizes: [5,6,7,8,9,10], engrave: true,
    es: { name: "Anillo Sello Esencial", desc: "Sello ovalado listo para grabar tus iniciales." },
    en: { name: "Essential Signet Ring", desc: "An oval signet ready for your initials." },
    spec: { weight: "4.6 g", size: "Cara de 11 × 9 mm" } }
];

/* Productos para "Completa el look": elegidos a mano, no automáticos */
ZB.pairs = {
  "solitario-brisa": ["eternidad", "aretes-ola", "collar-horizonte"],
  "aretes-ola": ["collar-horizonte", "pulsera-marea", "solitario-brisa"],
  "collar-horizonte": ["aretes-ola", "cadena-fina", "solitario-brisa"],
  "pulsera-marea": ["aretes-ola", "collar-horizonte", "argollas"],
  "anillo-gota-ambar": ["aretes-miel", "colgante-sol", "pulsera-trenzada"],
  "colgante-sol": ["aretes-miel", "anillo-gota-ambar", "cadena-fina"],
  "aretes-miel": ["colgante-sol", "anillo-gota-ambar", "pulsera-trenzada"],
  "pulsera-trenzada": ["anillo-gota-ambar", "aretes-miel", "colgante-sol"],
  "eternidad": ["solitario-brisa", "argollas", "cadena-fina"],
  "argollas": ["cadena-fina", "sello", "pulsera-marea"],
  "cadena-fina": ["argollas", "sello", "collar-horizonte"],
  "sello": ["cadena-fina", "argollas", "eternidad"]
};

ZB.i18n = {
  es: {
    ribbon: "Demo de diseño para ZB Concep RD · fotos, logo y productos son provisionales",
    announce: "Envío gratis en Santo Domingo · Grabado personalizado en 48 horas",
    nav: { joyeria: "Joyería", colecciones: "Colecciones", compromiso: "Compromiso", regalos: "Regalos", historia: "Nuestra historia", citas: "Agendar cita" },
    mega: { cat: "Por categoría", coll: "Por colección", feat: "Destacados", all: "Ver toda la joyería", nuevo: "Novedades", grabar: "Para personalizar", regalo: "Regalos bajo RD$ 15,000", featTitle: "Colección Ámbar", featText: "Ámbar dominicano en plata y oro.", discover: "Descubrir" },
    heroEyebrow: "Nueva colección",
    heroTitle: "Brisa, la luz del Caribe en oro",
    heroText: "Piezas finas en oro de 14 quilates, hechas para acompañarte todos los días.",
    shop: "Comprar ahora",
    newTitle: "Novedades",
    newText: "Lo último que salió del taller.",
    viewAll: "Ver todo",
    catTitle: "Comprar por categoría",
    discoverColl: "Descubrir la colección",
    expTitle: "La experiencia ZB",
    exp: [
      { t: "Asesoría por cita", d: "Te atendemos en persona o por videollamada para elegir la pieza correcta, sin prisa." },
      { t: "Grabado personalizado", d: "Iniciales, una fecha o una palabra. Grabamos a mano en 48 horas, sin costo en piezas seleccionadas." },
      { t: "Empaque de regalo", d: "Cada pieza sale en su estuche con cinta y tarjeta escrita a mano." }
    ],
    book: "Agendar por WhatsApp",
    storyEyebrow: "Nuestra historia",
    story: "Diseñamos joyas para los momentos que merecen quedarse.",
    storyText: "Taller y atelier en Santo Domingo.",
    readMore: "Conocer más",
    nlTitle: "Recibe las novedades primero",
    nlText: "Lanzamientos, ediciones limitadas y eventos privados. Un correo al mes.",
    nlPh: "Tu correo electrónico",
    nlBtn: "Suscribirme",
    nlOk: "Listo. Te escribiremos cuando haya una nueva colección.",
    nlErr: "Escribe un correo válido, por ejemplo nombre@correo.com",
    foot: { help: "Ayuda", services: "Servicios", about: "Nosotros", legal: "Legal", helpL: ["Envíos y entregas", "Cambios y devoluciones", "Guía de tallas", "Preguntas frecuentes"], servL: ["Agendar cita", "Grabado", "Limpieza y reparación", "Empaque de regalo"], aboutL: ["Nuestra historia", "El taller", "Cuidado de tus joyas", "Contacto"], legalL: ["Términos y condiciones", "Privacidad", "Política de envíos"], brand: "Joyería fina hecha en Santo Domingo. Oro, plata y ámbar dominicano.", rights: "© 2026 ZB Concep RD. Todos los derechos reservados." },
    home: "Inicio",
    jewelry: "Joyería",
    plpIntro: "Anillos, aretes, collares y pulseras en oro de 14 quilates, plata 925 y ámbar dominicano. Todas las piezas incluyen estuche y certificado.",
    pieces: n => `${n} ${n === 1 ? "pieza" : "piezas"}`,
    filter: "Filtrar",
    filterSort: "Filtrar y ordenar",
    sort: "Ordenar",
    sorts: { rec: "Recomendados", new: "Novedades", asc: "Precio: menor a mayor", desc: "Precio: mayor a menor" },
    fType: "Categoría", fMetal: "Material", fStone: "Piedra", fColl: "Colección", fPrice: "Precio",
    prices: [["p1", "Hasta RD$ 12,000"], ["p2", "RD$ 12,000 – 25,000"], ["p3", "Más de RD$ 25,000"]],
    clear: "Borrar filtros",
    apply: "Ver resultados",
    none: "No hay piezas con esos filtros. Prueba quitando alguno.",
    editorialTitle: "El ámbar de nuestra isla",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      ["¿Las piezas son de oro sólido?", "Sí. Trabajamos oro de 14 quilates sólido y plata 925. Cada pieza lleva su sello y certificado."],
      ["¿Cómo sé mi talla de anillo?", "Consulta la guía de tallas en cada ficha o agenda una cita y te medimos sin costo."],
      ["¿Hacen envíos fuera de Santo Domingo?", "Enviamos a todo el país en 2 a 4 días laborables. En Santo Domingo el envío es gratis."],
      ["¿Puedo cambiar una pieza?", "Tienes 15 días para cambiarla si no ha sido usada ni grabada."]
    ],
    material: "Material",
    size: "Talla",
    length: "Largo",
    sizeGuide: "Guía de tallas",
    engrave: "Agregar grabado",
    engraveFree: "Sin costo",
    engravePh: "Hasta 12 caracteres",
    engraveHint: "Letras, números y el símbolo &",
    gift: "Empaque de regalo con tarjeta",
    addBag: "Añadir a la bolsa",
    added: "Añadido a tu bolsa",
    chooseSize: "Elige una talla",
    askWa: "Consultar por WhatsApp",
    perks: ["Envío gratis en Santo Domingo", "Retiro en el atelier con cita", "Cambios hasta 15 días"],
    details: "Detalles y materiales",
    care: "Cuidado de tu joya",
    careText: "Guárdala en su estuche, lejos del perfume y el cloro. Límpiala con un paño suave. Te la limpiamos gratis una vez al año.",
    shipping: "Envíos y devoluciones",
    shippingText: "Entrega en Santo Domingo en 24 a 48 horas. Resto del país en 2 a 4 días laborables. Las piezas grabadas no admiten cambios.",
    specL: { metal: "Material", stone: "Piedra", weight: "Peso aprox.", size: "Medidas", ct: "Quilataje", ref: "Referencia" },
    pairTitle: "Completa el look",
    bag: "Tu bolsa",
    bagEmpty: "Tu bolsa está vacía.",
    subtotal: "Subtotal",
    checkout: "Finalizar compra",
    checkoutNote: "El pago con Visa y Mastercard se activa en la tienda real.",
    close: "Cerrar",
    back: "Volver",
    next: "Siguiente",
    menu: "Menú",
    account: "Mi cuenta",
    searchPh: "Buscar anillos, ámbar, oro rosa…",
    photo: "Foto provisional",
    engravedWith: "Grabado",
    giftWrap: "Empaque de regalo",
    remove: "Quitar",
    style: { btn: "Estilo del demo", title: "Prueba el estilo", intro: "Cambia la tipografía y el color de firma para ver cómo se siente la tienda. La elección se aplica a todas las páginas.", type: "Tipografía", color: "Color de firma", done: "Listo" }
  },
  en: {
    ribbon: "Design demo for ZB Concep RD · photos, logo and products are placeholders",
    announce: "Free delivery in Santo Domingo · Personalized engraving in 48 hours",
    nav: { joyeria: "Jewelry", colecciones: "Collections", compromiso: "Engagement", regalos: "Gifts", historia: "Our story", citas: "Book a visit" },
    mega: { cat: "By category", coll: "By collection", feat: "Featured", all: "Shop all jewelry", nuevo: "New arrivals", grabar: "To personalize", regalo: "Gifts under RD$ 15,000", featTitle: "Ámbar Collection", featText: "Dominican amber in silver and gold.", discover: "Discover" },
    heroEyebrow: "New collection",
    heroTitle: "Brisa, Caribbean light in gold",
    heroText: "Fine 14k gold pieces made to stay with you every day.",
    shop: "Shop now",
    newTitle: "New arrivals",
    newText: "The latest from our workshop.",
    viewAll: "View all",
    catTitle: "Shop by category",
    discoverColl: "Discover the collection",
    expTitle: "The ZB experience",
    exp: [
      { t: "Advice by appointment", d: "Meet us in person or by video call to choose the right piece, at your own pace." },
      { t: "Personal engraving", d: "Initials, a date or a word. Hand-engraved in 48 hours, free on selected pieces." },
      { t: "Gift wrapping", d: "Every piece leaves in its case with a ribbon and a handwritten card." }
    ],
    book: "Book on WhatsApp",
    storyEyebrow: "Our story",
    story: "We design jewelry for the moments that deserve to stay.",
    storyText: "Workshop and atelier in Santo Domingo.",
    readMore: "Learn more",
    nlTitle: "Be the first to know",
    nlText: "Launches, limited editions and private events. One email a month.",
    nlPh: "Your email",
    nlBtn: "Subscribe",
    nlOk: "Done. We'll write when a new collection arrives.",
    nlErr: "Enter a valid email, for example name@mail.com",
    foot: { help: "Help", services: "Services", about: "About", legal: "Legal", helpL: ["Shipping & delivery", "Exchanges & returns", "Size guide", "FAQ"], servL: ["Book a visit", "Engraving", "Cleaning & repair", "Gift wrapping"], aboutL: ["Our story", "The workshop", "Jewelry care", "Contact"], legalL: ["Terms & conditions", "Privacy", "Shipping policy"], brand: "Fine jewelry made in Santo Domingo. Gold, silver and Dominican amber.", rights: "© 2026 ZB Concep RD. All rights reserved." },
    home: "Home",
    jewelry: "Jewelry",
    plpIntro: "Rings, earrings, necklaces and bracelets in 14k gold, 925 silver and Dominican amber. Every piece comes with a case and certificate.",
    pieces: n => `${n} ${n === 1 ? "piece" : "pieces"}`,
    filter: "Filter",
    filterSort: "Filter & sort",
    sort: "Sort",
    sorts: { rec: "Recommended", new: "New arrivals", asc: "Price: low to high", desc: "Price: high to low" },
    fType: "Category", fMetal: "Material", fStone: "Stone", fColl: "Collection", fPrice: "Price",
    prices: [["p1", "Up to RD$ 12,000"], ["p2", "RD$ 12,000 – 25,000"], ["p3", "Over RD$ 25,000"]],
    clear: "Clear filters",
    apply: "Show results",
    none: "No pieces match those filters. Try removing one.",
    editorialTitle: "The amber of our island",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Are the pieces solid gold?", "Yes. We work in solid 14k gold and 925 silver. Every piece carries its hallmark and certificate."],
      ["How do I find my ring size?", "Check the size guide on each product or book a visit and we'll measure you for free."],
      ["Do you ship outside Santo Domingo?", "We ship nationwide in 2 to 4 business days. Delivery in Santo Domingo is free."],
      ["Can I exchange a piece?", "You have 15 days to exchange it if it hasn't been worn or engraved."]
    ],
    material: "Material",
    size: "Size",
    length: "Length",
    sizeGuide: "Size guide",
    engrave: "Add engraving",
    engraveFree: "Free",
    engravePh: "Up to 12 characters",
    engraveHint: "Letters, numbers and the & symbol",
    gift: "Gift wrapping with card",
    addBag: "Add to bag",
    added: "Added to your bag",
    chooseSize: "Choose a size",
    askWa: "Ask on WhatsApp",
    perks: ["Free delivery in Santo Domingo", "Atelier pickup by appointment", "Exchanges within 15 days"],
    details: "Details & materials",
    care: "Caring for your jewelry",
    careText: "Keep it in its case, away from perfume and chlorine. Wipe with a soft cloth. We clean it for free once a year.",
    shipping: "Shipping & returns",
    shippingText: "Delivery in Santo Domingo in 24 to 48 hours. Rest of the country in 2 to 4 business days. Engraved pieces can't be exchanged.",
    specL: { metal: "Material", stone: "Stone", weight: "Approx. weight", size: "Dimensions", ct: "Carat", ref: "Reference" },
    pairTitle: "Complete the look",
    bag: "Your bag",
    bagEmpty: "Your bag is empty.",
    subtotal: "Subtotal",
    checkout: "Checkout",
    checkoutNote: "Visa and Mastercard payments go live in the real store.",
    close: "Close",
    back: "Back",
    next: "Next",
    menu: "Menu",
    account: "My account",
    searchPh: "Search rings, amber, rose gold…",
    photo: "Placeholder photo",
    engravedWith: "Engraving",
    giftWrap: "Gift wrapping",
    remove: "Remove",
    style: { btn: "Demo style", title: "Try the style", intro: "Switch the typography and signature color to see how the store feels. Your choice applies to every page.", type: "Typography", color: "Signature color", done: "Done" }
  }
};

ZB.typePairs = [
  { id: "a", label: "A · Editorial clásica", names: "Cormorant Garamond + Jost", display: "'Cormorant Garamond', serif", ital: true },
  { id: "b", label: "B · Grabado", names: "Marcellus + Figtree", display: "'Marcellus', serif", ital: false },
  { id: "c", label: "C · Moderna sobria", names: "EB Garamond + Montserrat", display: "'EB Garamond', serif", ital: true }
];

ZB.accents = [
  { id: "esmeralda", es: "Esmeralda", en: "Emerald", hex: "#1F3D36" },
  { id: "champan",   es: "Champán",   en: "Champagne", hex: "#86683F" },
  { id: "arena",     es: "Rosa arena", en: "Sand rose", hex: "#935F4E" },
  { id: "noche",     es: "Azul noche", en: "Night blue", hex: "#1B2A41" }
];
