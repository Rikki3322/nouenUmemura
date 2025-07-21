// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      import: pluginImport,
      'simple-import-sort': pluginSimpleImportSort,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {}, // tsconfig の paths に対応
      },
    },
    rules: {
      // React ルール
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],

      // スタイル系
      'prefer-arrow-callback': 'error',
      'func-style': ['error', 'expression'],
      'arrow-body-style': ['error', 'as-needed'],
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      // import 並び順（simple-import-sort を優先）
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'import/order': 'off', // 重複回避のため無効化
    },
  },
]);
