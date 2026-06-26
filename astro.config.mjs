import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://clickmemories.example.com",
  output: "static",
  vite: {
    cacheDir: ".astro/vite-cache"
  }
});
