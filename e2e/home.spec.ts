import { expect, test } from "@playwright/test";

test("homepage shows Spanish brand copy and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Historias que vuelven a sentirse." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Explorar historias" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Contar mi proyecto/ })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Navegación principal" })).toBeVisible();
});

test("visual system loads the local brand fonts and shared tokens", async ({ page }) => {
  await page.goto("/");

  const visualSystem = await page.evaluate(async () => {
    await document.fonts.ready;
    const root = getComputedStyle(document.documentElement);
    const heading = getComputedStyle(document.querySelector("h1")!);
    return {
      bodyFont: getComputedStyle(document.body).fontFamily,
      headingFont: heading.fontFamily,
      headingWeight: heading.fontWeight,
      manropeLoaded: document.fonts.check('16px "Manrope Variable"'),
      instrumentLoaded: document.fonts.check('48px "Instrument Serif"'),
      focusColor: root.getPropertyValue("--color-focus").trim(),
      goldText: root.getPropertyValue("--color-gold-text").trim()
    };
  });

  expect(visualSystem.bodyFont).toContain("Manrope Variable");
  expect(visualSystem.headingFont).toContain("Instrument Serif");
  expect(visualSystem.headingWeight).toBe("400");
  expect(visualSystem.manropeLoaded).toBe(true);
  expect(visualSystem.instrumentLoaded).toBe(true);
  expect(visualSystem.focusColor).toBe("#8a6518");
  expect(visualSystem.goldText).toBe("#8a6518");
});

test("homepage service paths change their visual story", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("tab", { name: /Identidad en imágenes/ }).click();
  await expect(page.getByRole("tab", { name: /Identidad en imágenes/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("[role='tabpanel']:visible")).toContainText("Comunicar con intención sin perder humanidad.");
});

test("homepage mobile layout stays within the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Historias que vuelven a sentirse." })).toBeVisible();
  await expect(page.getByRole("link", { name: /Consultar disponibilidad/ })).toBeVisible();
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(horizontalOverflow).toBe(0);
});

test("contact page guides the visitor through a tailored request", async ({ page }) => {
  await page.goto("/contacto/");

  await expect(page.getByRole("heading", { name: "Cuéntanos lo esencial." })).toBeVisible();
  await expect(page.getByLabel("Nombre")).toBeVisible();
  await expect(page.getByLabel("Correo electrónico")).toBeVisible();
  await page.getByLabel("Nombre").fill("María Torres");
  await page.getByLabel("Correo electrónico").fill("maria@example.com");
  await page.getByRole("button", { name: "Continuar" }).click();
  await expect(page.getByRole("group", { name: "Tipo de servicio" })).toBeVisible();
  await page.getByRole("radio", { name: "Video para marcas" }).check();
  await expect(page.getByText(/Comparte objetivo de campaña/)).toBeVisible();
  await page.getByRole("button", { name: "Continuar" }).click();
  await expect(page.getByLabel("¿Qué debería lograr o hacer sentir?")).toBeVisible();
  await expect(page.getByRole("button", { name: "Solicitar una propuesta" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Escribir por WhatsApp" })).toBeVisible();
});

test("contact form validates and completes the guided request flow", async ({ page }) => {
  await page.goto("/contacto/");

  await page.getByLabel("Nombre").fill("María Torres");
  await page.getByLabel("Correo electrónico").fill("maria@example.com");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page.getByRole("radio", { name: "Film de boda" }).check();
  await page.getByRole("button", { name: "Continuar" }).click();
  await page.getByLabel("¿Qué debería lograr o hacer sentir?").fill("Una boda íntima al atardecer en Lima.");
  await page.getByRole("button", { name: "Solicitar una propuesta" }).click();

  await expect(page.getByText(/Todo listo/)).toBeVisible();
});

test("work portfolio presents an editorial selection and grouped filters", async ({ page }) => {
  await page.goto("/trabajos/");

  await expect(page.getByRole("heading", { name: "Historias que se sienten antes de explicarse." })).toBeVisible();
  await expect(page.getByRole("link", { name: /Proyecto destacado Velo y memoria/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Todos" })).toBeVisible();
  await page.getByRole("button", { name: /Marcas \+ contenido/ }).click();
  await expect(page.locator("[data-project-stage] [data-stage-title]")).toHaveText("Casa Nativa");
  await page.getByRole("button", { name: "Previsualizar Café Aurora" }).click();
  await expect(page.locator("[data-project-stage] [data-stage-title]")).toHaveText("Café Aurora");
  await expect(page.locator("[data-project-stage] [data-stage-image]")).toHaveAttribute("src", "/images/projects/cafe-aurora.webp");
  await expect(page.getByRole("button", { name: "Previsualizar Café Aurora" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Previsualizar Impulso social" })).toBeVisible();
  await expect(page.getByText(/Mostrando 4 proyectos en Marcas \+ contenido/)).toBeVisible();
  await expect(page.getByRole("button", { name: "Previsualizar Luz de abril" })).toBeHidden();
});

test("services page guides visitors through offers and packages", async ({ page }) => {
  await page.goto("/servicios/");

  await expect(page.getByRole("heading", { name: "La historia define el formato. La intención define la mirada." })).toBeVisible();
  await page.getByRole("tab", { name: /Video para marcas/ }).click();
  await expect(page.locator("[role='tabpanel']:visible").getByRole("heading", { name: /Convertir una idea de marca/ })).toBeVisible();
  await expect(page.getByText("Desde S/ 2,400")).toBeVisible();
  await expect(page.getByText("Más elegido")).toBeVisible();
  await expect(page.getByRole("link", { name: /Diseñar mi propuesta/ })).toHaveAttribute("href", "/contacto/#solicitud");
});

test("about page presents a personal editorial narrative", async ({ page }) => {
  await page.goto("/sobre-mi/");

  await expect(page.getByRole("heading", { name: "Observar primero. Crear después." })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Las mejores imágenes casi nunca/ })).toBeVisible();
  await expect(page.getByText("Presencia discreta")).toBeVisible();
  await expect(page.getByRole("link", { name: /Contar mi proyecto/ })).toHaveAttribute("href", "/contacto/#solicitud");
  await expect(page.locator(".demo-dock")).toBeHidden();
});

test("work detail opens gallery lightbox", async ({ page }) => {
  await page.goto("/trabajos/luz-de-abril/");

  await expect(page.getByRole("heading", { name: "Más que una portada: una historia completa." })).toBeVisible();
  await page.getByRole("button", { name: /Abrir imagen de Luz de abril/ }).click();
  await expect(page.getByRole("button", { name: "Cerrar imagen" })).toBeVisible();
});

test("homepage exposes the commercial case study without interrupting the experience", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("¿Quieres una experiencia digital con este nivel de detalle?")).toBeVisible();
  await expect(page.getByRole("link", { name: /Ver cómo fue creada/ })).toHaveAttribute("href", "/quiero-una-web/");
});

test("commercial case study demonstrates responsive delivery", async ({ page }) => {
  await page.goto("/quiero-una-web/");

  await expect(page.getByRole("heading", { name: "Una web debería hacer más claro por qué elegirte." })).toBeVisible();
  const preview = page.locator("[data-live-preview]");
  await preview.getByRole("button", { name: "Móvil" }).click();
  await expect(preview).toHaveAttribute("data-size", "mobile");
  await expect(preview.getByRole("button", { name: "Móvil" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("link", { name: /Hablemos de tu proyecto/ }).first()).toHaveAttribute("href", /github\.com\/Jandroel/);
});

test("commercial case study remains responsive on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/quiero-una-web/");

  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(horizontalOverflow).toBe(0);
  await expect(page.getByRole("link", { name: /Hablemos de tu proyecto/ }).first()).toBeVisible();
});

test("image comparison responds to keyboard input", async ({ page }) => {
  await page.goto("/");

  const comparison = page.getByRole("slider", { name: /Comparar luz neutra/ });
  await comparison.focus();
  await comparison.press("ArrowRight");
  await expect(comparison).toHaveValue("53");
});
