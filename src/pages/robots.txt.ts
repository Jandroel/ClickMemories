import { siteConfig } from "@data/site";

export function GET() {
  const content = ["User-agent: *", "Allow: /", "", `Sitemap: ${siteConfig.url}/sitemap.xml`, ""].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
