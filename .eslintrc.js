module.exports = {
  root: true,
  extends: ['prettier'],
  parser: '@babel/eslint-parser', // <<<< Important
  parserOptions: {
    requireConfigFile: false, // <<<< Allows you to skip Eslint complaining that you don't have a .babelrc file
    babelOptions: {
      presets: ['@babel/preset-react'], // <<<< Important
    },
    ecmaFeatures: {
      jsx: true, // <<<< Important
    },
  },
};
