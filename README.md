# mi-app

Plantilla mínima para un sitio estático accesible y sin dependencias externas.

## Vista previa local

1. Clona este repositorio o descarga el código.
2. Abre el archivo `index.html` directamente en tu navegador **o** levanta un servidor estático:
   ```bash
   python -m http.server 5173
   ```
3. Visita <http://localhost:5173> para navegar la página.

## Estructura

- `index.html`: documento principal con semántica básica y llamada al script principal.
- `styles.css`: hoja de estilos con variables CSS, reset y layout responsivo.
- `main.js`: lógica para alternar tema claro/oscuro con persistencia en `localStorage`.
- `assets/logo.svg`: logotipo en formato vectorial listo para personalizar.

## Despliegue en GitHub Pages

1. Asegúrate de que tus cambios estén confirmados en la rama `main` o `master`.
2. En GitHub, entra a **Settings** > **Pages**.
3. En **Source**, elige la rama (por ejemplo `main`) y la carpeta `/ (root)`.
4. Guarda los cambios. En unos minutos, la página estará disponible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

## Personalización sugerida

- Ajusta las variables en `:root` dentro de `styles.css` para adaptar colores y tipografías.
- Sustituye el contenido de cada sección en `index.html` con información relevante para tu proyecto.
- Actualiza `assets/logo.svg` con el logotipo definitivo de tu marca.
