"use strict";

/**
 * This is an Angular specific ESLint configuration.
 */

module.exports = {
  env: {
    browser: true
  },
  overrides: [
    {
      files: [
        "*.ts"
      ],
      extends: [
        "@infokin/eslint-config-typescript",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ]
      }
    },
    {
      files: [
        "*.html"
      ],
      extends: [
        "plugin:@angular-eslint/template/recommended"
      ],
      rules: {
        "@angular-eslint/template/no-any": "error"
      }
    }
  ]
};
