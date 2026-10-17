# Portfolio · Santiago Romano

Portfolio personal publicado en **https://romanodev.vercel.app/**

Hecho con React 19 y Vite. Se despliega automáticamente en Vercel con cada push a `main`.

## Cómo editar el contenido

Todo el contenido está en `src/data/`, no hace falta tocar los componentes:

| Archivo | Qué contiene |
|---|---|
| `profile.js` | Nombre, links de contacto, WhatsApp, Instagram y CV |
| `experience.js` | Experiencia laboral y pasantías |
| `projects.js` | `featuredProjects` (destacados) y `careerProjects` (carrera), con `myPart`, demo, docs o repo privado |
| `skills.js` | Tecnologías por categoría y la lista de la franja animada de logos |
| `icons.js` | Logos locales en `src/assets/icons/` (se pintan en blanco o negro con CSS mask) |

Para sumar una tecnología con logo: descargá el SVG de [devicon](https://devicon.dev/) a `src/assets/icons/`, importalo en `icons.js` y usá ese mismo nombre en `skills.js` o en `tech` de un proyecto.

## Correr en local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
