module.exports = {
  parser: 'babel-eslint',
  plugins: ['import', 'jest'],
  env: {
    node: true,
    jest: true,
    browser: true,
    es6: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2
  }
};
