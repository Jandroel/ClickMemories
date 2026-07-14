# Sistema de diseño

ClickMemories utiliza un lenguaje editorial, cálido y cinematográfico. El sistema debe acompañar la fotografía, mantener una voz reconocible entre páginas y evitar que cada sección parezca una plantilla independiente.

## Principios

1. **La fotografía lleva la emoción.** La interfaz construye jerarquía y ritmo sin competir con ella.
2. **Editorial, no decorativo.** Los grandes titulares, líneas y composiciones deben explicar algo, no llenar espacio.
3. **Calidez con contraste.** Los tonos cálidos se usan sin sacrificar legibilidad ni estados de interacción.
4. **Movimiento con propósito.** Una animación debe orientar, revelar contexto o reforzar profundidad.
5. **Responsive por composición.** Móvil no es una versión apilada: puede cambiar orden, proporción y navegación.

## Tipografía

Las fuentes se distribuyen localmente mediante Fontsource para conservar la misma apariencia en todos los sistemas operativos.

| Rol | Familia | Uso |
| --- | --- | --- |
| Display | `Instrument Serif` | H1, H2, citas protagonistas y títulos editoriales |
| Interfaz | `Manrope Variable` | Párrafos, navegación, botones, formularios y metadatos |

### Reglas

- Los titulares display usan peso `400`; no se sintetizan negritas inexistentes.
- Los controles y enlaces de acción usan pesos entre `700` y `800`.
- Los párrafos trabajan con interlineado amplio y un máximo recomendado de `64ch`.
- Los metadatos usan mayúsculas, tamaños pequeños y tracking aproximado de `0.09em`.
- Los títulos pueden escalar con `clamp()`, pero deben comprobarse en 390 px, 768 px y 1440 px.
- Se evita mezclar más de dos familias tipográficas en una misma vista.

## Paleta

| Token | Valor | Función |
| --- | --- | --- |
| `--color-ink` | `#161513` | Texto principal y superficies oscuras |
| `--color-ink-soft` | `#2b2925` | Superficies oscuras secundarias |
| `--color-paper` | `#fbfaf7` | Fondo principal |
| `--color-surface` | `#ffffff` | Formularios y controles elevados |
| `--color-cream` | `#f2eadc` | Bloques editoriales cálidos |
| `--color-field` | `#f6f2ea` | Campos de formulario |
| `--color-clay` | `#a5573a` | Acento principal y énfasis sobre fondos claros |
| `--color-clay-strong` | `#91452f` | Variante de mayor contraste |
| `--color-forest` | `#1f5146` | Superficies profundas, datos y estados positivos |
| `--color-gold` | `#d9a441` | Acento luminoso exclusivamente decorativo o sobre fondos oscuros |
| `--color-gold-text` | `#8a6518` | Texto dorado accesible sobre fondos claros |
| `--color-focus` | `#8a6518` | Indicadores de foco en superficies claras y oscuras |

### Contraste

- `--color-gold` no debe usarse para texto pequeño sobre papel o crema.
- `--color-gold-text` alcanza aproximadamente `5.09:1` sobre `--color-paper`.
- `--color-clay` alcanza aproximadamente `5:1` sobre `--color-paper`.
- `--color-forest` alcanza aproximadamente `8.66:1` sobre `--color-paper`.
- El azul anterior se eliminó para reducir acentos sin una función clara.

## Composición y espaciado

- Ancho principal: `--container-wide: 1180px`.
- Medida de lectura: `--measure-copy: 64ch`.
- Medida recomendada para encabezados de sección: `--measure-heading: 820px`.
- Espaciado vertical de sección: `--space-section`, definido de forma fluida.
- La separación entre bloques debe crecer por intención: control, grupo, sección y cambio narrativo.
- Las composiciones fotográficas pueden romper la retícula; los textos y controles deben volver siempre al contenedor.

## Radios y elevación

| Token | Uso |
| --- | --- |
| `--radius-control` | Botones, navegación y controles compactos |
| `--radius-panel` | Campos y paneles pequeños |
| `--radius-panel-large` | Formularios o comparadores contenidos |
| `--radius-round` | Controles circulares |
| `--radius-pill` | Etiquetas y filtros |

Las imágenes editoriales principales no usan radio. Las sombras se reservan para elementos que realmente se elevan sobre otra superficie, como formularios o menús.

## Movimiento

| Token | Duración | Uso |
| --- | --- | --- |
| `--duration-fast` | `180ms` | Hover, foco, color y controles |
| `--duration-medium` | `520ms` | Cambio de panel o revelado local |
| `--duration-narrative` | `800ms` | Portadas, imágenes y transiciones de sección |

- `--ease-out` se usa en entradas y desplazamientos con intención editorial.
- Las animaciones continuas deben ser discretas y no bloquear contenido.
- Todo movimiento debe tener una alternativa dentro de `prefers-reduced-motion: reduce`.
- El parallax se limita a desplazamientos pequeños para evitar mareo y bordes vacíos.

## Controles y estados

- Toda acción principal debe medir al menos `44px` de alto.
- Los estados de foco usan `--color-focus`, tres píxeles de grosor y separación visible.
- Hover nunca es la única forma de descubrir una acción.
- Pestañas y galerías deben funcionar con teclado y exponer correctamente `aria-selected`, `aria-controls` y roles.
- Los formularios mantienen labels visibles, errores asociados y mensajes en español.

## Responsive

- Validar como mínimo en 390 px, 768 px, 980 px y 1440 px.
- En móvil, los botones primarios pueden ocupar todo el ancho.
- Las pestañas extensas pasan a navegación horizontal con scroll contenido.
- Las composiciones panorámicas se convierten en imágenes verticales o reordenan sus capas.
- No se permite desbordamiento horizontal del documento.
- Los elementos sticky deben dejar de serlo cuando compiten con el alto disponible.

## Mantenimiento

- Antes de crear un color, radio, sombra o duración nueva, comprobar si existe un token equivalente.
- Los estilos estructurales específicos pueden vivir junto a su página o componente; los fundamentos deben permanecer en `src/styles/global.css`.
- Cualquier cambio visual transversal debe actualizar este documento y contar con comprobación responsive.
