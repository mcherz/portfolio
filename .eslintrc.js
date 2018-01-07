module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest/globals": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true,
          "arrowFunctions":true,
          "classes":true
      },
      "sourceType": "module"
  },
  "plugins": [
      "babel",
      "react",
      "jest"
  ],
  "rules": {
      "react/jsx-uses-vars": [2],
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "double"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": [
        "warn"
      ],
      "curly" : [
        "error",
        "all"
      ],
      "no-global-assign" : [
        "error"
      ],
      "brace-style" : [
        "warn"
      ],
      "arrow-spacing" : [
        "warn"
      ],
      "no-var" : [
        "warn"
      ],
      "prefer-template" : [
        "warn"
      ],
      "no-console" : [
        "error",
        {
          "allow": ["warn", "error"]
        }
      ],
      "react/prop-types" : [  1,
        {
          skipUndeclared: true
        }]
  },
  "globals" : {
    "require": true,
    "module": true,
    "$": true,
    "React": true,
    "Routes": true,
    "__dirname": true
  }
};
