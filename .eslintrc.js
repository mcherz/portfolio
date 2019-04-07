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
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-unused-vars": [
      "error", {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "varsIgnorePattern": "React",
      }
    ],
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
      "never"
    ],
    "curly" : [
      "error",
      "multi-line",
      "consistent"
    ],
    "no-global-assign" : [
      "error"
    ],
    "brace-style" : [
      "warn",
      "1tbs",
      { "allowSingleLine": true }
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
    "eol-last" : [
      "error", "always"
    ],
    "no-multiple-empty-lines" : [
      "error", {
        "max": 2,
        "maxEOF": 1
      }
    ],
    "no-trailing-spaces": "error",
    "max-len": [
      "error",
      {
        "code": 90,
        "comments": 90,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": false,
        "ignoreTemplateLiterals": false,
        "ignoreRegExpLiterals": true,
        "ignorePattern": "^import"
      }
    ],
    "react/prop-types" : [  1,
      {
        skipUndeclared: true
      }],
  },
  "globals" : {
    "require": true,
    "module": true,
    "$": true,
    "global": true,
    "setImmediate": true,
    "__dirname": true,
    "process": true,
  }
}
