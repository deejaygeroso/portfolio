import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  // ✅ Next.js core rules
  ...nextVitals,
  ...nextTs,

  // ✅ Your custom rules
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      // 🚫 Error on unused imports
      "unused-imports/no-unused-imports": "error",

      // ⚠️ Warn on unused vars, allow _var
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  // ✅ Override default ignores (same as Next generator)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
