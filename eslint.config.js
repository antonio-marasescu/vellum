// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
const storybook = require('eslint-plugin-storybook');

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'vlm',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'vlm',
          style: 'kebab-case'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false
        }
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['classnames', 'clsx', 'class-variance-authority'],
              message: 'Use the local cx() helper from lib/utils/class-names.ts instead.'
            },
            {
              group: ['@mui/*', 'react-*', 'antd', 'bootstrap', '@chakra-ui/*', 'semantic-ui-*'],
              message: 'Third-party UI libraries are not allowed. Build components locally.'
            },
            {
              group: ['!@angular/*', '!@angular/cdk/*', '!rxjs*', '!tslib'],
              message:
                'Only @angular/*, @angular/cdk/*, rxjs, and tslib are allowed as external dependencies.'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {
      '@angular-eslint/template/prefer-control-flow': 'error',
      '@angular-eslint/template/no-inline-styles': 'error'
    }
  },
  {
    files: ['scripts/**/*.mjs', '*.config.js', '*.config.mjs'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly'
      }
    }
  },
  ...storybook.configs['flat/recommended']
]);
