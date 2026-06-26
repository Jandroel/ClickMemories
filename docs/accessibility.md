# Accesibilidad

El sitio está diseñado para que la experiencia visual no sacrifique navegación, lectura ni uso del formulario.

## Medidas implementadas

- Documento con `lang="es"`.
- Enlace “Saltar al contenido”.
- Navegación semántica con `aria-label`.
- Estado `aria-current` en enlaces activos.
- Imágenes con textos alternativos.
- Formulario con labels visibles.
- Mensajes de validación en español y regiones `aria-live`.
- Contrastes altos entre texto y fondos.
- Botones de carrusel y lightbox con `aria-label`.
- Filtros de portafolio con `aria-pressed`.

## Puntos a revisar antes de producción

- Ejecutar auditoría con Lighthouse o axe.
- Validar navegación completa con teclado.
- Revisar contraste sobre fotografías finales.
- Confirmar que los mensajes del formulario también se anuncien correctamente en lectores de pantalla.
- Revisar navegación de carrusel y lightbox con lectores de pantalla.
- Evitar que futuras animaciones afecten a usuarios con sensibilidad al movimiento.
