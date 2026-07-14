# Changelog

Todos los cambios relevantes de este proyecto se documentarán aquí.

El formato sigue una lectura humana en español. Los commits del repositorio deben mantenerse en inglés con `Conventional Commits`.

## [0.4.0] - 2026-07-14

### Agregado

- Selector interactivo y accesible para explorar seis servicios por resultado, entregables e inversión.
- Navegación por teclado entre categorías de servicio.
- Prueba end-to-end del recorrido comercial de la página Servicios.

### Cambiado

- Página Servicios rediseñada con portada editorial, comparativa de paquetes y proceso visual.
- Bloque de contacto reemplazado por un cierre breve que conduce al formulario guiado.
- Paquetes reorganizados para facilitar la comparación y destacar la opción más elegida.
- Enlaces comerciales conectados directamente con la sección de solicitud en Contacto.
- Dock demostrativo oculto en Servicios para evitar superposiciones y distracciones.

## [0.3.1] - 2026-07-14

### Agregado

- Flujo guiado de contacto en tres pasos con progreso visible y navegación hacia atrás.
- Validación independiente por etapa para mantener la experiencia enfocada.

### Cambiado

- Formulario de contacto compactado para mostrar únicamente los campos del paso actual.
- Formulario priorizado antes del bloque editorial en pantallas móviles.
- Encabezado del formulario simplificado para reforzar su función y reducir altura.

### Eliminado

- Etiqueta y mensajes de demostración dentro del formulario de contacto.

## [0.3.0] - 2026-07-14

### Agregado

- Portada inmersiva con un caso destacado dentro de la sección Trabajos.
- Filtros comerciales agrupados con contadores y estado accesible de resultados.
- CTA fotográfico integrado al cierre del portafolio.

### Cambiado

- Grilla de proyectos reestructurada como una composición editorial asimétrica.
- Tarjetas simplificadas para priorizar fotografía, categoría, título y ubicación.
- Dock demostrativo oculto en las rutas de trabajos para no competir con las imágenes.

### Corregido

- Espacios vacíos producidos por la antigua distribución de columnas.
- Desbordamiento horizontal de filtros en pantallas móviles.
- Recurso visual roto en el caso Impulso social.

## [0.2.1] - 2026-07-14

### Agregado

- Selección visual de servicio y rango de presupuesto en el formulario de contacto.
- Mensajes de orientación que se adaptan al tipo de proyecto elegido.
- Prueba end-to-end del flujo completo de solicitud demostrativa.

### Cambiado

- Página de contacto rediseñada como una experiencia editorial de reserva.
- Formulario reorganizado en tres etapas con una jerarquía más clara.
- Panel flotante de la demo oculto en contacto para evitar superposiciones.

## [0.2.0] - 2026-07-14

### Agregado

- Capa comercial para presentar ClickMemories como demostración de servicios web.
- Comparador interactivo de dirección de color con soporte para teclado.
- Transiciones nativas entre tarjetas y páginas de proyecto.
- Revelados suaves al hacer scroll con soporte para reducción de movimiento.
- Metadatos sociales ampliados y pruebas end-to-end para las nuevas interacciones.

### Cambiado

- Migración a Astro 7 y a la API moderna Content Layer.
- Lightbox migrado a un diálogo modal nativo.
- CI ampliada con validación de tipos antes del build.
- Formulario identificado claramente como demostrativo.

### Corregido

- Errores de tipos en los campos del formulario.
- Selector ambiguo en la prueba de la página de inicio.
- Alertas de seguridad reportadas por `npm audit`.

## [0.1.0] - 2026-06-26

### Agregado

- Base de proyecto Astro para ClickMemories.
- Contenido público en español.
- Página de inicio, trabajos, servicios, sobre mí, contacto y 404.
- Colección tipada de trabajos con casos iniciales.
- Sistema visual responsive con CSS propio.
- SEO base, sitemap y robots.
- README profesional en español.
- Documentación en `docs/`.
- Archivos de contribución, seguridad y atribución de assets.
- Configuración inicial de Playwright y GitHub Actions.
- Galerías por proyecto con carrusel, miniaturas, swipe y lightbox.
- Portafolio filtrable por categoría con grilla editorial.
- Showreel visual en la página de inicio.
- Paquetes de servicio y mejoras de conversión en contacto.
