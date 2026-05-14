# BlogDPC NTN - Publicación en GitHub Pages

## Contenido del sitio

Este paquete contiene un sitio estático listo para publicar sobre **Non-Terrestrial Networks (NTN)** como entrega del Reto ABET SO7 de Comunicaciones II.

Estructura principal:

```text
ntn-blog/
├── index.html
├── styles.css
├── app.js
├── site-data.js
├── README_PUBLICACION.md
├── assets/
│   ├── images/
│   │   ├── hero/hero-ntn.svg
│   │   ├── maps/vosviewer-original.jpg
│   │   ├── maps/vosviewer-preview.jpg
│   │   ├── team/marcos-arrieta.jpg
│   │   ├── team/johan-pena.jpg
│   │   ├── team/juan-suarez.jpg
│   │   ├── team/juan-torres.jpg
│   │   └── icons/orbit.svg
│   ├── data/
│   │   ├── vosviewer-map.json
│   │   ├── scopus-export.csv
│   │   └── processed-data.json
│   └── scripts/optional-processing-notes.js
```

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir el contenido de la carpeta `ntn-blog` directamente a la raíz del repositorio.
3. Verificar que `index.html` quede en la raíz, no dentro de otra carpeta adicional.
4. Entrar a **Settings > Pages**.
5. En **Build and deployment**, seleccionar:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Guardar los cambios.
7. Esperar a que GitHub Pages publique el sitio.

## Verificación local

El sitio puede abrirse directamente con doble clic sobre `index.html` porque los datos principales están integrados en `site-data.js` y no dependen de un servidor.

También puede probarse con servidor local:

```bash
python -m http.server 8000
```

Luego abrir:

```text
http://localhost:8000
```

## Características incluidas

- Navegación real por pestañas.
- Diseño responsive para computador, tablet y celular.
- Vista original del mapa VOSviewer con zoom y desplazamiento.
- Vista interactiva del mapa con nodos, enlaces, búsqueda y filtro por clúster.
- Análisis por palabras con fuerza de asociación y conexiones principales.
- Calculadora interactiva de link budget y Doppler para enlace LEO.
- Asistente IA local basado en la base de conocimiento del sitio.
- Referencias en formato IEEE.
- Sección de retroalimentación local.
- Rutas relativas compatibles con GitHub Pages.

## Nota técnica

El sitio no requiere backend, claves API, instalación de paquetes ni configuración especial de GitHub Pages.

## Actualización incluida

Esta versión incorpora una pestaña Tema NTN con una estructura visual más profesional, una sección institucional con logos de la Universidad Industrial de Santander y de la Escuela, y una simulación visual del mini-caso técnico que se actualiza con las variables del link budget y Doppler.
