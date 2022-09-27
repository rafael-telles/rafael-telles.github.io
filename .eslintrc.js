module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "warn",
    "no-unused-vars": "warn",
    "space-in-parens": "off",
    "computed-property-spacing": "off",
    "max-len": "warn",
  },
};
