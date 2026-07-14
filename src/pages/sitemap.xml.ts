import { getCollection } from "astro:content";
import { siteConfig } from "@data/site";

export async function GET() {
  const projects = await getCollection("trabajos");
  const routes = ["", "trabajos/", "servicios/", "sobre-mi/", "contacto/"];
  const projectRoutes = projects.map((project) => `trabajos/${project.id}/`);
  const urls = [...routes, ...projectRoutes]
    .map((route) => `  <url><loc>${siteConfig.url}/${route}</loc></url>`)
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}

