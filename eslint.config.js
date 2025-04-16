import globals from 'globals';
import js from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,mjs,jsx}'],
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2025
            },
            parserOptions: eslintPluginReact.configs.recommended.parserOptions,
        },
        plugins: {
            'react-hooks': eslintPluginReactHooks,
            'react-refresh': eslintPluginReactRefresh,
            'react': eslintPluginReact,
        },
    },
    {
        ignores: ['node_modules', 'dist']
    },
    {
        rules: {
            'no-unused-vars': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-unreachable': 'error',
            'no-eval': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
        }
    },
];

