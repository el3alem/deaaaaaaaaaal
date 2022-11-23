module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:eslint/recommended', 'prettier'],
  parser: 'eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['eslint', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'prettier/prettier': 2, // Means error
    'no-console': 1, // Means warning
    'no-var': 'error',
    'prefer-const': 'error'
  }
}
