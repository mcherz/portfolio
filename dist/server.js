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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _speech_actions = __webpack_require__(2);

var constants = {
  APP_RESPONSE: "app",
  USER_QUERY: "query",

  MAX_CONVERSATION: 6,

  CONVERSATION_LAG: 400, //stolen from halt and catch fire :-)
  LISTENING_TIMEOUT: 14000 // speechrec gets screwy after 15s
};

exports.default = constants;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SET_SPEECH_SYNTH_ACTIVE = exports.SET_SPEECH_SYNTH_ACTIVE = "SET_SPEECH_SYNTH_ACTIVE";
var setSpeechSynthActive = exports.setSpeechSynthActive = function setSpeechSynthActive(speechSynthActive) {
  return {
    type: SET_SPEECH_SYNTH_ACTIVE,
    payload: speechSynthActive
  };
};

var SET_SPEECH_REC_ACTIVE = exports.SET_SPEECH_REC_ACTIVE = "SET_SPEECH_REC_ACTIVE";
var setSpeechRecActive = exports.setSpeechRecActive = function setSpeechRecActive(speechRecActive) {
  return {
    type: SET_SPEECH_REC_ACTIVE,
    payload: speechRecActive
  };
};

var SET_MODAL_OPEN = exports.SET_MODAL_OPEN = "SET_MODAL_OPEN";
var setModalOpen = exports.setModalOpen = function setModalOpen(open) {
  return {
    type: SET_MODAL_OPEN,
    payload: open
  };
};

var SET_RECOGNIZER = exports.SET_RECOGNIZER = "SET_RECOGNIZER";
var setRecognizer = exports.setRecognizer = function setRecognizer(recognizer) {
  return {
    type: SET_RECOGNIZER,
    payload: recognizer
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("elizabot");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_RESPONSE = exports.ADD_RESPONSE = "ADD_RESPONSE";
var addResponse = exports.addResponse = function addResponse(party, text) {
  return {
    type: ADD_RESPONSE,
    payload: { party: party, text: text }
  };
};

var CLEAR_RESPONSES = exports.CLEAR_RESPONSES = "CLEAR_RESPONSES";
var clearResponses = exports.clearResponses = function clearResponses() {
  return {
    type: CLEAR_RESPONSES
  };
};

var SET_BUTTON_ACTIVE = exports.SET_BUTTON_ACTIVE = "SET_BUTTON_ACTIVE";
var setButtonActive = exports.setButtonActive = function setButtonActive(active) {
  return {
    type: SET_BUTTON_ACTIVE,
    payload: active
  };
};

var INCREMENT_RESPONSE_COUNT = exports.INCREMENT_RESPONSE_COUNT = "INCREMENT_RESPONSE_COUNT";
var incrementResponseCount = exports.incrementResponseCount = function incrementResponseCount() {
  return {
    type: INCREMENT_RESPONSE_COUNT
  };
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bowser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("dot-prop-immutable");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bowser = __webpack_require__(5);

var _bowser2 = _interopRequireDefault(_bowser);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _get_app_response = __webpack_require__(25);

var _get_app_response2 = _interopRequireDefault(_get_app_response);

var _response_actions = __webpack_require__(4);

var _speech_actions = __webpack_require__(2);

var _start_listening = __webpack_require__(10);

var _start_listening2 = _interopRequireDefault(_start_listening);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var submitText = function submitText(text) {
  return function (dispatch, getState) {
    var state = getState();
    if (state.response.buttonActive) {
      dispatch((0, _response_actions.setButtonActive)(false));
      dispatch((0, _response_actions.addResponse)(_constants2.default.USER_QUERY, text));
      setTimeout(function () {
        var response = (0, _get_app_response2.default)(text, state, dispatch);
        dispatch((0, _response_actions.addResponse)(_constants2.default.APP_RESPONSE, response.jsx));
        dispatch((0, _response_actions.incrementResponseCount)());
        if (state.speech.speechSynthActive) {
          var utterThis = new SpeechSynthesisUtterance(response.plainText);
          if (state.speech.speechRecActive) {
            utterThis.onend = function () {
              dispatch((0, _start_listening2.default)());
            };
          }
          speechSynthesis.speak(utterThis);
        }
        dispatch((0, _response_actions.setButtonActive)(true));
      }, _constants2.default.CONVERSATION_LAG);
    }
  };
};

exports.default = submitText;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _submit_text = __webpack_require__(9);

var _submit_text2 = _interopRequireDefault(_submit_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startListening = function startListening() {
  return function (dispatch, getState) {
    var state = getState();

    var rec = new webkitSpeechRecognition();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 5;
    rec.start();

    var loopListen = true;
    rec.onresult = function (event) {
      dispatch((0, _submit_text2.default)(event.results[0][0].transcript));
      loopListen = false;
    };

    rec.onend = function () {
      if (loopListen) {
        rec.start();
      }
    };
  };
};

exports.default = startListening;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _server2 = _interopRequireDefault(_server);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _herokuSslRedirect = __webpack_require__(14);

var _herokuSslRedirect2 = _interopRequireDefault(_herokuSslRedirect);

var _html_template = __webpack_require__(15);

var _html_template2 = _interopRequireDefault(_html_template);

var _portfolio_redux_root = __webpack_require__(16);

var _portfolio_redux_root2 = _interopRequireDefault(_portfolio_redux_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

var port = process.env.PORT || 8080;

server.use((0, _herokuSslRedirect2.default)());
server.use(_express2.default.static("dist"));

server.get("/", function (req, res) {
  _server2.default.renderToNodeStream((0, _html_template2.default)(_react2.default.createElement(_portfolio_redux_root2.default))).pipe(res);
});

server.listen(port, function () {
  console.log("listening on port " + port + "..."); //eslint-disable-line
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("heroku-ssl-redirect");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlTemplate = function htmlTemplate(html) {
  return _react2.default.createElement(
    "html",
    null,
    _react2.default.createElement(
      "head",
      null,
      _react2.default.createElement(
        "title",
        null,
        "Matt Herz"
      ),
      _react2.default.createElement("link", { rel: "stylesheet", type: "text/css", href: "styles.css" }),
      _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" })
    ),
    _react2.default.createElement(
      "body",
      null,
      _react2.default.createElement(
        "div",
        { id: "app" },
        html
      ),
      _react2.default.createElement("script", { src: "bundle.js" })
    )
  );
};

exports.default = htmlTemplate;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _root_reducers = __webpack_require__(18);

var _root_reducers2 = _interopRequireDefault(_root_reducers);

var _portfolio_container = __webpack_require__(21);

var _portfolio_container2 = _interopRequireDefault(_portfolio_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = void 0;
var composeEnhancers = void 0;

var PortfolioReduxRoot = function (_React$Component) {
  _inherits(PortfolioReduxRoot, _React$Component);

  function PortfolioReduxRoot() {
    _classCallCheck(this, PortfolioReduxRoot);

    return _possibleConstructorReturn(this, (PortfolioReduxRoot.__proto__ || Object.getPrototypeOf(PortfolioReduxRoot)).apply(this, arguments));
  }

  _createClass(PortfolioReduxRoot, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // setting dev tools up per question - until we redo the job_batch/job flow in react
      composeEnhancers = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: "portfolio"
      }) : _redux.compose;

      var enhancer = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default));

      var initialState = this.props;

      store = (0, _redux.createStore)(_root_reducers2.default, initialState, enhancer);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_portfolio_container2.default, null)
      );
    }
  }]);

  return PortfolioReduxRoot;
}(_react2.default.Component);

exports.default = PortfolioReduxRoot;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _response_reducers = __webpack_require__(19);

var _response_reducers2 = _interopRequireDefault(_response_reducers);

var _speech_reducers = __webpack_require__(20);

var _speech_reducers2 = _interopRequireDefault(_speech_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducers = (0, _redux.combineReducers)({
  response: _response_reducers2.default,
  speech: _speech_reducers2.default
});

exports.default = rootReducers;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseInitialState = undefined;

var _dotPropImmutable = __webpack_require__(8);

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _elizabot = __webpack_require__(3);

var _elizabot2 = _interopRequireDefault(_elizabot);

var _response_actions = __webpack_require__(4);

var responseActions = _interopRequireWildcard(_response_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
// import actions


// define initial state of model
var responseInitialState = exports.responseInitialState = {
  buttonActive: true,

  responseArray: [{ party: _constants2.default.APP_RESPONSE, text: "Hi there. Let's chat." }],
  responseCount: 0
};

function response() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : responseInitialState;
  var action = arguments[1];

  switch (action.type) {
    case responseActions.ADD_RESPONSE:
      var returnArray = [].concat(_toConsumableArray(state.responseArray));
      returnArray.push(action.payload);
      if (returnArray.length > _constants2.default.MAX_CONVERSATION) {
        returnArray.shift();
      }
      return _dotPropImmutable2.default.set(state, "responseArray", returnArray);
    case responseActions.CLEAR_RESPONSES:
      return _dotPropImmutable2.default.set(state, "responseArray", []);
    case responseActions.SET_BUTTON_ACTIVE:
      return _dotPropImmutable2.default.set(state, "buttonActive", action.payload);
    case responseActions.INCREMENT_RESPONSE_COUNT:
      return _dotPropImmutable2.default.set(state, "responseCount", state.responseCount + 1);
    default:
      return state;
  }
}

exports.default = response;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.speechInitialState = undefined;

var _dotPropImmutable = __webpack_require__(8);

var _dotPropImmutable2 = _interopRequireDefault(_dotPropImmutable);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _elizabot = __webpack_require__(3);

var _elizabot2 = _interopRequireDefault(_elizabot);

var _speech_actions = __webpack_require__(2);

var speechActions = _interopRequireWildcard(_speech_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// define initial state of model
var speechInitialState = exports.speechInitialState = {
  speechSynthActive: false,
  speechRecActive: false,
  recognizer: null,
  modalOpen: false
};
// import actions


function speech() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : speechInitialState;
  var action = arguments[1];

  switch (action.type) {
    case speechActions.SET_SPEECH_SYNTH_ACTIVE:
      return _dotPropImmutable2.default.set(state, "speechSynthActive", action.payload);
    case speechActions.SET_SPEECH_REC_ACTIVE:
      return _dotPropImmutable2.default.set(state, "speechRecActive", action.payload);
    case speechActions.SET_MODAL_OPEN:
      return _dotPropImmutable2.default.set(state, "modalOpen", action.payload);
    case speechActions.SET_RECOGNIZER:
      return _dotPropImmutable2.default.set(state, "recognizer", action.payload);
    default:
      return state;
  }
}

exports.default = speech;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(6);

var _portfolio = __webpack_require__(22);

var _portfolio2 = _interopRequireDefault(_portfolio);

var _speech_actions = __webpack_require__(2);

var _submit_text = __webpack_require__(9);

var _submit_text2 = _interopRequireDefault(_submit_text);

var _start_speech_recognition = __webpack_require__(26);

var _start_speech_recognition2 = _interopRequireDefault(_start_speech_recognition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state /*, ownProps*/) {
  return {
    modalOpen: state.speech.modalOpen,
    responseArray: state.response.responseArray,
    speechRecActive: state.speech.speechRecActive,
    speechSynthActive: state.speech.speechSynthActive
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch /*, ownProps*/) {
  return {
    setModalOpen: function setModalOpen(open) {
      dispatch((0, _speech_actions.setModalOpen)(open));
    },
    setSpeechRecActive: function setSpeechRecActive(active) {
      dispatch((0, _speech_actions.setSpeechRecActive)(active));
    },
    setSpeechSynthActive: function setSpeechSynthActive(active) {
      dispatch((0, _speech_actions.setSpeechSynthActive)(active));
    },
    startSpeechRecognition: function startSpeechRecognition() {
      dispatch((0, _start_speech_recognition2.default)());
    },
    submitText: function submitText(text) {
      dispatch((0, _submit_text2.default)(text));
    }
  };
};

var PortfolioContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_portfolio2.default);

exports.default = PortfolioContainer;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bowser = __webpack_require__(5);

var _bowser2 = _interopRequireDefault(_bowser);

var _conversation = __webpack_require__(23);

var _conversation2 = _interopRequireDefault(_conversation);

var _volume = __webpack_require__(24);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Portfolio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      if (_this.typeEntry) {
        _this.typeEntry.focus();
      }
    }, _this.handleButtonClick = function () {
      if (_this.typeEntry.value.trim().length > 0) {
        _this.props.submitText(_this.typeEntry.value);
        _this.typeEntry.value = "";
      }
    }, _this.handleInputKeydown = function (e) {
      if (e.keyCode === 13) {
        // press enter
        e.preventDefault();
        _this.handleButtonClick();
      }
    }, _this.handleTheAwesomeWay = function () {
      _this.props.setModalOpen(false);
      navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(function (stream) {
        var track = stream.getTracks()[0]; // if only one media track
        track.stop();

        _this.props.startSpeechRecognition();
      }).catch(function () {
        //oh noes
      });
    }, _this.renderEntry = function () {
      if (_this.props.speechRecActive) {
        return null;
      } else {
        return _react2.default.createElement(
          "div",
          { className: "entry" },
          _react2.default.createElement("input", { ref: function ref(input) {
              _this.typeEntry = input;
            }, className: "type-entry", type: "text", onKeyDown: _this.handleInputKeydown }),
          _react2.default.createElement(
            "button",
            { className: "type-commit", onClick: _this.handleButtonClick },
            "Say it"
          )
        );
      }
    }, _this.renderInputSubtitle = function () {
      if (_bowser2.default.name === "Chrome" && _bowser2.default.osname !== "ios") {
        if (_this.props.speechRecActive) {
          return null;
        } else {
          return _react2.default.createElement(
            "div",
            { className: "input-subtitle" },
            "Want to try this ",
            _react2.default.createElement(
              "a",
              { onClick: function onClick() {
                  _this.props.setModalOpen(true);
                } },
              "the awesome way"
            ),
            "?"
          );
        }
      } else {
        return _react2.default.createElement(
          "div",
          { className: "input-subtitle" },
          "Protip: the coolest part only works in ",
          _react2.default.createElement(
            "a",
            { href: "https://www.google.com/chrome/browser/", target: "_blank", rel: "noreferrer noopener" },
            "Chrome"
          ),
          "."
        );
      }
    }, _this.renderSoundControl = function () {
      return _react2.default.createElement(
        "div",
        { className: "synth-control", onClick: function onClick() {
            _this.props.setSpeechSynthActive(!_this.props.speechSynthActive);
          } },
        _this.props.speechSynthActive ? _volume.VolumeX : _volume.Volume2
      );
    }, _this.renderTakeover = function () {
      return _react2.default.createElement(
        "div",
        { className: "takeover" },
        _react2.default.createElement(
          "div",
          { className: "modal" },
          _react2.default.createElement(
            "div",
            { className: "modal-text" },
            "Spoiler alert: the awesome way is voice recognition."
          ),
          _react2.default.createElement(
            "div",
            { className: "modal-text" },
            "In just a sec, the browser will ask you to allow microphone access (because otherwise there's nothing to recognize.)"
          ),
          _react2.default.createElement(
            "div",
            { className: "modal-buttons" },
            _react2.default.createElement(
              "button",
              { className: "modal-confirm", onClick: _this.handleTheAwesomeWay },
              "Let's do it!"
            ),
            _react2.default.createElement(
              "button",
              { className: "modal-cancel", onClick: function onClick() {
                  _this.props.setModalOpen(false);
                } },
              "Creepy, no."
            )
          )
        )
      );
    }, _this.render = function () {
      return _react2.default.createElement(
        "div",
        { className: "portfolio", style: { height: _this.props.pageHeight } },
        _react2.default.createElement(
          "div",
          { className: "wrapper" },
          _react2.default.createElement(_conversation2.default, { responseArray: _this.props.responseArray }),
          _this.renderEntry(),
          _this.renderInputSubtitle()
        ),
        _this.props.speechRecActive ? null : _this.renderSoundControl(),
        _this.props.modalOpen ? _this.renderTakeover() : null
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Portfolio;
}(_react2.default.Component);

exports.default = Portfolio;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conversation = function (_React$Component) {
  _inherits(Conversation, _React$Component);

  function Conversation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Conversation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Conversation.__proto__ || Object.getPrototypeOf(Conversation)).call.apply(_ref, [this].concat(args))), _this), _this.renderResponses = function () {
      var responses = [];
      for (var r = 0; r < _this.props.responseArray.length; r++) {
        var response = _this.props.responseArray[r];
        responses.push(_react2.default.createElement(
          "div",
          { key: r, className: response.party === _constants2.default.APP_RESPONSE ? "response" : "query" },
          response.text
        ));
      }
      return responses;
    }, _this.render = function () {
      return _react2.default.createElement(
        "div",
        { className: "conversation" },
        _this.renderResponses()
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Conversation;
}(_react2.default.Component);

exports.default = Conversation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolumeX = exports.Volume2 = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//eslint-disable-line

var Volume2 = exports.Volume2 = _react2.default.createElement(
  "svg",
  { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-volume-2" },
  _react2.default.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
  _react2.default.createElement("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })
);
var VolumeX = exports.VolumeX = _react2.default.createElement(
  "svg",
  { width: "40", height: "40", viewBox: "0 0 24 24", fill: "none", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-volume-x" },
  _react2.default.createElement("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
  _react2.default.createElement("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
  _react2.default.createElement("line", { x1: "17", y1: "9", x2: "23", y2: "15" })
);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _elizabot = __webpack_require__(3);

var _elizabot2 = _interopRequireDefault(_elizabot);

var _bowser = __webpack_require__(5);

var _bowser2 = _interopRequireDefault(_bowser);

var _speech_actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAppResponse = function getAppResponse(inputString, state, dispatch) {
  var magic = {
    resume: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "I should probably update my resume. For now, here's my ",
        _react2.default.createElement(
          "a",
          { href: "https://www.linkedin.com/in/matt-herz", target: "_blank", rel: "noreferrer noopener" },
          "LinkedIn Profile"
        ),
        "."
      ),
      plainText: "I should probably update my resume. For now, here's my LinkedIn Profile."
    },
    linkedin: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "How about a link to my ",
        _react2.default.createElement(
          "a",
          { href: "https://www.linkedin.com/in/matt-herz", target: "_blank", rel: "noreferrer noopener" },
          "LinkedIn Profile"
        ),
        "?"
      ),
      plainText: "How about a link to my LinkedIn Profile?"
    },
    twitter: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "So much for professionalism: ",
        _react2.default.createElement(
          "a",
          { href: "https://www.twitter.com/mattiherz", target: "_blank", rel: "noreferrer noopener" },
          "@mattiherz"
        ),
        "."
      ),
      plainText: "So much for professionalism: at matty herz."
    },
    email: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "I'd throw in a mailto: link, but those are terrible. Copy-paste mcherz@gmail.com and have at it."
      ),
      plainText: "It's m c h e r z at g mail dot com. Good luck copy pasting that."
    },
    phone: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "I'm honestly a little gunshy about putting my cell phone number where internet weirdos can find it. Try email?"
      ),
      plainText: "How does that song go? Eight six seven five three oh nine? No, wait, that's Jenny, not me."
    },

    alexa: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Alexa, order six tons of chipped beef. Alexa, confirm purchase."
      ),
      plainText: "Alexa, order six tons of chipped beef. Alexa, confirm purchase."
    },
    cortana: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Cortana, Cortana, Cortana. I feel like I should recognize that name."
      ),
      plainText: "Cortana, Cortana, Cortana. I feel like I should recognize that name."
    },
    google: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Ok, Google. Play Drive by the Cars."
      ),
      plainText: "Ok, Google. Play Drive by the Cars."
    },
    siri: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Hey, Siri. How many developer years has Apple spent on you to date?"
      ),
      plainText: "Hey, Siri. How many developer years has Apple spent on you to date?"
    },

    eliza: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Come now. If you could plug an open source chatbot in for free, you wouldn't write one either."
      ),
      plainText: "Come now. If you could plug an open source chatbot in for free, you wouldn't write one either."
    },
    open_source: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "Sure, take a look. It's at ",
        _react2.default.createElement(
          "a",
          { href: "https://github.com/mcherz/portfolio", target: "_blank", rel: "noreferrer noopener" },
          "https://github.com/mcherz/portfolio"
        ),
        "."
      ),
      plainText: "Sure, take a look. It's at github dot com slash m c h e r z slash portfolio."
    },

    use_speech: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "It turns out there's an even more fun ",
        _react2.default.createElement(
          "a",
          { onClick: function onClick() {
              dispatch((0, _speech_actions.setModalOpen)(true));
            } },
          "way to do this"
        ),
        "..."
      ),
      plainText: "It turns out there's an even more fun way to do this..."
    },
    prompt_magic: {
      jsx: _react2.default.createElement(
        "span",
        null,
        "If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)"
      ),
      plainText: "If you're annoyed with Eliza's responses, you can ask me for contact info (or go looking for Easter eggs...)"
    }
  };

  var promptSpeech = state.response.responseCount === 2 && !state.speech.speechRecActive && _bowser2.default.name === "Chrome" && _bowser2.default.osname !== "ios";
  var lowString = inputString.toLowerCase();
  switch (true) {
    case promptSpeech:
      return magic.use_speech;
    case state.response.responseCount === 12:
      return magic.prompt_magic;
    case lowString.match("resume") !== null:
      return magic.resume;
    case lowString.match("linkedin") !== null:
      return magic.linkedin;
    case lowString.match("twitter") !== null:
      return magic.twitter;
    case lowString.match("alexa") !== null:
      return magic.alexa;
    case lowString.match("cortana") !== null:
      return magic.cortana;
    case lowString.match("google") !== null:
      return magic.google;
    case lowString.match("siri") !== null:
      return magic.siri;
    case lowString.match("eliza") !== null:
      return magic.eliza;
    case lowString.match("open source") !== null:
    case lowString.match("source code") !== null:
      return magic.open_source;
    case lowString.match("email") !== null:
    case lowString.match("contact") !== null:
      return magic.email;
    case lowString.match("phone") !== null:
      return magic.phone;
    default:
      var eliza = new _elizabot2.default();
      var returnString = eliza.transform(inputString);
      return {
        jsx: _react2.default.createElement(
          "span",
          null,
          returnString
        ),
        plainText: returnString
      };
  }
}; //eslint-disable-line
exports.default = getAppResponse;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(1);

var _constants2 = _interopRequireDefault(_constants);

var _response_actions = __webpack_require__(4);

var _speech_actions = __webpack_require__(2);

var _start_listening = __webpack_require__(10);

var _start_listening2 = _interopRequireDefault(_start_listening);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startSpeechRecognition = function startSpeechRecognition() {
  return function (dispatch) {
    dispatch((0, _speech_actions.setSpeechRecActive)(true));
    dispatch((0, _speech_actions.setSpeechSynthActive)(true));
    dispatch((0, _response_actions.clearResponses)());
    dispatch((0, _response_actions.addResponse)(_constants2.default.APP_RESPONSE, "Talk to me, goose! No, really, just start talking."));
    var utterThis = new SpeechSynthesisUtterance("Talk to me, goose! No, really, just start talking.");
    utterThis.onend = function () {
      dispatch((0, _start_listening2.default)());
    };
    speechSynthesis.speak(utterThis);
  };
};

exports.default = startSpeechRecognition;

/***/ })
/******/ ]);