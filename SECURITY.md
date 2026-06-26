# Seguridad

ClickMemories es un sitio estático, pero aun así debe cuidarse la seguridad del repositorio, formularios y despliegue.

## Reportar un problema

Si encuentras una vulnerabilidad o riesgo, escribe a `hola@clickmemories.pe` con:

- Descripción del problema.
- Pasos para reproducirlo.
- Impacto potencial.
- Recomendación si la tienes.

No publiques detalles sensibles en issues públicos.

## Alcance actual

- Sitio Astro estático.
- Formulario sin integración backend real en esta versión.
- Imágenes remotas usadas como placeholders.
- CI preparado para build y pruebas.

## Recomendaciones

- No subir secretos al repositorio.
- Usar variables de entorno para integraciones futuras.
- Validar cualquier backend de formulario en servidor.
- Revisar dependencias periódicamente.
- Configurar cabeceras de seguridad en el hosting final.

