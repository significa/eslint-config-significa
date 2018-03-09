# eslint-config-significa

This package provides Significa's `.eslintrc` extensible shared config.

## Install

```sh
yarn add @significa/eslint-config-significa --dev
```

## Usage

Create a new file in the root of your project with name `.eslintrc`, then extend the eslint config already installed.

```json
{
  "extends": "@significa/significa"
}
```

## Recomendation

For more powerfull features, set up the [Prettier](https://prettier.io/), first in your IDE and after in your project. Create again a new file in the root of your project with name `.prettierrc`. Prettier allows the auto-format feature using the same `eslint` config configuration.

```json
{
  "singleQuote": false,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "semi": false,
  "parser": "babylon",
  "printWidth": 100,
  "tabWidth": 2
}
```
