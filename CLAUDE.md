# ZAVERA — Demo UX/UI

Prototipo navegable (HTML/CSS/JS puro, sin build) de la futura tienda Shopify de
**ZEVERA**, joyería en Santo Domingo. Es para que la clienta apruebe
estructura, tipografía, color y experiencia antes de programar el tema real.

## Identidad vigente: libro de marca ZAVERA (2026-10-12) — LEE ESTO PRIMERO

El demo se rehízo a partir de `../BRANDPRESENTATION-ZAVERA.pdf` (Koletta Studio).
**Sustituye** lo que dicen más abajo sobre cursiva, combos tipográficos A/B/C,
color de firma y panel "Estilo del demo" (el panel se eliminó: la marca ya decidió).

- **Nombre**: el libro de marca escribe **ZAVERA** (Za-ret + Vera; ver "Estudio del isotipo").
  Se cambió ZEVERA → ZAVERA en el sitio. Repo/carpeta siguen llamándose ZEVERA.
  Si la clienta confirma que es ZEVERA, es un reemplazo global en `js/`, `index.html`, `css/`.
- **Color** (tokens en `:root`): morado `#311223` (principal) · crema `#F9F3EA` ·
  rosa viejo `#87646D` · dorado del logo `#99764B`. Morado secundario `#441B35`
  (tono del patrón de marca, misma familia de matiz ~327°).
  **PROHIBIDO usar el burgundy del libro (`#51142D` y vinos parecidos)**: compite
  con el morado. No reintroducirlo.
- **Dorado**: `#99764B` da 4.1:1 sobre morado y 3.8:1 sobre crema → solo logo,
  filetes, iconos y texto grande. Texto dorado pequeño: `--gold-ink #7A5A32`
  sobre crema (5.7:1) y `--gold-soft #C9A878` sobre morado (7.5:1).
  Reparto: crema 60 · morado 30 · dorado/rosa 10.
- **Tipografía**: primaria **Earthy** (serif hairline, solo display), complementaria
  **High Billion** (sans extendida, solo mayúsculas). El PDF solo trae subconjuntos
  de ambas (sin acentos ni ñ), así que el demo usa sustitutas de Google Fonts:
  Earthy → **Bodoni Moda**, High Billion → **Syncopate**; párrafos en **Raleway**
  (la que usa el propio libro en sus textos). Para producción hay que licenciar
  las fuentes originales. Sin cursivas (Earthy no tiene).
- **Logo**: vectorial, extraído del PDF → `assets/brand/` (`logo-horizontal`,
  `logo-stacked`, `isotipo`, `pattern`). En el sitio va como sprite inline en
  `index.html` (`#zv-logo-h`, `#zv-logo-v`, `#zv-iso`) y toma el color con `currentColor`.
- **Hero = slider** (autoplay 6.5 s, flechas + barras) con 2 fotos grandes del libro
  (págs. 12 y 14) → `assets/img/zavera-hero-{1,2}.jpg`; textos en `t.heroSlides`
  (`js/data.js`, ES y EN), focos de recorte en `HERO` (`js/art.js`). Son **2 slides**:
  se quitó la de la pág. 13 ("Perlas que se heredan", fondo vino) a pedido de la clienta.
  Las flechas/barras se ajustan solas al número de slides.
- **Header morado** (`--plum`): logo dorado `--gold`, menú/idioma/iconos en `--gold-soft`
  (más legible: el dorado del logo da 4.1:1 sobre morado), contador de bolsa dorado con
  número morado, filete dorado abajo. El mega menú sigue en crema con tinta.
  **Barra de anuncio** ("Envío gratis en Santo Domingo · Grabado personalizado en 48 horas")
  en **crema** con texto morado, encima del header (pedido de la clienta, 2026-10-12).
- **Secciones "La experiencia" e "Historia"** usan la tipografía del primer demo
  (Cormorant Garamond cursiva + Jost, clase `.type-classic`), fondo crema y letras/iconos dorados.

- **Página Nosotros** = archivo propio `nosotros.html` (no es una ruta del home; el home no se tocó).
  Comparte header/footer/CSS/JS con `index.html`; `window.ZV_PAGE = "about"` hace que `js/app.js`
  pinte `viewAbout()` (textos `t.about` en `js/data.js`). Desde esa página los enlaces `#...` van a
  `index.html#...`. `index.html#nosotros` redirige a `nosotros.html`. Enlazada desde menú (desktop y
  móvil), footer y "Conocer más". Es un ecommerce: no agregar contenido nuevo al home.

## Materiales (2026-10-12) — pedido de la clienta

- **Solo oro de 18K y piedras preciosas** (diamante, rubí, zafiro, esmeralda; el copy deja
  entrever "otras gemas contigo"). Se eliminó **todo** el ámbar, la plata 925, el oro de 14K y
  los tonos blanco/rosa: `ZB.metals` tiene una sola entrada (`oro18`), así que la ficha no
  muestra selector de tonos y el filtro Material se oculta. Si la clienta quiere volver a
  ofrecer tonos (amarillo/blanco/rosa en 18K), basta añadirlos a `ZB.metals` y a `metals` de cada pieza.
- La colección **Ámbar** pasó a **Piedras preciosas** (`ZB.collections.piedras`). Su enlace del
  menú/home/mega menú va a `#piedras` (`viewGems()` en `js/app.js`: ficha informativa y demo
  CSS de cada piedra, `ZB.gems` en `js/data.js`, + cuadrícula de piezas). El listado clásico
  sigue en `#coleccion-piedras`; `#coleccion-rubi|zafiro|diamante|esmeralda` filtra por piedra.
- Nosotros: lead y valor "Calidad" mencionan oro de 18 quilates y piedras preciosas.

## Pendientes abiertos (2026-10-12)

- Confirmar con la clienta **ZAVERA vs ZEVERA** (hoy el sitio dice ZAVERA).
- Fotos de producto/colecciones siguen siendo de banco ("Foto provisional"); solo el slider usa fotos del libro.
- Licenciar Earthy y High Billion completas antes de producción (hoy sustitutas de Google Fonts).
- `assets/img/` tiene 5 JPG de banco sin usar ni versionar (`2148536086`, `2149836436`, `2150329661`, `2150347051`, `33812`).
- GitHub Pages cachea 10 min: tras un push, recargar con cmd+shift+r antes de dar un cambio por no hecho.

## Dónde está

- **Repo**: https://github.com/erickherndza/ZEVERA (rama `main`)
- **Demo en vivo (GitHub Pages)**: https://erickherndza.github.io/ZEVERA/
  Se despliega solo con cada `git push` a `main` (tarda 1–2 min).
- **Local**: `python3 -m http.server 8743` desde esta carpeta y abrir
  `http://localhost:8743/index.html`. No sirve abrir el `file://` directo
  para probar con el navegador automatizado (Claude in Chrome lo bloquea),
  por eso el server local.
- **Brief de diseño original** (análisis de tiffany.com hecho por la clienta/equipo):
  `../ZB Concep RD — Análisis de diseño inspirado en Tiffany & Co.docx`
  (un directorio arriba de este). Ahí están las reglas de qué SÍ y qué NO
  copiar de Tiffany, la paleta sugerida, la escala tipográfica, etc.

## Referencia: tiffany.com

La clienta pidió que el demo tome tiffany.com como referencia de estilo
(tipografía, color, tamaños, espacios, imágenes) — **sin copiar** marca,
logo, Sterling (su tipografía, no tiene licencia pública), el Tiffany Blue,
ni sus fotos/textos. La regla es replicar el *patrón* (espacio en blanco,
jerarquía, restraint), no el calco.

Cada vez que se ha necesitado un dato real de tiffany.com (tracking de
letras, pesos, estructura de carrusel, etc.) se midió en vivo con DevTools
en el navegador, no se asumió. Detalles ya confirmados y aplicados:

- Titulares (Sterling) usan **tracking negativo**, no amplio — replicado con
  `--display-track` negativo en `css/styles.css`.
- El peso sube con el tamaño (h1 más firme que h2) — tokens `--w-h1`/`--w-h2`.
- El carrusel de "novedades" bajo el hero en tiffany.com **no tiene
  encabezado de sección propio**, ni precio, ni favorito, ni imagen que
  cambia al pasar el cursor — una sola foto fija por pieza, colección en
  serif clara arriba, nombre en texto simple debajo, flechas + barra de
  progreso (no puntos) bajo el carrusel. Replicado tal cual.
- Categorías: nombre en mayúsculas sans centradas bajo la foto (no serif).
- Bloques de colección: imagen a sangre completa (borde a borde) + copy
  centrado vertical y horizontalmente en la otra mitad — patrón
  "Knot by Tiffany" / "Elsa Peretti" del home real.

## Toque de personalidad (a propósito distinto de Tiffany)

La clienta pidió que el demo *no* sea un calco 1:1 — quería un ~7% de
personalidad propia. Se resolvió con **cursiva editorial** en el logo y en
todos los títulos (h1/h2/h3), algo que Sterling (recto) no tiene. Token
`--display-style`, en `:root` = `italic`. Solo se aplica cuando la
tipografía activa tiene un corte itálico real dibujado:
- Combo A (Cormorant Garamond): itálica sí.
- Combo B (Marcellus): **no** tiene itálica en Google Fonts — se deja recta
  a propósito (su propio carácter "grabado" ya es suficiente personalidad;
  forzar cursiva ahí la sintetizaría el navegador y se vería mal).
- Combo C (EB Garamond): itálica sí, pero su itálica solo viene en peso 400
  (no 500), así que `--w-h1` se bajó a 400 en ese combo para no sintetizar.

El logo (`.logo-mark`) es tipografía fija (Cormorant Garamond itálica),
**no** cambia con el selector de combos — es la marca provisional hasta que
la clienta entregue el logo oficial.

## Fotos

Todas las fotos son de banco (`magnific.com`, buscador tipo Freepik),
**temporales**: la clienta confirmó que son solo para armar el demo y que
luego ella entrega las fotos reales del catálogo — mismo lugar, mismo
recorte. Viven en `assets/img/*.jpg`. Mapeo de qué foto va en cada pieza y
escena: `js/art.js` (objetos `PHOTOS` y `SCENES`). Cada tarjeta/imagen del
sitio sigue mostrando la etiqueta "Foto provisional" para que quede claro
frente a la clienta que no es el catálogo final.

El hero/slider principal usa `hero-pearl-necklace.jpg` (mujer tocando un
collar de perlas — la trajo la clienta). El titular del hero ("Perlas, la
elegancia que no pasa de moda") y el botón (manda a `#coleccion-esencial`)
están escritos a propósito para esa foto — si se cambia la foto del hero,
hay que revisar si el titular todavía tiene sentido (`t.heroEyebrow` /
`t.heroTitle` / `t.heroText` en `js/data.js`, ES y EN).

## Estructura

```
index.html         estructura base (sin logo/ribbon hardcodeado, todo lo pinta app.js)
css/styles.css      tokens de diseño (tipografía, color, espacio) + componentes
js/data.js          productos, colecciones, textos ES/EN, combos tipográficos
js/art.js           qué foto va en cada producto/escena (PHOTOS, SCENES)
js/app.js           rutas, render de cada vista, filtros, bolsa, menú, carrusel
assets/img/         fotos de banco (provisionales)
```

## Bugs / gotchas ya resueltos (no perder tiempo redescubriéndolos)

- **Cache del navegador**: al probar cambios de JS en local con
  `python3 -m http.server`, el navegador a veces sirve una versión vieja de
  `app.js`/`art.js` aunque el archivo en disco ya esté actualizado. Si algo
  no refleja el cambio, hacer hard reload (`cmd+shift+r`) antes de asumir
  que el código está mal.
- **Primer pintado en blanco**: la primera vez que se navega a una ruta
  (por ejemplo entrar directo a `#producto-x`), las imágenes que caen
  "sobre el pliegue" a veces no pintan hasta el primer scroll real del
  usuario. Se investigó a fondo — no es un bug del sitio (las imágenes
  cargan y decodifican bien, `.complete`/`.naturalWidth` correctos), es un
  comportamiento del navegador automatizado al capturar. Un usuario real
  scrolleando no lo nota. No hace falta "arreglarlo" de nuevo.
- La galería de la ficha de producto (`.gallery-track .art`) usa la técnica
  clásica de `padding-top` en vez de `aspect-ratio` porque en un momento
  `aspect-ratio` dentro de ese grid no pintaba la imagen. Si se toca ese
  CSS, mantener el `padding-top`.
- **Caché vieja de `app.js` tras borrar un elemento del DOM**: si se quita
  un `id="..."` del `index.html` pero `js/app.js` todavía trae una línea
  vieja como `$("#ese-id").textContent = ...`, revienta con
  `TypeError: Cannot set properties of null` dentro de `renderChrome()` y
  deja de pintar todo lo que viene después (menú, footer, etc.) — pasa
  sobre todo en el sitio en vivo (GitHub Pages) cuando el navegador del
  visitante cacheó un `app.js` viejo aunque el `index.html` ya se actualizó.
  El código en el repo puede estar perfecto y aun así verse roto en el
  navegador. Si algo se ve incompleto justo después de un push, pedir un
  hard reload (`cmd+shift+r`) antes de asumir que el código está mal —
  pasó al quitar `#logo-sub` (ver sesión de rebranding a ZEVERA).

## Qué se hizo en esta sesión (orden cronológico)

1. Se reemplazaron los dibujos vectoriales provisionales por fotos de banco
   reales (magnific.com), con el mismo sistema de tomas (principal, puesta,
   macro, escala).
2. Se ajustó la tipografía contra medición real de tiffany.com (tracking,
   pesos) y se rediseñó el home (categorías, bloques de colección,
   experiencia) con el tratamiento editorial de Tiffany.
3. Se le dio personalidad propia: logo y títulos en cursiva.
4. Se subió el repo a GitHub y se activó GitHub Pages.
5. Se agrandó el logo en escritorio a la escala de Tiffany.
6. Se quitó la cinta superior "Demo de diseño para ZEVERA...".
7. La clienta no aprobó el primer carrusel de "Novedades" (tenía
   encabezado propio, precio, favorito) → se rehizo como calco exacto del
   carrusel real de tiffany.com (ver sección de arriba).
8. Se cambió la foto del hero por el collar de perlas que trajo la clienta,
   con velo degradado nuevo para que el titular blanco siga siendo legible
   sobre cualquier foto, y se reescribió el copy del hero para que hable de
   perlas.
9. **Rebranding: "ZB Concep" → "ZEVERA"** (la clienta corrigió el nombre
   del proyecto). Se renombró el repo en GitHub (`zbcocep` → `ZEVERA`,
   GitHub Pages pasó a `https://erickherndza.github.io/ZEVERA/`) y la
   carpeta local (`zb-concep-demo` → `ZEVERA-demo`), se actualizó el
   remoto git, y se reemplazó "ZB CONCEP"/"ZB Concep" por "ZEVERA" en todo
   el sitio: logo (header, footer, menú móvil), `<title>`, aria-labels,
   mensaje de WhatsApp, "La experiencia ZEVERA", prefijo de referencia de
   producto (`ZEVERA-XXXXX`), copyright del footer, comentarios de código,
   `README.md` y este archivo.
10. Se quitó el subtítulo "Joyería · Santo Domingo" que iba debajo del
    logo en el header (markup en `index.html`, lógica en `js/app.js`,
    CSS `.logo-sub` en `css/styles.css`) — la clienta pidió que el logo
    quede solo con el nombre de marca, sin línea debajo.

## Pendiente / para la próxima sesión

- (Resuelto) La línea del footer ahora dice "Oro de 18 quilates y piedras preciosas".
- Esperando más feedback de la clienta sobre el resto del sitio (ficha de
  producto, página de colección, menú móvil, footer) — todavía no se ha
  revisado con ella en detalle más allá del home.
- El logo sigue siendo provisional (marca tipográfica "ZEVERA"). Reemplazar
  por el logo oficial en cuanto la clienta lo entregue (`.logo-mark` en
  `css/styles.css` + markup en `index.html`).
- Las fotos siguen siendo de banco. Reemplazar por el catálogo real cuando
  la clienta lo entregue (mapeo en `js/art.js`).
- No se ha revisado a fondo el comportamiento en móvil real (solo se
  verificó por CSS/clamp, no en un viewport angosto real — la herramienta
  de automatización de este entorno no reproduce bien el resize de ventana).
