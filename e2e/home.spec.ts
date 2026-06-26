import { expect, test } from "@playwright/test";

test("homepage shows Spanish brand copy and navigation", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "ClickMemories" })).toBeVisible();
  await expect(page.getByText("Historias reales, recuerdos que permanecen.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Ver trabajos" }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Cotizar mi sesión" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Navegación principal" })).toBeVisible();
});

test("contact page exposes Spanish form fields", async ({ page }) => {
  await page.goto("/contacto/");

  await expect(page.getByLabel("Nombre")).toBeVisible();
  await expect(page.getByLabel("Correo electrónico")).toBeVisible();
  await expect(page.getByLabel("Tipo de servicio")).toBeVisible();
  await expect(page.getByLabel("Mensaje")).toBeVisible();
  await expect(page.getByRole("button", { name: "Hablemos de tu proyecto" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Escribir por WhatsApp" })).toBeVisible();
});

test("work portfolio exposes filters", async ({ page }) => {
  await page.goto("/trabajos/");

  await expect(page.getByRole("button", { name: "Todos" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Bodas" })).toBeVisible();
  await expect(page.getByText("Luz de abril")).toBeVisible();
});

test("work detail opens gallery lightbox", async ({ page }) => {
  await page.goto("/trabajos/luz-de-abril/");

  await expect(page.getByRole("heading", { name: "Más que una portada: una historia completa." })).toBeVisible();
  await page.getByRole("button", { name: /Abrir imagen de Luz de abril/ }).click();
  await expect(page.getByRole("button", { name: "Cerrar imagen" })).toBeVisible();
});
