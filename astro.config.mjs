import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://telles.dev",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "pt", locales: { pt: "pt-BR", en: "en" } },
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
