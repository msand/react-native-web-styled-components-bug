const withTM = require('next-transpile-modules');

module.exports = withTM({
  transpileModules: ['styled-components/native'],
  webpack: config => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    return config;
  },
});
