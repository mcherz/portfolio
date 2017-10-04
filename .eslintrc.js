module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "react/jsx-uses-vars": [2],
        "react/jsx-uses-react": "error",
        "indent": [
            "error",
            2
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
        "indent" : [
          "error",
          2
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
