module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
  ],
  "env": {
    "browser": true
  },
  "globals": {
    "document": false
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack/webpack.dev.config.js"
      }
    },
  },
};
