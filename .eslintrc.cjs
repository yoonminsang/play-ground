const path = require('path');

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:storybook/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks', '@emotion', 'jest'],
  settings: {
    react: { version: 'detect' },
    jest: {
      version: 29,
    },
  },
  rules: {
    'prettier/prettier': 'error',

    'jsx-a11y/label-has-associated-control': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',

    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-else-return': 'off',
    'no-new': 'off',
    'no-alert': 'off',
    'no-continue': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',

    'jest/no-export': 'off',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-shadow': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unsafe-argument': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.spec.ts?(x)', '**/*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['packages/client-setting/**/*.ts?(x)', 'packages/client-setting/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-setting/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/client-tetris/**/*.ts?(x)', 'packages/client-tetris/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-tetris/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/client-todo-list/**/*.ts?(x)', 'packages/client-todo-list/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/client-todo-list/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-components/**/*.ts?(x)', 'packages/common-components/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-components/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-const/**/*.ts?(x)', 'packages/common-const/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-const/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-components/**/*.ts?(x)', 'packages/common-components/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-components/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-const/**/*.ts?(x)', 'packages/common-const/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-const/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-hooks/**/*.ts?(x)', 'packages/common-hooks/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-hooks/tsconfig.json`),
          },
        },
      },
    },
    // {
    //   files: ['packages/common-lib/**/*.ts?(x)', 'packages/common-lib/**/*.js?(x)'],
    //   settings: {
    //     'import/resolver': {
    //       typescript: {
    //         project: path.resolve(`${__dirname}/packages/common-lib/tsconfig.json`),
    //       },
    //     },
    //   },
    // },
    {
      files: ['packages/common-styles/**/*.ts?(x)', 'packages/common-styles/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-styles/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-types/**/*.ts?(x)', 'packages/common-types/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-types/tsconfig.json`),
          },
        },
      },
    },
    {
      files: ['packages/common-utils/**/*.ts?(x)', 'packages/common-utils/**/*.js?(x)'],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(`${__dirname}/packages/common-utils/tsconfig.json`),
          },
        },
      },
    },
  ],
};
