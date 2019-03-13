module.exports = api => {
  api.cache(true);

  const presets = ['next/babel'];

  const plugins = [
    // https://github.com/zeit/next.js/issues/5989
    [
      'module-resolver',
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ];

  return { plugins, presets };
};
