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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(12);

var _cors2 = _interopRequireDefault(_cors);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(13);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _configureStore = __webpack_require__(14);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _styledComponents = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));

app.get('/*', function (req, res, next) {
  var preloadedState = {
    counter: {
      count: Math.round(Math.random() * 100)
    }
  };

  var store = (0, _configureStore2.default)(preloadedState);
  var styleSheet = new _styledComponents.ServerStyleSheet();

  var markup = (0, _server.renderToString)(styleSheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: preloadedState },
      _react2.default.createElement(_App2.default, null)
    )
  )));

  var styles = styleSheet.getStyleTags();

  res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR for React</title>\n        <script src=\"/bundle.js\" defer></script>\n        <script>\n          window.__PRELOADED_STATE__ = " + (0, _serializeJavascript2.default)(preloadedState) + "\n        </script>\n        " + styles + "\n      </head>\n\n      <body>\n        <div id=\"app\">" + markup + "</div>\n      </body>\n    </html>\n  ");
});

app.listen(3000, function () {
  console.log('App Started');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(15);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(16);

var _reducers = __webpack_require__(17);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(preloadedState) {
  var store = (0, _redux.createStore)(_reducers2.default, preloadedState, (0, _redux.applyMiddleware)((0, _reduxLogger.createLogger)(), _reduxThunk2.default));

  return store;
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _counter = __webpack_require__(18);

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  counter: _counter2.default
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(19);

var _assign2 = _interopRequireDefault(_assign);

exports.default = counter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  count: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      return (0, _assign2.default)({}, state, {
        count: state.count + 1
      });
    case 'DECREMENT':
      return (0, _assign2.default)({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(1);

var _CounterContainer = __webpack_require__(22);

var _CounterContainer2 = _interopRequireDefault(_CounterContainer);

var _GithubApi = __webpack_require__(24);

var _GithubApi2 = _interopRequireDefault(_GithubApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/', style: { marginRight: '50px' } },
          'Counter'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/git' },
          'Main'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, render: function render(props) {
            return _react2.default.createElement(_CounterContainer2.default, props);
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/git', render: function render(props) {
            return _react2.default.createElement(_GithubApi2.default, props);
          } })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = __webpack_require__(23);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  cursor: pointer;\n  color: blue;\n'], ['\n  cursor: pointer;\n  color: blue;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _styledComponents = __webpack_require__(9);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Page = __webpack_require__(27);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = _styledComponents2.default.span(_templateObject);

var CounterContainer = function (_Component) {
  (0, _inherits3.default)(CounterContainer, _Component);

  function CounterContainer() {
    (0, _classCallCheck3.default)(this, CounterContainer);
    return (0, _possibleConstructorReturn3.default)(this, (CounterContainer.__proto__ || (0, _getPrototypeOf2.default)(CounterContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(CounterContainer, [{
    key: 'render',
    value: function render() {
      var count = this.props.count;


      return _react2.default.createElement(
        _Page2.default,
        { title: 'Counter' },
        'Counter: ',
        count,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          Link,
          { onClick: this.props.increase },
          'Increase'
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          Link,
          { onClick: this.props.decrease },
          'Decrease'
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);
  return CounterContainer;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
};

var mapDispatchToAction = function mapDispatchToAction(dispatch) {
  return {
    increase: function increase() {
      return dispatch({ type: 'INCREMENT' });
    },
    decrease: function decrease() {
      return dispatch({ type: 'DECREMENT' });
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToAction)(CounterContainer);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(25);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(26);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Page = __webpack_require__(27);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubApi = function (_Component) {
  (0, _inherits3.default)(GithubApi, _Component);

  function GithubApi(props) {
    (0, _classCallCheck3.default)(this, GithubApi);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GithubApi.__proto__ || (0, _getPrototypeOf2.default)(GithubApi)).call(this, props));

    _this.state = {
      data: [],
      loading: false
    };
    return _this;
  }

  (0, _createClass3.default)(GithubApi, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({ loading: true });

                _context.prev = 1;
                _context.next = 4;
                return fetch('https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories').then(function (d) {
                  return d.json();
                }).then(function (d) {
                  return d.items;
                });

              case 4:
                data = _context.sent;


                this.setState({
                  data: data,
                  loading: false
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);

                this.setState({
                  loading: false
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          data = _state.data,
          loading = _state.loading;


      if (loading) {
        return _react2.default.createElement(
          'span',
          null,
          'Loading'
        );
      }

      return _react2.default.createElement(
        _Page2.default,
        { title: 'Github API Test' },
        data.map(function (d) {
          return _react2.default.createElement(
            'div',
            { key: d.id },
            _react2.default.createElement(
              'span',
              null,
              d.full_name
            ),
            _react2.default.createElement('br', null)
          );
        })
      );
    }
  }]);
  return GithubApi;
}(_react.Component);

exports.default = GithubApi;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(28);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      title: props.title
    }),
    props.children
  );
};

exports.default = Page;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })
/******/ ]);