/** @type {import("eslint").Linter.Config} */
// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jsx-a11y"],
  rules: { "react-refresh/only-export-components": "warn" },
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    "*.md",
    "*.js",
    "*.json",
    "*.css",
    "*.html",
    "*.svg",
    "./templates",
  ],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/recommended"],
    },
  ],
}
