module.exports = {
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  rules: {
    semi: 'off',
    'space-before-function-paren': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-template-curly-in-string': 'off'
  },
  extends: ['standard', 'standard-react', 'standard-jsx'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: '@babel/eslint-parser'
};
