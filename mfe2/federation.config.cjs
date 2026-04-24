const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: 'mfe2',

  exposes: {
    './web-component': './src/web-component.jsx',
  },

  shared: {
    // 🚨 EMPTY → React will be bundled
  },
});