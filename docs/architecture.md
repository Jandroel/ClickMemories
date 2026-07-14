# Arquitectura

ClickMemories está construido como un sitio estático con Astro. La prioridad es mantener una base simple, rápida y fácil de revisar por una persona técnica o por un cliente que necesite entender cómo se organiza el portfolio.

## Principios

- Separar contenido, presentación y configuración.
- Mantener el contenido público en español.
- Evitar dependencias innecesarias mientras el proyecto está en etapa inicial.
- Usar rutas estáticas para mejorar performance, SEO y despliegue.
- Hacer que los proyectos del portafolio sean fáciles de agregar sin tocar componentes.

## Capas principales

`src/layouts/BaseLayout.astro` define el documento HTML, metadatos SEO, navegación global y pie de página.

`src/pages/` contiene las rutas públicas. Las páginas consumen componentes y datos, pero evitan duplicar listas largas de contenido.

`src/components/` contiene piezas reutilizables como tarjetas de proyecto, tarjetas de servicio, encabezados de sección y formulario.

`src/content/trabajos/` contiene proyectos en Markdown con frontmatter validado por `src/content.config.ts` mediante la API Content Layer.

`src/data/site.ts` centraliza datos de marca, navegación, servicios, testimonios, FAQs, opciones de contacto y referencias de imágenes.

`src/styles/global.css` contiene tokens visuales, layout responsive, estados de formulario y componentes de presentación.

## Flujo de datos

Los proyectos se cargan mediante `glob()` y se consultan con `getCollection("trabajos")`. Astro valida el frontmatter con el esquema de `src/content.config.ts`, genera `/trabajos/` y crea una página estática para cada identificador en `/trabajos/[slug]/`.

El resto del contenido reusable viene de `src/data/site.ts`, lo que evita repetir copy de servicios, FAQs o navegación en varias páginas.

## Salida

El proyecto usa `output: "static"` en `astro.config.mjs`. El resultado de `npm run build` se genera en `dist/` y puede desplegarse en hosting estático o CDN.

