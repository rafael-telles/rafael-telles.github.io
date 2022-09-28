import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  build: {
    transpile: ["vue-winbox"],
  },
});
