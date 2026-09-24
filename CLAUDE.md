# ZEVERA — Demo UX/UI

Prototipo navegable (HTML/CSS/JS puro, sin build) de la futura tienda Shopify de
**ZEVERA**, joyería en Santo Domingo. Es para que la clienta apruebe
estructura, tipografía, color y experiencia antes de programar el tema real.

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

## Pendiente / para la próxima sesión

- Esperando más feedback de la clienta sobre el resto del sitio (ficha de
  producto, página de colección, menú móvil, footer) — todavía no se ha
  revisado con ella en detalle más allá del home.
- El logo sigue siendo provisional (marca tipográfica). Reemplazar por el
  logo oficial en cuanto la clienta lo entregue (`.logo-mark` en
  `css/styles.css` + markup en `index.html`).
- Las fotos siguen siendo de banco. Reemplazar por el catálogo real cuando
  la clienta lo entregue (mapeo en `js/art.js`).
- No se ha revisado a fondo el comportamiento en móvil real (solo se
  verificó por CSS/clamp, no en un viewport angosto real — la herramienta
  de automatización de este entorno no reproduce bien el resize de ventana).
