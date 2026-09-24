# ZEVERA — Demo UX/UI

Prototipo navegable de la tienda Shopify de ZEVERA (joyería, Santo Domingo).
Sirve para que la clienta apruebe estructura, tipografía, color y experiencia **antes** de programar el tema.

## Qué incluye
- **Portada**: anuncio de servicio, header con logo centrado, mega menú, hero, novedades, categorías, colecciones, "La experiencia ZEVERA", historia, boletín y pie.
- **Colección** (`#coleccion`, `#coleccion-anillo`, `#coleccion-ambar`, `#coleccion-regalo`…): filtros por categoría, material, piedra, colección y precio; orden; pieza editorial en la cuadrícula; preguntas frecuentes.
- **Ficha de producto** (`#producto-<id>`): galería de 4 tomas (producto solo, puesto, macro, escala), material que cambia la imagen, tallas, grabado (12 caracteres), empaque de regalo, WhatsApp, acordeones y "Completa el look" elegido a mano.
- **Móvil**: menú lateral por niveles, filtros en panel, galería deslizable, barra fija de "Añadir a la bolsa".
- **ES / EN** en todo el sitio.
- **Panel "Estilo del demo"**: 3 combinaciones tipográficas y 4 colores de firma para decidir con la clienta.

## Provisional
- Logo: marca tipográfica "ZEVERA" hasta recibir el logo oficial.
- Fotos: banco de imágenes (magnific.com) en formato 4:5, solo para mostrar composición y tono. Se reemplazan por las fotos reales del catálogo — mismo lugar, mismo recorte.
- Productos, precios y colecciones: contenido de ejemplo.

## Ver en local
Abrir `index.html` en el navegador. No necesita instalación ni servidor.

## Estructura
```
index.html        estructura base
css/styles.css    tokens de diseño y componentes
js/data.js        productos, colecciones y textos ES/EN
js/art.js         imágenes provisionales (fotos de banco)
assets/img/       fotos de banco usadas en el demo
js/app.js         rutas, filtros, bolsa, menú y panel de estilo
```
