# LUMA — Cocina Mediterránea (demo)

Sitio estático sin dependencias. Datos ficticios; pedidos y reservas son simulaciones.

## Cómo abrirlo en VS Code
1. Abre la carpeta `luma` (Archivo > Abrir carpeta).
2. Instala la extensión **Live Server** y haz clic en "Go Live", o abre `index.html` en el navegador.

## Estructura
- `index.html` — estructura de las secciones
- `css/styles.css` — identidad visual (variables de color y tipografía al inicio)
- `js/app.js` — datos de productos (`P` y `PR`), carrito, checkout, reservas, galería

## Personalizar
- Productos y precios: arrays `P` (menú) y `PR` (promociones) en `js/app.js`.
- Fotos reales: reemplaza la función `art()` por etiquetas `<img>` con tus imágenes en una carpeta `img/`.
- Domicilio: constante `FEE`.
