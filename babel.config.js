module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@/atoms': './src/atoms',
          '@/providers': './src/providers',
        },
      },
    ],
  ],
};

// module.exports = api => {
//   api.cache(true);

//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [['react-native-web' /* { commonjs: true } */]],
//   };
// };
