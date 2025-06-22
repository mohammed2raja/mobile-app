const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Enable tree shaking and optimization
config.transformer.minifierConfig = {
  keep_fnames: true,
  mangle: {
    keep_fnames: true,
  },
};

// Optimize bundle size
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config; 