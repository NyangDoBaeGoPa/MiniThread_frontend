module.exports = {
  root: true,
  extends: ['prettier'],
  plugins: ['unused-imports'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/ignore': ['react-native'],
  },
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/no-default-export': 'error',
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^@', '^glob:'] }],
  }
};
