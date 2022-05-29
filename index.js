module.exports = {
  env: {
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['prettier', 'import', 'jest'],
  extends: ['eslint:recommended', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'no-console': 'off',
    'max-lines-per-function': ['error', 200],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 160,
      },
    ],
    'import/order': 'error',
    'import/extensions': ['error', 'ignorePackages']
  },
  settings: {
    jest: {
      version: 'detect',
    },
  },
};
