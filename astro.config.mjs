import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://telles.dev",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
