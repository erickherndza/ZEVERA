/* ==========================================================================
   ZAVERA — contenido del demo
   Todos los productos, precios y colecciones son de EJEMPLO.
   Se reemplazan por el catálogo real cuando se monte en Shopify.
   ========================================================================== */

window.ZB = window.ZB || {};

ZB.whatsapp = "18297634955"; // número de contacto de la clienta

ZB.collections = {
  brisa: {
    es: { name: "Brisa", lead: "Líneas finas que siguen el movimiento del mar Caribe. Oro de 18 quilates pensado para usar todos los días." },
    en: { name: "Brisa", lead: "Fine lines that follow the movement of the Caribbean sea. 18k gold made to be worn every day." }
  },
  piedras: {
    es: { name: "Piedras preciosas", lead: "Diamante, rubí, zafiro y esmeralda engastados a mano en oro de 18 quilates, con la posibilidad de elegir otras gemas contigo." },
    en: { name: "Precious stones", lead: "Diamond, ruby, sapphire and emerald hand-set in 18k gold, with the option to choose other gems together with you." }
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
  oro18: { es: "Oro 18K", en: "18k gold", sw: "linear-gradient(135deg,#E9CF8E,#B98E3F)" }
};

ZB.stones = {
  diamante:  { es: "Diamante",  en: "Diamond" },
  rubi:      { es: "Rubí",      en: "Ruby" },
  zafiro:    { es: "Zafiro",    en: "Sapphire" },
  esmeralda: { es: "Esmeralda", en: "Emerald" },
  ninguna:   { es: "Sin piedra", en: "No stone" }
};

/* Ficha de cada piedra (página Piedras preciosas). c = colores de la faceta demo. */
ZB.gems = {
  diamante: {
    c: ["#FFFFFF", "#DCE6F2", "#A9B8CC"],
    es: { tag: "Brillo eterno", desc: "La piedra más dura que existe. Su claridad y su fuego la hicieron símbolo de compromiso y de promesas que no se rompen.",
          facts: [["Dureza", "10 en la escala de Mohs"], ["Color", "Incoloro a casi incoloro"], ["Simboliza", "Compromiso y eternidad"]] },
    en: { tag: "Eternal brilliance", desc: "The hardest stone there is. Its clarity and fire made it a symbol of commitment and of promises that don't break.",
          facts: [["Hardness", "10 on the Mohs scale"], ["Color", "Colorless to near colorless"], ["Symbolizes", "Commitment and eternity"]] }
  },
  rubi: {
    c: ["#FF7A92", "#C2123C", "#6E0A22"],
    es: { tag: "Pasión y carácter", desc: "Un rojo profundo que no pasa inadvertido. Entre las gemas de color, es de las más buscadas y de las más duraderas.",
          facts: [["Dureza", "9 en la escala de Mohs"], ["Color", "Rojo intenso, de rosado a sangre de paloma"], ["Simboliza", "Pasión, valentía y amor"]] },
    en: { tag: "Passion and character", desc: "A deep red that never goes unnoticed. Among colored gems, it is one of the most sought-after and most durable.",
          facts: [["Hardness", "9 on the Mohs scale"], ["Color", "Intense red, from pink to pigeon blood"], ["Symbolizes", "Passion, courage and love"]] }
  },
  zafiro: {
    c: ["#8DB4FF", "#1F5AD6", "#0B2A6B"],
    es: { tag: "Serenidad y lealtad", desc: "Del azul real al azul de medianoche. Resistente y luminoso, es la piedra de las promesas que se cumplen.",
          facts: [["Dureza", "9 en la escala de Mohs"], ["Color", "Azul, también rosado, amarillo y blanco"], ["Simboliza", "Sabiduría, lealtad y fe"]] },
    en: { tag: "Serenity and loyalty", desc: "From royal blue to midnight blue. Strong and luminous, it is the stone of promises kept.",
          facts: [["Hardness", "9 on the Mohs scale"], ["Color", "Blue, also pink, yellow and white"], ["Symbolizes", "Wisdom, loyalty and faith"]] }
  },
  esmeralda: {
    c: ["#8CE8B2", "#169B57", "#08512C"],
    es: { tag: "Verde que renueva", desc: "Su verde vivo es inconfundible. Cada esmeralda guarda su propio jardín interior, y eso la hace única.",
          facts: [["Dureza", "7.5 a 8 en la escala de Mohs"], ["Color", "Verde intenso"], ["Simboliza", "Renovación, esperanza y crecimiento"]] },
    en: { tag: "A green that renews", desc: "Its vivid green is unmistakable. Every emerald holds its own inner garden, which makes it one of a kind.",
          facts: [["Hardness", "7.5 to 8 on the Mohs scale"], ["Color", "Intense green"], ["Symbolizes", "Renewal, hope and growth"]] }
  }
};

ZB.products = [
  { id: "solitario-brisa", type: "anillo", coll: "brisa", metal: "oro18", metals: ["oro18"], stone: "diamante", price: 68500, sizes: [5,6,7,8,9], engrave: true, isNew: true,
    es: { name: "Anillo Solitario Brisa", desc: "Un diamante de 0.25 ct sobre una banda fina que se abre como una ola. Hecho para comprometerse sin perder la sencillez." },
    en: { name: "Brisa Solitaire Ring",   desc: "A 0.25 ct diamond on a slim band that opens like a wave. Made for a promise that stays simple." },
    spec: { weight: "2.1 g", size: "Banda de 1.6 mm", ct: "0.25 ct, color G, pureza VS2" } },
  { id: "aretes-ola", type: "aretes", coll: "brisa", metal: "oro18", metals: ["oro18"], stone: "ninguna", price: 14900, isNew: true,
    es: { name: "Aretes Ola Brisa", desc: "Dos curvas pulidas que atrapan la luz al moverte." },
    en: { name: "Brisa Wave Earrings", desc: "Two polished curves that catch the light as you move." },
    spec: { weight: "1.8 g", size: "18 mm de alto" } },
  { id: "collar-horizonte", type: "collar", coll: "brisa", metal: "oro18", metals: ["oro18"], stone: "diamante", price: 22800, sizes: ["40 cm","45 cm"], engrave: true, isNew: true,
    es: { name: "Collar Horizonte Brisa", desc: "Una barra fina con un diamante pequeño, como el sol sobre el mar a las seis de la tarde." },
    en: { name: "Brisa Horizon Necklace", desc: "A fine bar with a small diamond, like the sun over the sea at six in the evening." },
    spec: { weight: "2.4 g", size: "Barra de 22 mm", ct: "0.03 ct" } },
  { id: "pulsera-marea", type: "pulsera", coll: "brisa", metal: "oro18", metals: ["oro18"], stone: "ninguna", price: 9600, sizes: ["S","M","L"],
    es: { name: "Pulsera Marea Brisa", desc: "Eslabones ovalados que se acomodan a la muñeca." },
    en: { name: "Brisa Tide Bracelet", desc: "Oval links that settle on the wrist." },
    spec: { weight: "6.2 g", size: "Eslabón de 5 mm" } },
  { id: "anillo-rubi", type: "anillo", coll: "piedras", metal: "oro18", metals: ["oro18"], stone: "rubi", price: 58000, sizes: [5,6,7,8], engrave: true, isNew: true,
    es: { name: "Anillo Rubí Pasión", desc: "Un rubí ovalado de rojo profundo, engastado en garras sobre una banda fina de oro de 18 quilates." },
    en: { name: "Passion Ruby Ring", desc: "An oval ruby of deep red, claw-set on a slim 18k gold band." },
    spec: { weight: "3.4 g", size: "Banda de 1.8 mm", ct: "0.80 ct, rubí" } },
  { id: "aretes-zafiro", type: "aretes", coll: "piedras", metal: "oro18", metals: ["oro18"], stone: "zafiro", price: 46500, isNew: true,
    es: { name: "Aretes Zafiro Real", desc: "Dos zafiros azules con un pequeño halo de diamantes, para un brillo que se ve de lejos." },
    en: { name: "Royal Sapphire Earrings", desc: "Two blue sapphires with a small halo of diamonds, for a sparkle seen from afar." },
    spec: { weight: "2.9 g", size: "12 mm de alto", ct: "1.10 ct total, zafiro" } },
  { id: "colgante-diamante", type: "collar", coll: "piedras", metal: "oro18", metals: ["oro18"], stone: "diamante", price: 39800, sizes: ["40 cm","45 cm"], engrave: true, isNew: true,
    es: { name: "Colgante Lágrima de Diamante", desc: "Un diamante en forma de pera que cuelga de una cadena fina de oro de 18 quilates." },
    en: { name: "Diamond Teardrop Pendant", desc: "A pear-shaped diamond hanging from a fine 18k gold chain." },
    spec: { weight: "2.6 g", size: "Colgante de 11 mm", ct: "0.40 ct, color G, pureza VS2" } },
  { id: "pulsera-esmeralda", type: "pulsera", coll: "piedras", metal: "oro18", metals: ["oro18"], stone: "esmeralda", price: 52000, sizes: ["S","M","L"],
    es: { name: "Pulsera Esmeralda Jardín", desc: "Eslabones de oro de 18 quilates con una esmeralda cabujón al centro." },
    en: { name: "Emerald Garden Bracelet", desc: "18k gold links with a cabochon emerald at the center." },
    spec: { weight: "7.8 g", size: "Esmeralda de 8 mm", ct: "1.20 ct, esmeralda" } },
  { id: "eternidad", type: "anillo", coll: "esencial", metal: "oro18", metals: ["oro18"], stone: "diamante", price: 54000, sizes: [5,6,7,8,9], engrave: true,
    es: { name: "Anillo Eternidad Esencial", desc: "Diamantes en engaste de canal alrededor de toda la banda." },
    en: { name: "Essential Eternity Ring", desc: "Channel-set diamonds all the way around the band." },
    spec: { weight: "2.8 g", size: "Banda de 2.2 mm", ct: "0.50 ct total" } },
  { id: "argollas", type: "aretes", coll: "esencial", metal: "oro18", metals: ["oro18"], stone: "ninguna", price: 11200,
    es: { name: "Argollas Esencial", desc: "Argollas medianas de tubo hueco, ligeras para todo el día." },
    en: { name: "Essential Hoops", desc: "Medium hollow-tube hoops, light enough for all day." },
    spec: { weight: "1.9 g", size: "20 mm de diámetro" } },
  { id: "cadena-fina", type: "collar", coll: "esencial", metal: "oro18", metals: ["oro18"], stone: "ninguna", price: 13500, sizes: ["40 cm","45 cm","50 cm"],
    es: { name: "Cadena Esencial Fina", desc: "Cadena forzada de 1 mm, la base para cualquier colgante." },
    en: { name: "Essential Fine Chain", desc: "A 1 mm cable chain, the base for any pendant." },
    spec: { weight: "2.2 g", size: "Eslabón de 1 mm" } },
  { id: "sello", type: "anillo", coll: "esencial", metal: "oro18", metals: ["oro18"], stone: "ninguna", price: 15800, sizes: [5,6,7,8,9,10], engrave: true,
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
  "anillo-rubi": ["aretes-zafiro", "colgante-diamante", "pulsera-esmeralda"],
  "aretes-zafiro": ["colgante-diamante", "anillo-rubi", "pulsera-esmeralda"],
  "colgante-diamante": ["aretes-zafiro", "anillo-rubi", "cadena-fina"],
  "pulsera-esmeralda": ["anillo-rubi", "aretes-zafiro", "colgante-diamante"],
  "eternidad": ["solitario-brisa", "argollas", "cadena-fina"],
  "argollas": ["cadena-fina", "sello", "pulsera-marea"],
  "cadena-fina": ["argollas", "sello", "collar-horizonte"],
  "sello": ["cadena-fina", "argollas", "eternidad"]
};

ZB.i18n = {
  es: {
    announce: "Envío gratis en Santo Domingo · Grabado personalizado en 48 horas",
    nav: { joyeria: "Joyería", piedras: "Piedras preciosas", colecciones: "Colecciones", compromiso: "Compromiso", regalos: "Regalos", historia: "Nosotros", citas: "Agendar cita" },
    mega: { cat: "Por categoría", coll: "Por colección", feat: "Destacados", all: "Ver toda la joyería", nuevo: "Novedades", grabar: "Para personalizar", regalo: "Regalos bajo RD$ 15,000", featTitle: "Piedras preciosas", featText: "Diamante, rubí, zafiro y esmeralda en oro de 18 quilates.", discover: "Descubrir" },
    heroSlides: [
      { eyebrow: "Nueva colección", title: "Esenciales para todos los días", text: "Cadenas finas en oro de 18 quilates y piedras preciosas pensadas para acompañarte toda la vida.", href: "#coleccion-esencial" },
      { eyebrow: "Colección Brisa", title: "Oro que atrapa la luz", text: "Líneas finas en oro de 18 quilates, diseñadas para usarse todos los días.", href: "#coleccion-brisa" }
    ],
    heroEyebrow: "Nueva colección",
    heroTitle: "Oro de 18 quilates, la elegancia que no pasa de moda",
    heroText: "Piedras preciosas engastadas a mano en oro de 18 quilates. Piezas esenciales para acompañarte toda la vida.",
    shop: "Comprar ahora",
    newTitle: "Novedades",
    newText: "Lo último que salió del taller.",
    viewAll: "Ver todo",
    catTitle: "Comprar por categoría",
    discoverColl: "Descubrir la colección",
    expTitle: "La experiencia ZAVERA",
    exp: [
      { t: "Asesoría por cita", d: "Te atendemos en persona o por videollamada para elegir la pieza correcta, sin prisa." },
      { t: "Grabado personalizado", d: "Iniciales, una fecha o una palabra. Grabamos a mano en 48 horas, sin costo en piezas seleccionadas." },
      { t: "Empaque de regalo", d: "Cada pieza sale en su estuche con cinta y tarjeta escrita a mano." }
    ],
    book: "Agendar por WhatsApp",
    about: {
      eyebrow: "Nosotros",
      title: "Más que joyas, un legado",
      lead: "Joyas únicas y atemporales en oro de 18 quilates y piedras preciosas, hechas para acompañar a la mujer a lo largo de su vida.",
      missionLabel: "Misión",
      mission: "Realzar la belleza y feminidad de la mujer a través de joyas únicas y atemporales, creadas para conservar y acrecentar su valor con el paso del tiempo.",
      missionText: "Cada pieza lleva consigo un mensaje de fe y crecimiento destinado a acompañar a quien la porta a lo largo de su vida.",
      visionLabel: "Visión",
      vision: "Convertirnos en la firma de joyería predilecta de las mujeres que desean honrar su valor, celebrar su feminidad y expresar su esencia a través de piezas extraordinarias y llenas de significado.",
      valuesTitle: "Nuestros valores",
      values: [
        { t: "Fe", d: "La Palabra de Dios es nuestro fundamento y la guía que inspira nuestra identidad." },
        { t: "Calidad", d: "Nos comprometemos con la excelencia en los materiales —oro de 18 quilates y piedras preciosas—, los acabados y cada detalle de nuestras creaciones." },
        { t: "Criterio", d: "Diseñamos con intención y sensibilidad estética, convencidos de que la verdadera elegancia reside en las decisiones cuidadosamente tomadas." }
      ],
      legacyLabel: "Lo que perseguimos",
      legacy: "Causar un impacto positivo en la imagen y el crecimiento espiritual de la mujer que use ZAVERA. Ser algo más que joyas: un legado en la vida de nuestras clientas.",
      cta: "Descubrir la joyería"
    },
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
    foot: { help: "Ayuda", services: "Servicios", about: "Nosotros", legal: "Legal", helpL: ["Envíos y entregas", "Cambios y devoluciones", "Guía de tallas", "Preguntas frecuentes"], servL: ["Agendar cita", "Grabado", "Limpieza y reparación", "Empaque de regalo"], aboutL: ["Nosotros", "El taller", "Cuidado de tus joyas", "Contacto"], legalL: ["Términos y condiciones", "Privacidad", "Política de envíos"], brand: "Joyería fina hecha en Santo Domingo. Oro de 18 quilates y piedras preciosas.", rights: "© 2026 ZAVERA. Todos los derechos reservados." },
    home: "Inicio",
    jewelry: "Joyería",
    plpIntro: "Anillos, aretes, collares y pulseras en oro de 18 quilates y piedras preciosas: diamante, rubí, zafiro y esmeralda. Todas las piezas incluyen estuche y certificado.",
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
    editorialTitle: "Piedras preciosas en oro de 18 quilates",
    gems: {
      eyebrow: "Piedras preciosas",
      title: "Piedras preciosas",
      lead: "Diamante, rubí, zafiro y esmeralda, engastados a mano en oro de 18 quilates. Cada piedra se elige por su color, su claridad y su carácter.",
      viewStone: n => `Ver piezas con ${n}`,
      piecesTitle: "Piezas con piedras preciosas",
      all: "Ver toda la colección",
      moreTitle: "¿Buscas otra gema?",
      moreText: "Además de estas cuatro, trabajamos otras piedras preciosas y de color. Cuéntanos qué imaginas y la elegimos contigo.",
      moreCta: "Consultar por WhatsApp",
      moreMsg: "Hola, me interesa una pieza con una piedra preciosa en ZAVERA."
    },
    faqTitle: "Preguntas frecuentes",
    faqs: [
      ["¿Las piezas son de oro sólido?", "Sí. Trabajamos únicamente oro sólido de 18 quilates. Cada pieza lleva su sello y certificado."],
      ["¿Las piedras son naturales?", "Sí. Seleccionamos diamantes, rubíes, zafiros y esmeraldas naturales, y cada piedra se entrega con su certificado."],
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
    searchPh: "Buscar anillos, rubí, diamante…",
    photo: "Foto provisional",
    heroLabel: "Joyas destacadas",
    engravedWith: "Grabado",
    giftWrap: "Empaque de regalo",
    remove: "Quitar"
  },
  en: {
    announce: "Free delivery in Santo Domingo · Personalized engraving in 48 hours",
    nav: { joyeria: "Jewelry", piedras: "Gemstones", colecciones: "Collections", compromiso: "Engagement", regalos: "Gifts", historia: "About us", citas: "Book a visit" },
    mega: { cat: "By category", coll: "By collection", feat: "Featured", all: "Shop all jewelry", nuevo: "New arrivals", grabar: "To personalize", regalo: "Gifts under RD$ 15,000", featTitle: "Precious stones", featText: "Diamond, ruby, sapphire and emerald in 18k gold.", discover: "Discover" },
    heroSlides: [
      { eyebrow: "New collection", title: "Everyday essentials", text: "Fine 18k gold chains and precious stones made to stay with you for life.", href: "#coleccion-esencial" },
      { eyebrow: "Brisa Collection", title: "Gold that catches the light", text: "Fine 18k gold lines, designed to be worn every day.", href: "#coleccion-brisa" }
    ],
    heroEyebrow: "New collection",
    heroTitle: "18k gold, elegance that never fades",
    heroText: "Precious stones hand-set in 18k gold. Essential pieces made to stay with you for life.",
    shop: "Shop now",
    newTitle: "New arrivals",
    newText: "The latest from our workshop.",
    viewAll: "View all",
    catTitle: "Shop by category",
    discoverColl: "Discover the collection",
    expTitle: "The ZAVERA experience",
    exp: [
      { t: "Advice by appointment", d: "Meet us in person or by video call to choose the right piece, at your own pace." },
      { t: "Personal engraving", d: "Initials, a date or a word. Hand-engraved in 48 hours, free on selected pieces." },
      { t: "Gift wrapping", d: "Every piece leaves in its case with a ribbon and a handwritten card." }
    ],
    book: "Book on WhatsApp",
    about: {
      eyebrow: "About us",
      title: "More than jewelry, a legacy",
      lead: "Unique, timeless jewelry in 18k gold and precious stones, made to accompany women throughout their lives.",
      missionLabel: "Mission",
      mission: "To enhance a woman's beauty and femininity through unique, timeless jewelry, created to keep and grow its value over time.",
      missionText: "Every piece carries a message of faith and growth, meant to accompany the one who wears it throughout her life.",
      visionLabel: "Vision",
      vision: "To become the jewelry house of choice for women who want to honor their worth, celebrate their femininity and express their essence through extraordinary pieces full of meaning.",
      valuesTitle: "Our values",
      values: [
        { t: "Faith", d: "The Word of God is our foundation and the guide that inspires our identity." },
        { t: "Quality", d: "We are committed to excellence in materials —18k gold and precious stones—, finishes and every detail of our creations." },
        { t: "Judgment", d: "We design with intention and aesthetic sensitivity, convinced that true elegance lies in carefully made decisions." }
      ],
      legacyLabel: "What we strive for",
      legacy: "To make a positive impact on the image and spiritual growth of every woman who wears ZAVERA. To be more than jewelry: a legacy in our clients' lives.",
      cta: "Discover the jewelry"
    },
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
    foot: { help: "Help", services: "Services", about: "About", legal: "Legal", helpL: ["Shipping & delivery", "Exchanges & returns", "Size guide", "FAQ"], servL: ["Book a visit", "Engraving", "Cleaning & repair", "Gift wrapping"], aboutL: ["About us", "The workshop", "Jewelry care", "Contact"], legalL: ["Terms & conditions", "Privacy", "Shipping policy"], brand: "Fine jewelry made in Santo Domingo. 18k gold and precious stones.", rights: "© 2026 ZAVERA. All rights reserved." },
    home: "Home",
    jewelry: "Jewelry",
    plpIntro: "Rings, earrings, necklaces and bracelets in 18k gold and precious stones: diamond, ruby, sapphire and emerald. Every piece comes with a case and certificate.",
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
    editorialTitle: "Precious stones in 18k gold",
    gems: {
      eyebrow: "Precious stones",
      title: "Precious stones",
      lead: "Diamond, ruby, sapphire and emerald, hand-set in 18k gold. Each stone is chosen for its color, its clarity and its character.",
      viewStone: n => `Shop ${n} pieces`,
      piecesTitle: "Pieces with precious stones",
      all: "View the whole collection",
      moreTitle: "Looking for another gem?",
      moreText: "Beyond these four, we work with other precious and colored stones. Tell us what you imagine and we'll choose it together.",
      moreCta: "Ask on WhatsApp",
      moreMsg: "Hi, I'm interested in a piece with a precious stone at ZAVERA."
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Are the pieces solid gold?", "Yes. We work only in solid 18k gold. Every piece carries its hallmark and certificate."],
      ["Are the stones natural?", "Yes. We select natural diamonds, rubies, sapphires and emeralds, and every stone comes with its certificate."],
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
    searchPh: "Search rings, ruby, diamond…",
    photo: "Placeholder photo",
    heroLabel: "Featured jewelry",
    engravedWith: "Engraving",
    giftWrap: "Gift wrapping",
    remove: "Remove"
  }
};

