const resolveAliases = require('./build/resolveAliases');

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'no-alert': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-prototype-builtins': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-use-before-define': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      }
    ],
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'none' }
    ],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'off',
    'import/no-webpack-loader-syntax': 'off',
    "import/no-unresolved": "error"
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      alias: Object.entries(resolveAliases)
    }
  },
  globals: {
    graphql: true
  },
  plugins: ['prettier', 'react'],
  parser: 'babel-eslint'
};
