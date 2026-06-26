# Flujo Git

El repositorio usa convenciones en inglés para ramas y commits, aunque la documentación y el contenido público estén en español.

## Ramas

Usar kebab-case y prefijos claros:

```text
feat/homepage
feat/work-gallery
feat/contact-experience
docs/repository-documentation
fix/responsive-polish
```

## Commits

Usar `Conventional Commits` en inglés:

```text
feat: implement Spanish homepage
feat: add typed work collection
docs: add Spanish project documentation
test: add Playwright smoke test
fix: resolve mobile gallery spacing
```

## Pull requests

Cada PR debería incluir:

- Qué cambia.
- Cómo se probó.
- Capturas si modifica UI.
- Riesgos o pendientes conocidos.

## Criterio de merge

Antes de integrar cambios, ejecutar:

```bash
npm run build
npm run test:e2e
```

