import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // 🔕 Ignore le build
  globalIgnores(['dist']),

  // ==========================
  // 🔹 CONFIG REACT (BROWSER)
  // ==========================
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // 🔕 Warnings acceptables pour React / UI libs
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/exhaustive-deps': 'warn',

      // 🔕 Désactive Fast Refresh strict
      'react-refresh/only-export-components': 'off',
    },
  },

  // ==========================
  // 🔹 CONFIG NODE (Vite, Tailwind, PostCSS)
  // ==========================
  {
    files: [
      'vite.config.js',
      'tailwind.config.js',
      'postcss.config.js',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
])
