const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

module.exports = withPlugins(
  [
    [
      withTM,
      {
        transpileModules: [
          'styled-components',
          'styled-components/native',
          'styled-components/primitives',
          'react-primitives',
        ],
      },
    ],
  ],
  {
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        'react-native$': 'react-native-web',
      };

      return config;
    },
  },
);
