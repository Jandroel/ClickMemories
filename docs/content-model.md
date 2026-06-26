# Modelo de contenido

El portafolio se modela con una colección de contenido Astro llamada `trabajos`. Cada proyecto vive como un archivo Markdown dentro de `src/content/trabajos/`.

## Campos del frontmatter

```yaml
title: "Luz de abril"
category: "Bodas"
location: "Pachacámac, Lima"
date: 2025-04-18
excerpt: "Resumen breve del proyecto."
cover: "https://..."
coverAlt: "Descripción accesible de la imagen."
featured: true
services: ["Film de boda", "Cobertura completa"]
duration: "12 horas"
mood: ["Luz natural", "Tono documental"]
gallery:
  - src: "https://..."
    alt: "Descripción de la imagen."
    caption: "Texto breve de contexto."
    orientation: "vertical"
video:
  title: "Trailer del proyecto"
  description: "Descripción breve."
  poster: "https://..."
  duration: "00:45"
testimonial:
  quote: "Comentario del cliente."
  author: "Nombre"
  context: "Tipo de proyecto"
```

## Criterios editoriales

El contenido debe estar en español y mantener una voz elegante, emocional y moderna. Cada proyecto debe explicar:

- Qué historia o necesidad originó el trabajo.
- Qué decisiones visuales se tomaron.
- Qué entregables recibió el cliente.
- Qué imágenes forman la galería y qué aporta cada una a la narrativa.
- Qué testimonio real puede respaldar el resultado cuando esté disponible.

## Categorías sugeridas

- Bodas.
- Retratos.
- Eventos.
- Comercial.
- Historias de marca.
- Sesiones familiares.
- Editorial.
- Reels y contenido social.

## Cómo agregar un proyecto

Crear un nuevo archivo en `src/content/trabajos/` con nombre en kebab-case, completar el frontmatter y escribir el contenido en Markdown. Astro generará automáticamente la página de detalle en `/trabajos/[slug]/`.

Cada proyecto debe incluir al menos tres imágenes en `gallery`. La portada puede repetirse dentro de la galería, pero la página destaca más cuando combina retratos, detalles, contexto y momentos amplios.
