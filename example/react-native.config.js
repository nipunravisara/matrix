const path = require('path');

module.exports = {
  dependencies: {
    matrix: {
      root: path.join(__dirname, '..'),
    },
  },

  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
};
