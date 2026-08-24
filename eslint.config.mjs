import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["build/**", "**/*.config.{js,mjs,cjs}"]),
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "eol-last": ["error", "always"],
      "no-unused-vars": "warn",
      "no-trailing-spaces": "error",
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      }],
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.{test,spec}.{js,jsx}", "**/setupTests.{js,jsx}"],
    languageOptions: {
      globals: globals.jest,
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]);
