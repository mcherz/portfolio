module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/html_template.js":
/*!*********************************!*\
  !*** ./server/html_template.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar production = \"development\" === \"production\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (html, wsPort) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"html\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"head\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Matt Herz\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n    rel: \"stylesheet\",\n    type: \"text/css\",\n    href: \"/styles.css\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1\"\n  }), !production && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n    name: \"ws_port\",\n    content: wsPort\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"app\"\n  }, html), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: \"/bundle.js\"\n  }), !production && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"script\", {\n    src: \"/ws_client.js\"\n  })));\n});\n\n//# sourceURL=webpack://boilerplate/./server/html_template.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _server_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server_core */ \"./server/server_core.js\");\n\nvar port = process.env.PORT || 9090;\nvar server = Object(_server_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(port);\nserver.listen(port, function () {\n  console.log(\"listening on port \".concat(port, \"...\")); //eslint-disable-line\n});\n\n//# sourceURL=webpack://boilerplate/./server/server.js?");

/***/ }),

/***/ "./server/server_core.js":
/*!*******************************!*\
  !*** ./server/server_core.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _server_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server_dev */ \"./server/server_dev.js\");\n/* harmony import */ var _html_template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html_template */ \"./server/html_template.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (port) {\n  var production = \"development\" === \"production\";\n  var components = {\n    root: __webpack_require__(/*! components/portfolio_redux_root.js */ \"./src/components/portfolio_redux_root.js\")[\"default\"]\n  };\n  var app = express__WEBPACK_IMPORTED_MODULE_3___default()();\n  app.use(express__WEBPACK_IMPORTED_MODULE_3___default.a[\"static\"](\"dist\"));\n  app.get(\"/\", function (req, res) {\n    react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToNodeStream(Object(_html_template__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components.root), port)).pipe(res);\n  });\n  return production ? app : Object(_server_dev__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(components, http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(app), port);\n});\n\n//# sourceURL=webpack://boilerplate/./server/server_core.js?");

/***/ }),

/***/ "./server/server_dev.js":
/*!******************************!*\
  !*** ./server/server_dev.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chokidar */ \"chokidar\");\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chokidar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webpack.dev */ \"./webpack.dev.js\");\n/* harmony import */ var _webpack_dev__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (components, server, port) {\n  webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_dev__WEBPACK_IMPORTED_MODULE_5___default.a).run();\n  var wss = new ws__WEBPACK_IMPORTED_MODULE_0___default.a.Server({\n    server: server\n  });\n  console.log(\"dev socket started on port\", port, \"...\"); //eslint-disable-line\n\n  wss.on(\"connection\", function (ws) {\n    var compileId = 0;\n    ws.send(\"development server connected\");\n    var watcher = chokidar__WEBPACK_IMPORTED_MODULE_1___default.a.watch(\"src/\", {\n      ignored: /(^|[/\\\\])\\../,\n      // ignore dotfiles\n      persistent: true\n    });\n    watcher.on(\"change\", function (filePath) {\n      ws.send(\"\".concat(filePath, \" changed; recompiling...\"));\n      compileId++;\n      var currentCompileId = compileId;\n      webpack__WEBPACK_IMPORTED_MODULE_4___default()(_webpack_dev__WEBPACK_IMPORTED_MODULE_5___default.a).run(function (err, stats) {\n        if (err || stats.hasErrors()) {\n          ws.send(\"compiler errors :-(\");\n          ws.send(err || stats.toJson().errors[0]);\n          console.error(err || stats.toJson().errors[0]);\n        } else if (currentCompileId === compileId) {\n          var file = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), \"dist/root.js\"), \"utf8\");\n          components.root = eval(file)[\"default\"]; // mutates the component served out of server_core\n\n          ws.send(\"reload\");\n        }\n      });\n    });\n  });\n  process.on(\"SIGINT\", function () {\n    wss.clients.forEach(function (client) {\n      client.send(\"dev server closed; bye-bye friend!\");\n    });\n    server.close();\n    process.exit(0);\n  });\n  process.on(\"SIGTERM\", function () {\n    wss.clients.forEach(function (client) {\n      client.send(\"dev server tipped over ☠️; RIP sweet server we will miss you\");\n    });\n    server.close();\n    process.exit(0);\n  });\n  return server;\n});\n\n//# sourceURL=webpack://boilerplate/./server/server_dev.js?");

/***/ }),

/***/ "./src/actions/response_actions.js":
/*!*****************************************!*\
  !*** ./src/actions/response_actions.js ***!
  \*****************************************/
/*! exports provided: ADD_RESPONSE, addResponse, CLEAR_RESPONSES, clearResponses, SET_BUTTON_ACTIVE, setButtonActive, INCREMENT_RESPONSE_COUNT, incrementResponseCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_RESPONSE\", function() { return ADD_RESPONSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addResponse\", function() { return addResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_RESPONSES\", function() { return CLEAR_RESPONSES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearResponses\", function() { return clearResponses; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_BUTTON_ACTIVE\", function() { return SET_BUTTON_ACTIVE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setButtonActive\", function() { return setButtonActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INCREMENT_RESPONSE_COUNT\", function() { return INCREMENT_RESPONSE_COUNT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"incrementResponseCount\", function() { return incrementResponseCount; });\nvar ADD_RESPONSE = \"ADD_RESPONSE\";\nvar addResponse = function addResponse(party, text) {\n  return {\n    type: ADD_RESPONSE,\n    payload: {\n      party: party,\n      text: text\n    }\n  };\n};\nvar CLEAR_RESPONSES = \"CLEAR_RESPONSES\";\nvar clearResponses = function clearResponses() {\n  return {\n    type: CLEAR_RESPONSES\n  };\n};\nvar SET_BUTTON_ACTIVE = \"SET_BUTTON_ACTIVE\";\nvar setButtonActive = function setButtonActive(active) {\n  return {\n    type: SET_BUTTON_ACTIVE,\n    payload: active\n  };\n};\nvar INCREMENT_RESPONSE_COUNT = \"INCREMENT_RESPONSE_COUNT\";\nvar incrementResponseCount = function incrementResponseCount() {\n  return {\n    type: INCREMENT_RESPONSE_COUNT\n  };\n};\n\n//# sourceURL=webpack://boilerplate/./src/actions/response_actions.js?");

/***/ }),

/***/ "./src/actions/speech_actions.js":
/*!***************************************!*\
  !*** ./src/actions/speech_actions.js ***!
  \***************************************/
/*! exports provided: SET_SPEECH_SYNTH_ACTIVE, setSpeechSynthActive, SET_SPEECH_REC_ACTIVE, setSpeechRecActive, SET_MODAL_OPEN, setModalOpen, SET_RECOGNIZER, setRecognizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SPEECH_SYNTH_ACTIVE\", function() { return SET_SPEECH_SYNTH_ACTIVE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSpeechSynthActive\", function() { return setSpeechSynthActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_SPEECH_REC_ACTIVE\", function() { return SET_SPEECH_REC_ACTIVE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSpeechRecActive\", function() { return setSpeechRecActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_MODAL_OPEN\", function() { return SET_MODAL_OPEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setModalOpen\", function() { return setModalOpen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_RECOGNIZER\", function() { return SET_RECOGNIZER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setRecognizer\", function() { return setRecognizer; });\nvar SET_SPEECH_SYNTH_ACTIVE = \"SET_SPEECH_SYNTH_ACTIVE\";\nvar setSpeechSynthActive = function setSpeechSynthActive(speechSynthActive) {\n  return {\n    type: SET_SPEECH_SYNTH_ACTIVE,\n    payload: speechSynthActive\n  };\n};\nvar SET_SPEECH_REC_ACTIVE = \"SET_SPEECH_REC_ACTIVE\";\nvar setSpeechRecActive = function setSpeechRecActive(speechRecActive) {\n  return {\n    type: SET_SPEECH_REC_ACTIVE,\n    payload: speechRecActive\n  };\n};\nvar SET_MODAL_OPEN = \"SET_MODAL_OPEN\";\nvar setModalOpen = function setModalOpen(open) {\n  return {\n    type: SET_MODAL_OPEN,\n    payload: open\n  };\n};\nvar SET_RECOGNIZER = \"SET_RECOGNIZER\";\nvar setRecognizer = function setRecognizer(recognizer) {\n  return {\n    type: SET_RECOGNIZER,\n    payload: recognizer\n  };\n};\n\n//# sourceURL=webpack://boilerplate/./src/actions/speech_actions.js?");

/***/ }),

/***/ "./src/actions/start_listening.js":
/*!****************************************!*\
  !*** ./src/actions/start_listening.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var actions_submit_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/submit_text */ \"./src/actions/submit_text.js\");\n\n\nvar startListening = function startListening() {\n  return function (dispatch) {\n    var rec = new window.webkitSpeechRecognition();\n    rec.lang = \"en-US\";\n    rec.interimResults = false;\n    rec.maxAlternatives = 5;\n    rec.start();\n    var loopListen = true;\n\n    rec.onresult = function (event) {\n      dispatch(Object(actions_submit_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event.results[0][0].transcript));\n      loopListen = false;\n    };\n\n    rec.onend = function () {\n      if (loopListen) {\n        rec.start();\n      }\n    };\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startListening);\n\n//# sourceURL=webpack://boilerplate/./src/actions/start_listening.js?");

/***/ }),

/***/ "./src/actions/start_speech_recognition.js":
/*!*************************************************!*\
  !*** ./src/actions/start_speech_recognition.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/constants */ \"./src/helpers/constants.js\");\n/* harmony import */ var actions_response_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/response_actions */ \"./src/actions/response_actions.js\");\n/* harmony import */ var actions_speech_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/speech_actions */ \"./src/actions/speech_actions.js\");\n/* harmony import */ var actions_start_listening__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/start_listening */ \"./src/actions/start_listening.js\");\n\n\n\n\n\nvar startSpeechRecognition = function startSpeechRecognition() {\n  return function (dispatch) {\n    dispatch(Object(actions_speech_actions__WEBPACK_IMPORTED_MODULE_2__[\"setSpeechRecActive\"])(true));\n    dispatch(Object(actions_speech_actions__WEBPACK_IMPORTED_MODULE_2__[\"setSpeechSynthActive\"])(true));\n    dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_1__[\"clearResponses\"])());\n    dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_1__[\"addResponse\"])(helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].APP_RESPONSE, \"Talk to me, goose! No, really, just start talking.\"));\n    var utterThis = new SpeechSynthesisUtterance(\"Talk to me, goose! No, really, just start talking.\");\n\n    utterThis.onend = function () {\n      dispatch(Object(actions_start_listening__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    };\n\n    speechSynthesis.speak(utterThis);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startSpeechRecognition);\n\n//# sourceURL=webpack://boilerplate/./src/actions/start_speech_recognition.js?");

/***/ }),

/***/ "./src/actions/submit_text.js":
/*!************************************!*\
  !*** ./src/actions/submit_text.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/constants */ \"./src/helpers/constants.js\");\n/* harmony import */ var helpers_get_app_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/get_app_response */ \"./src/helpers/get_app_response.js\");\n/* harmony import */ var actions_response_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/response_actions */ \"./src/actions/response_actions.js\");\n/* harmony import */ var actions_start_listening__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/start_listening */ \"./src/actions/start_listening.js\");\n\n\n\n\n\nvar submitText = function submitText(text) {\n  return function (dispatch, getState) {\n    var state = getState();\n\n    if (state.response.buttonActive) {\n      dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"setButtonActive\"])(false));\n      dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"addResponse\"])(helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].USER_QUERY, text));\n      setTimeout(function () {\n        var response = Object(helpers_get_app_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(text, state, dispatch);\n        dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"addResponse\"])(helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].APP_RESPONSE, response.jsx));\n        dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"incrementResponseCount\"])());\n\n        if (state.speech.speechSynthActive) {\n          var utterThis = new SpeechSynthesisUtterance(response.plainText);\n\n          if (state.speech.speechRecActive) {\n            utterThis.onend = function () {\n              dispatch(Object(actions_start_listening__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n            };\n          }\n\n          speechSynthesis.speak(utterThis);\n        }\n\n        dispatch(Object(actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"setButtonActive\"])(true));\n      }, helpers_constants__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CONVERSATION_LAG);\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (submitText);\n\n//# sourceURL=webpack://boilerplate/./src/actions/submit_text.js?");

/***/ }),

/***/ "./src/components/conversation.js":
/*!****************************************!*\
  !*** ./src/components/conversation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/constants */ \"./src/helpers/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar Conversation =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Conversation, _React$Component);\n\n  function Conversation() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Conversation);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Conversation)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"renderResponses\", function () {\n      var responses = [];\n\n      for (var r = 0; r < _this.props.responseArray.length; r++) {\n        var response = _this.props.responseArray[r];\n        responses.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: r,\n          className: response.party === helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].APP_RESPONSE ? \"response\" : \"query\"\n        }, response.text));\n      }\n\n      return responses;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"conversation\"\n      }, _this.renderResponses());\n    });\n\n    return _this;\n  }\n\n  return Conversation;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Conversation);\n\n//# sourceURL=webpack://boilerplate/./src/components/conversation.js?");

/***/ }),

/***/ "./src/components/portfolio.js":
/*!*************************************!*\
  !*** ./src/components/portfolio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ \"bowser\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_conversation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/conversation */ \"./src/components/conversation.js\");\n/* harmony import */ var icons_volume__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/volume */ \"./src/icons/volume.js\");\n/* harmony import */ var actions_speech_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/speech_actions */ \"./src/actions/speech_actions.js\");\n/* harmony import */ var actions_submit_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/submit_text */ \"./src/actions/submit_text.js\");\n/* harmony import */ var actions_start_speech_recognition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/start_speech_recognition */ \"./src/actions/start_speech_recognition.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\nvar InputSubtitle = function InputSubtitle(props) {\n  if (typeof window === \"undefined\") {\n    //node\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"placeholder\",\n      className: \"input-subtitle\"\n    });\n  }\n\n  if (props.browser.name === \"Chrome\" && props.browser.osname !== \"ios\") {\n    if (props.speechRecActive) {\n      return null;\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"awesome\",\n        className: \"input-subtitle\"\n      }, \"Want to try this\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        onClick: function onClick() {\n          props.setModalOpen(true);\n        }\n      }, \" the awesome way\"), \"?\");\n    }\n  } else if (!props.browser.x) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"chrome\",\n      className: \"input-subtitle\"\n    }, \"Protip: the coolest part only works in \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"https://www.google.com/chrome/browser/\",\n      target: \"_blank\",\n      rel: \"noreferrer noopener\"\n    }, \"Chrome\"), \".\");\n  } else {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"placeholder\",\n      className: \"input-subtitle\"\n    });\n  }\n};\n\nvar SoundControl = function SoundControl(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"synth-control\",\n    onClick: function onClick() {\n      props.setSpeechSynthActive(!props.speechSynthActive);\n    }\n  }, props.speechSynthActive ? icons_volume__WEBPACK_IMPORTED_MODULE_4__[\"VolumeX\"] : icons_volume__WEBPACK_IMPORTED_MODULE_4__[\"Volume2\"]);\n};\n\nvar Portfolio =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Portfolio, _React$Component);\n\n  function Portfolio(props) {\n    var _this;\n\n    _classCallCheck(this, Portfolio);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"componentDidMount\", function () {\n      if (_this.typeEntry) {\n        _this.typeEntry.focus();\n      }\n\n      _this.setState({\n        browser: bowser__WEBPACK_IMPORTED_MODULE_2___default.a\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleButtonClick\", function () {\n      if (_this.typeEntry.value.trim().length > 0) {\n        _this.props.submitText(_this.typeEntry.value);\n\n        _this.typeEntry.value = \"\";\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleInputKeydown\", function (e) {\n      if (e.keyCode === 13) {\n        // press enter\n        e.preventDefault();\n\n        _this.handleButtonClick();\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleTheAwesomeWay\", function () {\n      _this.props.setModalOpen(false);\n\n      navigator.mediaDevices.getUserMedia({\n        audio: true,\n        video: false\n      }).then(function (stream) {\n        var track = stream.getTracks()[0]; // if only one media track\n\n        track.stop();\n\n        _this.props.startSpeechRecognition();\n      })[\"catch\"](function () {//oh noes\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"renderTakeover\", function () {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"takeover\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"modal\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"modal-text\"\n      }, \"Spoiler alert: the awesome way is voice recognition.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"modal-text\"\n      }, \"In just a sec, the browser will ask you to allow microphone access (because otherwise there's nothing to recognize.)\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"modal-buttons\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"modal-confirm\",\n        onClick: _this.handleTheAwesomeWay\n      }, \"Let's do it!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"modal-cancel\",\n        onClick: function onClick() {\n          _this.props.setModalOpen(false);\n        }\n      }, \"Creepy, no.\"))));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"render\", function () {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"portfolio\",\n        style: {\n          height: _this.props.pageHeight\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_conversation__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        responseArray: _this.props.responseArray\n      }), !_this.props.speechRecActive && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"entry\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        ref: function ref(input) {\n          _this.typeEntry = input;\n        },\n        className: \"type-entry\",\n        type: \"text\",\n        onKeyDown: _this.handleInputKeydown\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"type-commit\",\n        onClick: _this.handleButtonClick\n      }, \"Say it\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputSubtitle, _extends({}, _this.props, {\n        browser: _this.state.browser\n      }))), _this.props.speechRecActive ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SoundControl, _this.props), _this.props.modalOpen ? _this.renderTakeover() : null);\n    });\n\n    _this.state = {\n      browser: {}\n    };\n    return _this;\n  }\n\n  return Portfolio;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    modalOpen: state.speech.modalOpen,\n    responseArray: state.response.responseArray,\n    speechRecActive: state.speech.speechRecActive,\n    speechSynthActive: state.speech.speechSynthActive\n  };\n};\n\nvar mapDispatchToProps = {\n  setModalOpen: actions_speech_actions__WEBPACK_IMPORTED_MODULE_5__[\"setModalOpen\"],\n  setSpeechRecActive: actions_speech_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSpeechRecActive\"],\n  setSpeechSynthActive: actions_speech_actions__WEBPACK_IMPORTED_MODULE_5__[\"setSpeechSynthActive\"],\n  startSpeechRecognition: actions_start_speech_recognition__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  submitText: actions_submit_text__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Portfolio));\n\n//# sourceURL=webpack://boilerplate/./src/components/portfolio.js?");

/***/ }),

/***/ "./src/components/portfolio_redux_root.js":
/*!************************************************!*\
  !*** ./src/components/portfolio_redux_root.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reducers_root_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers/root_reducers */ \"./src/reducers/root_reducers.js\");\n/* harmony import */ var components_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/portfolio */ \"./src/components/portfolio.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar store;\nvar composeEnhancers;\n\nvar PortfolioReduxRoot =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PortfolioReduxRoot, _React$Component);\n\n  function PortfolioReduxRoot(props) {\n    var _this;\n\n    _classCallCheck(this, PortfolioReduxRoot);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PortfolioReduxRoot).call(this, props)); // setting dev tools up per question - until we redo the job_batch/job flow in react\n\n    composeEnhancers = (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({\n      name: \"portfolio\"\n    }) : redux__WEBPACK_IMPORTED_MODULE_2__[\"compose\"];\n    var enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a));\n    var initialState = props;\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"createStore\"])(reducers_root_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], initialState, enhancer);\n    return _this;\n  }\n\n  _createClass(PortfolioReduxRoot, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n        store: store\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_portfolio__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n    }\n  }]);\n\n  return PortfolioReduxRoot;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PortfolioReduxRoot);\n\n//# sourceURL=webpack://boilerplate/./src/components/portfolio_redux_root.js?");

/***/ }),

/***/ "./src/helpers/constants.js":
/*!**********************************!*\
  !*** ./src/helpers/constants.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar constants = {\n  APP_RESPONSE: \"app\",\n  USER_QUERY: \"query\",\n  MAX_CONVERSATION: 6,\n  CONVERSATION_LAG: 400,\n  //stolen from halt and catch fire :-)\n  LISTENING_TIMEOUT: 14000 // speechrec gets screwy after 15s\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (constants);\n\n//# sourceURL=webpack://boilerplate/./src/helpers/constants.js?");

/***/ }),

/***/ "./src/helpers/get_app_response.js":
/*!*****************************************!*\
  !*** ./src/helpers/get_app_response.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! elizabot */ \"elizabot\");\n/* harmony import */ var elizabot__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elizabot__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ \"bowser\");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var actions_speech_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/speech_actions */ \"./src/actions/speech_actions.js\");\n/* eslint max-len: */\n// --> OFF\n //eslint-disable-line\n\n\n\n\n\nvar getAppResponse = function getAppResponse(inputString, state, dispatch) {\n  var magic = {\n    resume: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I should probably update my resume. For now, here's my \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.linkedin.com/in/matt-herz\",\n        target: \"_blank\",\n        rel: \"noreferrer noopener\"\n      }, \"LinkedIn Profile\"), \".\"),\n      plainText: \"I should probably update my resume. For now, here's my LinkedIn Profile.\"\n    },\n    linkedin: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"How about a link to my \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.linkedin.com/in/matt-herz\",\n        target: \"_blank\",\n        rel: \"noreferrer noopener\"\n      }, \"LinkedIn Profile\"), \"?\"),\n      plainText: \"How about a link to my LinkedIn Profile?\"\n    },\n    twitter: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"So much for professionalism: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://www.twitter.com/mattiherz\",\n        target: \"_blank\",\n        rel: \"noreferrer noopener\"\n      }, \"@mattiherz\"), \".\"),\n      plainText: \"So much for professionalism: at matty herz.\"\n    },\n    email: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I'd throw in a mailto: link, but those are terrible. Copy-paste mcherz@gmail.com and have at it.\"),\n      plainText: \"It's m c h e r z at g mail dot com. Good luck copy pasting that.\"\n    },\n    phone: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I'm honestly a little gunshy about putting my cell phone number where internet weirdos can find it. Try email?\"),\n      plainText: \"How does that song go? Eight six seven five three oh nine? No, wait, that's Jenny, not me.\"\n    },\n    alexa: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Alexa, order six tons of chipped beef. Alexa, confirm purchase.\"),\n      plainText: \"Alexa, order six tons of chipped beef. Alexa, confirm purchase.\"\n    },\n    cortana: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Cortana, Cortana, Cortana. I feel like I should recognize that name.\"),\n      plainText: \"Cortana, Cortana, Cortana. I feel like I should recognize that name.\"\n    },\n    google: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Ok, Google. Play Drive by the Cars.\"),\n      plainText: \"Ok, Google. Play Drive by the Cars.\"\n    },\n    siri: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Hey, Siri. How many developer years has Apple spent on you to date?\"),\n      plainText: \"Hey, Siri. How many developer years has Apple spent on you to date?\"\n    },\n    eliza: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Come now. If you could plug an open source chatbot in for free, you wouldn't write one either.\"),\n      plainText: \"Come now. If you could plug an open source chatbot in for free, you wouldn't write one either.\"\n    },\n    open_source: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Sure, take a look. It's at \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"https://github.com/mcherz/portfolio\",\n        target: \"_blank\",\n        rel: \"noreferrer noopener\"\n      }, \"https://github.com/mcherz/portfolio\"), \".\"),\n      plainText: \"Sure, take a look. It's at github dot com slash m c h e r z slash portfolio.\"\n    },\n    use_speech: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"It turns out there's an even more fun \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        onClick: function onClick() {\n          dispatch(Object(actions_speech_actions__WEBPACK_IMPORTED_MODULE_3__[\"setModalOpen\"])(true));\n        }\n      }, \"way to do this\"), \"...\"),\n      plainText: \"It turns out there's an even more fun way to do this...\"\n    },\n    prompt_magic: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)\"),\n      plainText: \"If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)\"\n    },\n    easter_eggs: {\n      jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"I can't just TELL you what they all are; that wouldn't be fun. (But the 'Alexa' one is probably my favorite.)\"),\n      plainText: \"I can't just TELL you what they all are; that wouldn't be fun. (But the 'Alexa' one is probably my favorite).\"\n    }\n  };\n  var promptSpeech = state.response.responseCount === 2 && !state.speech.speechRecActive && bowser__WEBPACK_IMPORTED_MODULE_2___default.a.name === \"Chrome\" && bowser__WEBPACK_IMPORTED_MODULE_2___default.a.osname !== \"ios\";\n  var lowString = inputString.toLowerCase();\n\n  switch (true) {\n    case promptSpeech:\n      return magic.use_speech;\n\n    case state.response.responseCount === 12:\n      return magic.prompt_magic;\n\n    case lowString.match(\"resume\") !== null:\n      return magic.resume;\n\n    case lowString.match(\"linkedin\") !== null:\n      return magic.linkedin;\n\n    case lowString.match(\"twitter\") !== null:\n      return magic.twitter;\n\n    case lowString.match(\"alexa\") !== null:\n      return magic.alexa;\n\n    case lowString.match(\"cortana\") !== null:\n      return magic.cortana;\n\n    case lowString.match(\"google\") !== null:\n      return magic.google;\n\n    case lowString.match(\"siri\") !== null:\n      return magic.siri;\n\n    case lowString.match(\"eliza\") !== null:\n      return magic.eliza;\n\n    case lowString.match(\"open source\") !== null:\n    case lowString.match(\"source code\") !== null:\n      return magic.open_source;\n\n    case lowString.match(\"email\") !== null:\n    case lowString.match(\"contact\") !== null:\n      return magic.email;\n\n    case lowString.match(\"phone\") !== null:\n      return magic.phone;\n\n    case lowString.match(\"easter egg\") !== null:\n      return magic.easter_eggs;\n\n    default:\n      {\n        var eliza = new elizabot__WEBPACK_IMPORTED_MODULE_1___default.a();\n        var returnString = eliza.transform(inputString);\n        return {\n          jsx: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, returnString),\n          plainText: returnString\n        };\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAppResponse);\n\n//# sourceURL=webpack://boilerplate/./src/helpers/get_app_response.js?");

/***/ }),

/***/ "./src/icons/volume.js":
/*!*****************************!*\
  !*** ./src/icons/volume.js ***!
  \*****************************/
/*! exports provided: Volume2, VolumeX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Volume2\", function() { return Volume2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VolumeX\", function() { return VolumeX; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n //eslint-disable-line\n\nvar Volume2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n  width: \"40\",\n  height: \"40\",\n  viewBox: \"0 0 24 24\",\n  fill: \"none\",\n  strokeWidth: \"1\",\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  className: \"feather feather-volume-2\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polygon\", {\n  points: \"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n  d: \"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"\n}));\nvar VolumeX = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n  width: \"40\",\n  height: \"40\",\n  viewBox: \"0 0 24 24\",\n  fill: \"none\",\n  strokeWidth: \"1\",\n  strokeLinecap: \"round\",\n  strokeLinejoin: \"round\",\n  className: \"feather feather-volume-x\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polygon\", {\n  points: \"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n  x1: \"23\",\n  y1: \"9\",\n  x2: \"17\",\n  y2: \"15\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n  x1: \"17\",\n  y1: \"9\",\n  x2: \"23\",\n  y2: \"15\"\n}));\n\n//# sourceURL=webpack://boilerplate/./src/icons/volume.js?");

/***/ }),

/***/ "./src/reducers/response_reducers.js":
/*!*******************************************!*\
  !*** ./src/reducers/response_reducers.js ***!
  \*******************************************/
/*! exports provided: responseInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"responseInitialState\", function() { return responseInitialState; });\n/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-prop-immutable */ \"dot-prop-immutable\");\n/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/constants */ \"./src/helpers/constants.js\");\n/* harmony import */ var actions_response_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions/response_actions */ \"./src/actions/response_actions.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n // import actions\n\n // define initial state of model\n\nvar responseInitialState = {\n  buttonActive: true,\n  responseArray: [{\n    party: helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].APP_RESPONSE,\n    text: \"Hi there. Let's chat.\"\n  }],\n  responseCount: 0\n};\n\nfunction response() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : responseInitialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"ADD_RESPONSE\"]:\n      {\n        var returnArray = _toConsumableArray(state.responseArray);\n\n        returnArray.push(action.payload);\n\n        if (returnArray.length > helpers_constants__WEBPACK_IMPORTED_MODULE_1__[\"default\"].MAX_CONVERSATION) {\n          returnArray.shift();\n        }\n\n        return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"responseArray\", returnArray);\n      }\n\n    case actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"CLEAR_RESPONSES\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"responseArray\", []);\n\n    case actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"SET_BUTTON_ACTIVE\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"buttonActive\", action.payload);\n\n    case actions_response_actions__WEBPACK_IMPORTED_MODULE_2__[\"INCREMENT_RESPONSE_COUNT\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"responseCount\", state.responseCount + 1);\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (response);\n\n//# sourceURL=webpack://boilerplate/./src/reducers/response_reducers.js?");

/***/ }),

/***/ "./src/reducers/root_reducers.js":
/*!***************************************!*\
  !*** ./src/reducers/root_reducers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reducers_response_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/response_reducers */ \"./src/reducers/response_reducers.js\");\n/* harmony import */ var reducers_speech_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/speech_reducers */ \"./src/reducers/speech_reducers.js\");\n\n\n\nvar rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  response: reducers_response_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  speech: reducers_speech_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducers);\n\n//# sourceURL=webpack://boilerplate/./src/reducers/root_reducers.js?");

/***/ }),

/***/ "./src/reducers/speech_reducers.js":
/*!*****************************************!*\
  !*** ./src/reducers/speech_reducers.js ***!
  \*****************************************/
/*! exports provided: speechInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"speechInitialState\", function() { return speechInitialState; });\n/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-prop-immutable */ \"dot-prop-immutable\");\n/* harmony import */ var dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var actions_speech_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/speech_actions */ \"./src/actions/speech_actions.js\");\n // import actions\n\n // define initial state of model\n\nvar speechInitialState = {\n  speechSynthActive: false,\n  speechRecActive: false,\n  recognizer: null,\n  modalOpen: false\n};\n\nfunction speech() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : speechInitialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case actions_speech_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_SPEECH_SYNTH_ACTIVE\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"speechSynthActive\", action.payload);\n\n    case actions_speech_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_SPEECH_REC_ACTIVE\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"speechRecActive\", action.payload);\n\n    case actions_speech_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_MODAL_OPEN\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"modalOpen\", action.payload);\n\n    case actions_speech_actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_RECOGNIZER\"]:\n      return dot_prop_immutable__WEBPACK_IMPORTED_MODULE_0___default.a.set(state, \"recognizer\", action.payload);\n\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (speech);\n\n//# sourceURL=webpack://boilerplate/./src/reducers/speech_reducers.js?");

/***/ }),

/***/ "./webpack.common.js":
/*!***************************!*\
  !*** ./webpack.common.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar globImporter = __webpack_require__(/*! node-sass-glob-importer */ \"node-sass-glob-importer\");\n\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nmodule.exports = {\n  module: {\n    rules: [{\n      test: /\\.(css|scss|sass)$/,\n      use: [{\n        loader: MiniCssExtractPlugin.loader,\n        options: {\n          publicPath: \"../\"\n        }\n      }, {\n        loader: \"css-loader\"\n      }, {\n        loader: \"postcss-loader\"\n      }, {\n        loader: \"sass-loader\",\n        options: {\n          importer: globImporter()\n        }\n      }]\n    }, {\n      test: /\\.(js|jsx)$/,\n      loader: \"babel-loader\",\n      exclude: /node_modules/,\n      query: {\n        presets: [\"@babel/react\"]\n      }\n    }]\n  },\n  resolve: {\n    modules: [path.resolve(\"./src\"), path.resolve(\"./node_modules\")]\n  },\n  plugins: [new MiniCssExtractPlugin({\n    filename: \"styles.css\",\n    chunkFilename: \"styles.css\"\n  })]\n};\n\n//# sourceURL=webpack://boilerplate/./webpack.common.js?");

/***/ }),

/***/ "./webpack.dev.js":
/*!************************!*\
  !*** ./webpack.dev.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var common = __webpack_require__(/*! ./webpack.common */ \"./webpack.common.js\");\n\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nvar bundle = merge(common, {\n  mode: \"development\",\n  devtool: \"cheap-module-eval-source-map\",\n  entry: {\n    bundle: [\"./src/index.js\", \"./src/styles.js\"]\n  },\n  output: {},\n  resolve: {\n    modules: [path.resolve(\"./src\")]\n  }\n});\nvar root = merge(common, {\n  mode: \"development\",\n  externals: [nodeExternals()],\n  devtool: \"cheap-module-eval-source-map\",\n  entry: {\n    root: [\"./src/components/portfolio_redux_root.js\"]\n  },\n  output: {},\n  resolve: {\n    modules: [path.resolve(\"./src\")]\n  }\n});\nmodule.exports = [root, bundle];\n\n//# sourceURL=webpack://boilerplate/./webpack.dev.js?");

/***/ }),

/***/ "bowser":
/*!*************************!*\
  !*** external "bowser" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bowser\");\n\n//# sourceURL=webpack://boilerplate/external_%22bowser%22?");

/***/ }),

/***/ "chokidar":
/*!***************************!*\
  !*** external "chokidar" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chokidar\");\n\n//# sourceURL=webpack://boilerplate/external_%22chokidar%22?");

/***/ }),

/***/ "dot-prop-immutable":
/*!*************************************!*\
  !*** external "dot-prop-immutable" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dot-prop-immutable\");\n\n//# sourceURL=webpack://boilerplate/external_%22dot-prop-immutable%22?");

/***/ }),

/***/ "elizabot":
/*!***************************!*\
  !*** external "elizabot" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"elizabot\");\n\n//# sourceURL=webpack://boilerplate/external_%22elizabot%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack://boilerplate/external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://boilerplate/external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack://boilerplate/external_%22http%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack://boilerplate/external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "node-sass-glob-importer":
/*!******************************************!*\
  !*** external "node-sass-glob-importer" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-sass-glob-importer\");\n\n//# sourceURL=webpack://boilerplate/external_%22node-sass-glob-importer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://boilerplate/external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://boilerplate/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://boilerplate/external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack://boilerplate/external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack://boilerplate/external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack://boilerplate/external_%22redux-thunk%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack://boilerplate/external_%22webpack%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack://boilerplate/external_%22webpack-merge%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack://boilerplate/external_%22webpack-node-externals%22?");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ws\");\n\n//# sourceURL=webpack://boilerplate/external_%22ws%22?");

/***/ })

/******/ });