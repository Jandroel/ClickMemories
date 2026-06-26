# ClickMemories

Portfolio web para un estudio de fotografía y video con mirada cinematográfica, contenido en español y una experiencia pensada para clientes que buscan bodas, eventos, retratos y piezas de marca con una estética emocional y premium.

![Astro](https://img.shields.io/badge/Astro-5-ff5d01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-e2e-2e7d32?logo=playwright&logoColor=white)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-d9a441)

## Demo en vivo

Demo pendiente: `https://clickmemories.example.com`

## Vista previa

![Vista previa editorial de ClickMemories](https://images.unsplash.com/photo-1591604442449-ecc9943efabf?auto=format&fit=crop&w=1400&q=82)

## Características principales

- Contenido público completamente en español.
- Página de inicio con hero visual, trabajos destacados, servicios, proceso, testimonios y CTA final.
- Portafolio con colección tipada de proyectos en `src/content/trabajos`.
- Portafolio filtrable por categoría con grilla editorial tipo masonry.
- Páginas de detalle con galería, carrusel, miniaturas, lightbox, teaser visual y testimonio.
- Servicios con paquetes, método de trabajo, FAQ y formulario de contacto.
- Contacto con WhatsApp, señales de disponibilidad y guía dinámica según servicio.
- Metadatos SEO, Open Graph, `robots.txt` y `sitemap.xml`.
- Diseño responsive, accesible y enfocado en lectura visual.
- Prueba smoke con Playwright.
- Documentación técnica y de producto en `docs/`.

## Stack tecnológico

- `Astro` para sitio estático, rutas y contenido.
- `TypeScript` para configuración y datos tipados.
- CSS propio con variables de diseño en `src/styles/global.css`.
- `Playwright` para pruebas end-to-end.
- `GitHub Actions` para validación de build y pruebas.

## Filosofía de diseño

ClickMemories debe sentirse elegante, emocional y moderno sin caer en frases genéricas. La interfaz prioriza fotografía real, espacios amplios, contraste claro y una paleta editorial con negro cálido, crema, arcilla, verde y azul sobrio.

La experiencia evita una estética de landing genérica: el primer viewport muestra marca, propuesta visual y CTAs concretos; el resto del sitio sostiene una navegación clara hacia trabajos, servicios y contacto.

## Páginas incluidas

- `/` Inicio.
- `/trabajos/` Portafolio.
- `/trabajos/[slug]/` Detalle de proyecto.
- `/servicios/` Servicios y FAQ.
- `/sobre-mi/` Filosofía y forma de trabajo.
- `/contacto/` Formulario y canales directos.
- `/404/` Página no encontrada.
- `/sitemap.xml` Sitemap generado.

## Arquitectura general

El proyecto separa presentación, contenido y configuración:

- `src/pages/` contiene rutas Astro.
- `src/components/` contiene piezas reutilizables.
- `src/layouts/` define el layout base con SEO, header y footer.
- `src/content/trabajos/` guarda los casos de portafolio en Markdown.
- `src/data/site.ts` centraliza navegación, servicios, FAQs, testimonios y datos de marca.
- `src/styles/global.css` define tokens visuales, layout y estados responsive.

## Estructura de carpetas

```text
.
├── docs/
├── e2e/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── trabajos/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Instalación local

```bash
npm install
npm run dev
```

El sitio se abrirá por defecto en `http://localhost:4321`.

## Scripts disponibles

```bash
npm run dev       # Servidor local
npm run build     # Build estático
npm run preview   # Vista previa del build
npm run check     # Revisión de Astro y TypeScript
npm run test      # Pruebas e2e
```

## Testing

Las pruebas en `e2e/home.spec.ts` verifican que la página de inicio cargue, que el contacto exponga campos en español, que el portafolio tenga filtros y que una página de trabajo abra su galería en lightbox.

Para ejecutar:

```bash
npm run test:e2e
```

## SEO, accesibilidad y performance

- El layout base define título, descripción, canonical, Open Graph y `twitter:card`.
- El idioma del documento es `es`.
- Existe enlace de salto al contenido.
- Los formularios usan labels visibles y mensajes de validación en español.
- Las imágenes de cards usan `loading="lazy"`.
- El sitio está preparado para salida estática y despliegue en CDN.

## Flujo Git

Usar ramas en inglés y kebab-case:

```text
feat/homepage
feat/services-page
docs/repository-documentation
fix/responsive-polish
```

Los commits deben seguir `Conventional Commits` en inglés:

```text
feat: implement Spanish homepage
docs: add architecture documentation
test: add Playwright smoke test
```

## Despliegue

El build genera archivos estáticos en `dist/`, aptos para Vercel, Netlify, Cloudflare Pages o cualquier hosting estático.

```bash
npm run build
```

Antes de producción, actualizar `site` en `astro.config.mjs`, `siteConfig.url` en `src/data/site.ts` y la URL de `public/robots.txt`.

## Roadmap

- Reemplazar imágenes placeholder por material propio de ClickMemories.
- Añadir integración real de formulario.
- Incorporar optimización avanzada de imágenes locales.
- Agregar filtros interactivos en portafolio.
- Añadir integración real de video o showreel hospedado.
- Añadir más pruebas visuales y de accesibilidad.

## Licencia

Este proyecto está preparado con licencia MIT. Revisa `LICENSE` para el texto legal.

## Créditos y atribución de assets

Las fotografías remotas usadas como placeholders provienen de Unsplash y están documentadas en `ASSETS_ATTRIBUTIONS.md`. Deben reemplazarse por material propio antes del lanzamiento final si el sitio representa un portfolio real.
