module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "jsdoc", "only-warn", "prefer-arrow", "vue"],

  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "babel.config.js",
    "node_modules",
    "vue.config.js",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },

  rules: {
    quotes: ["off", "double", { avoidEscape: true }],
    "max-len": ["off", { code: 200 }],
    "sort-keys": "off",
    curly: "off",
    "no-var": "off",
    "prefer-const": "off",
    "sort-imports": "off",
    "no-fallthrough": "off",
    "no-prototype-builtins": "off",
    "arrow-parens": ["off", "as-needed"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
