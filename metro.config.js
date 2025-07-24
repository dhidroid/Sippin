const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
    extraNodeModules: {
        '@components': `${__dirname}/src/omponents`,
        '@assets': `${__dirname}/src/assets`,
        '@utils': `${__dirname}/src/utils`,
        '@hooks': `${__dirname}/src/hooks`,
        '@screens': `${__dirname}/src/screens`
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
