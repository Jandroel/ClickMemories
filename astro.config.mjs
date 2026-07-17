import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    site: env.PUBLIC_SITE_URL || "https://clickmemories.example.com",
    output: "static",
    vite: {
      cacheDir: ".astro/vite-cache"
    }
  };
});
