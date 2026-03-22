import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    plugins: { jsdoc },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'max-lines': ['warn', { max: 200, skipBlankLines: true }],
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: true,
          require: { FunctionDeclaration: true, MethodDefinition: true },
          contexts: ['ExportNamedDeclaration'],
        },
      ],
      'jsdoc/require-property': 'error',
      'svelte/no-at-html-tags': 'error',
      'svelte/no-unused-svelte-ignore': 'warn',
      'svelte/infinite-reactive-loop': 'off',
    },
  },
  {
    ignores: ['.svelte-kit/', 'dist/', 'build/', 'node_modules/', 'scripts/', '*.timestamp-*.mjs'],
  },
]
