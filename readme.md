# eslint-config-significa

This package provides Significa's `.eslintrc` extensible shared config.

## Install

```sh
yarn add eslint babel-eslint prettier @significa/eslint-config-significa --dev
```

## Usage

Create a new file in the root of your project with name `.eslintrc`, then extend the eslint config already installed.

```json
{
  "extends": "@significa/significa"
}
```

## IDE Setup

Install [Prettier](https://prettier.io/) and [ESLint](https://eslint.org) packages on your IDE. Set up Prettier to use Eslint's config `.eslintrc`. We recommend checking the "Format on save" option on Prettier's package.

#### Atom

* Install [linter-eslint](https://atom.io/packages/linter-eslint)
* Install [prettier-atom](https://atom.io/packages/prettier-atom)
* Turn on "ESLint Integration" and "Format Files on Save" on `prettier-atom` Settings

#### VSCode

* Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* Install [Prettier](https://github.com/prettier/prettier-vscode)
* Edit your user preferences:

```json
  "prettier.eslintIntegration": true,
  "[javascript]": {
    "editor.formatOnSave": true
  }
```

## Overwriting rules

If you need to overwrite rules both in eslint or prettier, edit `.eslintrc` file.

#### Example

```json
{
  "extends": "@significa/significa",
  "rules": {
    "semi": ["error", "always"],
    "no-use-before-define": 0,
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": true
      }
    ]
  }
}
```
