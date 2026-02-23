// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://delogo.it",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwind()],
  },
  image: {
    domains: ["images.unsplash.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
