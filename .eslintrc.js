module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "globals": {
    "document": false
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack/webpack.dev.config.js"
      }
    },
  },
};
