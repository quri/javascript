# eslint-config-quri

This package provides Quri's .eslintrc as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-quri

Our default export contains all of our ESLint rules, including EcmaScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-quri eslint-plugin-import  eslint-plugin-react eslint-plugin-babel eslint`
2. add `"extends": "quri"` to your .eslintrc

### eslint-config-quri/base

This entry point is deprecated. See [eslint-config-quri-base](https://npmjs.com/eslint-config-quri-base).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
