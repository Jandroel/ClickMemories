#!/usr/bin/env bash
set -euo pipefail

if [ -d ".git" ]; then
  echo "Ya existe .git. Este script esta pensado para ejecutarse antes de inicializar el repositorio."
  echo "Si ya iniciaste Git, crea los commits manualmente para no reescribir tu historia."
  exit 1
fi

start_branch="chore/project-setup"

if git init -b "$start_branch" >/dev/null 2>&1; then
  :
else
  git init
  git checkout -b "$start_branch"
fi

git add \
  .editorconfig \
  .gitignore \
  .env.example \
  package.json \
  astro.config.mjs \
  tsconfig.json \
  public \
  src/env.d.ts \
  src/layouts \
  src/components/Header.astro \
  src/components/Footer.astro \
  src/components/SectionHeading.astro \
  src/styles/global.css \
  tools/create-git-history.sh

git commit -m "chore: initialize Astro project"
git branch main
git switch main

commit_branch() {
  local branch="$1"
  local message="$2"
  shift 2

  git switch -c "$branch"
  git add "$@"

  if git diff --cached --quiet; then
    echo "Sin cambios para $branch"
  else
    git commit -m "$message"
  fi

  git switch main
  git merge --ff-only "$branch"
}

commit_branch "feat/content-model" \
  "feat: create Spanish content model" \
  src/content \
  src/data/site.ts

commit_branch "feat/homepage" \
  "feat: implement cinematic homepage" \
  src/pages/index.astro \
  src/components/ProjectCard.astro \
  src/components/ServiceCard.astro

commit_branch "feat/work-gallery" \
  "feat: add work galleries and portfolio filters" \
  src/components/WorkGallery.astro \
  src/components/PortfolioShowcase.astro \
  src/pages/trabajos

commit_branch "feat/services-contact" \
  "feat: implement services and contact experience" \
  src/components/ContactForm.astro \
  src/pages/servicios.astro \
  src/pages/contacto.astro

commit_branch "feat/about-seo-pages" \
  "feat: add about page and SEO routes" \
  src/pages/sobre-mi.astro \
  src/pages/404.astro \
  src/pages/sitemap.xml.ts

commit_branch "docs/repository-documentation" \
  "docs: add Spanish repository documentation" \
  README.md \
  docs \
  ASSETS_ATTRIBUTIONS.md \
  CONTRIBUTING.md \
  SECURITY.md \
  CHANGELOG.md \
  LICENSE

commit_branch "feat/testing-ci" \
  "test: add Playwright smoke coverage" \
  playwright.config.ts \
  e2e \
  .github

git switch main

echo ""
echo "Historia creada correctamente."
echo "Ramas disponibles:"
git branch --list
echo ""
echo "Resumen:"
git log --oneline --decorate --all --graph

