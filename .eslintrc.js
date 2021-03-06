module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', 'vue'],
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'no-empty': 'warn',
    'no-unused-vars': 'warn',
    semi: ['error', 'never'],
    'vue/html-indent': ['error', 2],
    'vue/padding-line-between-blocks': 'error',
    'import/newline-after-import': ['error'],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true
      }
    ]
  }
}
