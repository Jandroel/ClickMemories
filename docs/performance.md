# Performance

ClickMemories parte de una arquitectura estática para priorizar velocidad, estabilidad y facilidad de despliegue.

## Decisiones actuales

- Astro genera HTML estático.
- La mayor parte de la interfaz no necesita JavaScript.
- El JavaScript del formulario es pequeño y local.
- El carrusel, filtros y lightbox usan JavaScript local sin dependencias externas.
- Las imágenes de tarjetas usan `loading="lazy"`.
- La CSS global evita frameworks pesados en esta primera versión.

## Imágenes

Las imágenes actuales son placeholders remotos de Unsplash. Para producción se recomienda reemplazarlas por archivos propios optimizados en `public/` o usar una integración de imágenes de Astro con formatos modernos.

Recomendaciones para assets finales:

- Exportar fotografías hero entre 1800 y 2400 px de ancho.
- Usar `webp` o `avif` cuando el hosting lo permita.
- Mantener versiones verticales para cards.
- Preparar versiones pequeñas para miniaturas de galería.
- Definir `alt` descriptivo para cada imagen.

## Métricas objetivo

- HTML inicial liviano.
- Cero dependencias de runtime para navegación básica.
- Imágenes optimizadas antes del despliegue final.
- Build reproducible en CI.
