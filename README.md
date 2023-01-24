# Angular ESLint Configuration

This package provides a common Angular specific ESLint configuration.

## Installation

Install the latest version of this package with:

```bash
npm install @infokin/eslint-config-angular --save-dev
```

To install a specific version use `@infokin/eslint-config-angular@<version>` instead.

To install this package directly from the `main` branch on GitHub use:

```bash
npm install git://github.com/infokin/eslint-config-angular --save-dev
```

## Usage

First, get your Angular application ready and set up ESLint. Run `ng lint`, if no linter is set up yet and follow the
instructions in the terminal. Proceed with the installation of this package, then extend from the provided configuration
in your project's ESLint configuration file like this:

```javascript
"use strict";

module.exports = {
  root: true,
  extends: [
    "@infokin/eslint-config-angular"
  ],
  overrides: [
    {
      files: [
        "*.ts"
      ],
      parserOptions: {
        project: "tsconfig.json"
      }
    }
  ]
}
```

### Customization

After extending from the provided ESLint configuration, you can add and override your project specific ESLint rules,
preferably inside the `overrides` block.

## Development

The `package.json` file provides a `lint` script. This is used to check the code style of the project's files.

## Bugs & Issues

If you're experiencing any issues or encountering any bugs, we would really appreciate it if you could report them on
the [corresponding GitHub page](https://github.com/infokin/eslint-config-angular/issues), so we can take a look and try
to resolve them. Thank you for your help in making this project better!

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2023 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
