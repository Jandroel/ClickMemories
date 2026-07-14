import { expect, test } from "@playwright/test";

test("homepage shows Spanish brand copy and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "ClickMemories" })).toBeVisible();
  await expect(page.locator(".hero__line")).toHaveText("Historias reales, recuerdos que permanecen.");
  await expect(page.getByRole("link", { name: "Ver trabajos" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Cotizar mi sesión" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Navegación principal" })).toBeVisible();
});

test("contact page guides the visitor through a tailored request", async ({ page }) => {
  await page.goto("/contacto/");

  await expect(page.getByRole("heading", { name: "Construyamos una propuesta alrededor de tu historia." })).toBeVisible();
  await expect(page.getByLabel("Nombre")).toBeVisible();
  await expect(page.getByLabel("Correo electrónico")).toBeVisible();
  await expect(page.getByRole("group", { name: "Tipo de servicio" })).toBeVisible();
  await page.getByRole("radio", { name: "Video para marcas" }).check();
  await expect(page.getByText(/Comparte objetivo de campaña/)).toBeVisible();
  await expect(page.getByLabel("Cuéntanos sobre el proyecto")).toBeVisible();
  await expect(page.getByRole("button", { name: "Solicitar una propuesta" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Escribir por WhatsApp" })).toBeVisible();
});

test("contact demo validates and completes the request flow", async ({ page }) => {
  await page.goto("/contacto/");

  await page.getByLabel("Nombre").fill("María Torres");
  await page.getByLabel("Correo electrónico").fill("maria@example.com");
  await page.getByRole("radio", { name: "Film de boda" }).check();
  await page.getByLabel("Cuéntanos sobre el proyecto").fill("Una boda íntima al atardecer en Lima.");
  await page.getByRole("button", { name: "Solicitar una propuesta" }).click();

  await expect(page.getByText(/Demostración completada/)).toBeVisible();
});

test("work portfolio presents an editorial selection and grouped filters", async ({ page }) => {
  await page.goto("/trabajos/");

  await expect(page.getByRole("heading", { name: "Historias que se sienten antes de explicarse." })).toBeVisible();
  await expect(page.getByRole("link", { name: /Proyecto destacado Velo y memoria/ })).toBeVisible();
  await expect(page.getByRole("button", { name: "Todos" })).toBeVisible();
  await page.getByRole("button", { name: /Marcas \+ contenido/ }).click();
  await expect(page.getByText("Café Aurora")).toBeVisible();
  await expect(page.getByText("Impulso social")).toBeVisible();
  await expect(page.getByText(/Mostrando 2 proyectos en Marcas \+ contenido/)).toBeVisible();
  await expect(page.getByText("Luz de abril")).toBeHidden();
});

test("work detail opens gallery lightbox", async ({ page }) => {
  await page.goto("/trabajos/luz-de-abril/");

  await expect(page.getByRole("heading", { name: "Más que una portada: una historia completa." })).toBeVisible();
  await page.getByRole("button", { name: /Abrir imagen de Luz de abril/ }).click();
  await expect(page.getByRole("button", { name: "Cerrar imagen" })).toBeVisible();
});

test("demo controls explain the concept and expose a creator CTA", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Explorar la demo" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: /Una marca ficticia/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Solicitar una web similar/ })).toHaveAttribute("href", /github\.com\/Jandroel/);
});

test("image comparison responds to keyboard input", async ({ page }) => {
  await page.goto("/");

  const comparison = page.getByRole("slider", { name: /Comparar luz neutra/ });
  await comparison.focus();
  await comparison.press("ArrowRight");
  await expect(comparison).toHaveValue("53");
});
