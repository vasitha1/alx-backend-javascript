module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "airbnb-base"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": [
      "error",
      "LabeledStatement",
      "WithStatement"
    ]
  }
};
