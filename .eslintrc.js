module.exports = {
  rules: {
    semi: 'off',
    'space-before-function-paren': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-template-curly-in-string': 'off'
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: ['react'],
  parser: 'babel-eslint'
};
