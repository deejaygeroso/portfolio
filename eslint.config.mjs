import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // 🚫 Error on unused imports
      'unused-imports/no-unused-imports': 'error',

      // 🚫 Error on unused variables, but allow _var as ignored
      'unused-imports/no-unused-vars': ['warn', { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    },
  },
];

export default eslintConfig;
