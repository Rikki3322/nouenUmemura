// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginTailwindcss from 'eslint-plugin-tailwindcss';
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
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
      react: pluginReact,
      tailwindcss: pluginTailwindcss,
      import: pluginImport,
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      // React 17+ では React のインポート不要なので無効化
      'react/react-in-jsx-scope': 'off',

      // Tailwind CSS クラスのカスタムチェック（必要に応じて変更）
      'tailwindcss/no-custom-classname': 'off',

      // アロー関数を使うことを強制（コールバック関数）
      'prefer-arrow-callback': 'error',

      // 関数宣言を禁止し関数式を推奨（アロー含む）
      'func-style': ['error', 'expression'],

      // アロー関数の中身は必要な時だけブロックを使う
      'arrow-body-style': ['error', 'as-needed'],

      // single quotation only
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      // import順序の自動ソートルール
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',

      // importの順序とグルーピングチェック
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // node.js組み込みモジュール
            'external', // npmなど外部モジュール
            'internal', // 自作モジュール
            ['parent', 'sibling', 'index'], // 相対パス
            'object', // styleやjsonなど
            'type', // 型のみimport
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        // TypeScriptのパスエイリアスを解決するために必要
        typescript: {},
      },
    },
    extends: [
      'js:recommended',
      ...tseslint.configs.recommended,
      ...pluginReact.configs.flat.recommended,
    ],
  },
]);
