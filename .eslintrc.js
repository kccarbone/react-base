module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  env: {
    'browser': true,
    'jest': true
  },
  rules: {
    'linebreak-style': 0,
    'arrow-body-style': 0,
    'no-unused-vars': 1,
    'max-len': [1, 120, 2],
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'brace-style': [2, 'stroustrup'],
    'eol-last': 0,
    'padded-blocks': 0,
    'no-unreachable': 1,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0
  }
};