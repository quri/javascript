module.exports = {
  "extends": [
    "eslint-config-quri-base",
    "eslint-config-quri-base/rules/strict",
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
