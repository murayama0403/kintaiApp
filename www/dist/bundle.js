webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var App_1 = __webpack_require__(741);
	var Store_1 = __webpack_require__(751);
	var DispatchActions_1 = __webpack_require__(780);
	var react_redux_1 = __webpack_require__(712);
	var injectTapEventPlugin = __webpack_require__(172);
	var MuiThemeProvider_1 = __webpack_require__(178);
	injectTapEventPlugin();
	var AppComponent = react_redux_1.connect(function (store) { return { value: store.kintai }; }, function (dispatch) { return { actions: new DispatchActions_1.DispatchActions(dispatch) }; })(App_1.App);
	ReactDOM.render(React.createElement(react_redux_1.Provider, {store: Store_1.default}, 
	    React.createElement(MuiThemeProvider_1.default, null, 
	        React.createElement(AppComponent, null)
	    )
	), document.getElementById('app'));


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var invariant = __webpack_require__(173);
	var defaultClickRejectionStrategy = __webpack_require__(174);
	
	var alreadyInjected = false;
	
	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;
	
	  if (process.env.NODE_ENV !== 'production') {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }
	
	  alreadyInjected = true;
	
	  __webpack_require__(43).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(175)(shouldRejectClick)
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */
	
	"use strict";
	
	var EventConstants = __webpack_require__(41);
	var EventPluginUtils = __webpack_require__(45);
	var EventPropagators = __webpack_require__(42);
	var SyntheticUIEvent = __webpack_require__(76);
	var TouchEventUtils = __webpack_require__(176);
	var ViewportMetrics = __webpack_require__(77);
	
	var keyOf = __webpack_require__(177);
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;
	
	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    topLevelTypes.topTouchCancel,
	    topLevelTypes.topTouchEnd,
	    topLevelTypes.topTouchStart,
	    topLevelTypes.topTouchMove
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}
	
	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;
	
	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};
	
	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}
	
	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}
	
	var touchEvents = [
	  topLevelTypes.topTouchStart,
	  topLevelTypes.topTouchCancel,
	  topLevelTypes.topTouchEnd,
	  topLevelTypes.topTouchMove,
	];
	
	var dependencies = [
	  topLevelTypes.topMouseDown,
	  topLevelTypes.topMouseMove,
	  topLevelTypes.topMouseUp,
	].concat(touchEvents);
	
	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};
	
	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();
	
	function createTapEventPlugin(shouldRejectClick) {
	  return {
	
	    tapMoveThreshold: tapMoveThreshold,
	
	    ignoreMouseThreshold: ignoreMouseThreshold,
	
	    eventTypes: eventTypes,
	
	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {
	
	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }
	
	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }
	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }
	
	  };
	}
	
	module.exports = createTapEventPlugin;


/***/ },
/* 176 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */
	
	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;
	
	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};
	
	module.exports = TouchEventUtils;


/***/ },
/* 177 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _getMuiTheme = __webpack_require__(265);
	
	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MuiThemeProvider = function (_Component) {
	  (0, _inherits3.default)(MuiThemeProvider, _Component);
	
	  function MuiThemeProvider() {
	    (0, _classCallCheck3.default)(this, MuiThemeProvider);
	    return (0, _possibleConstructorReturn3.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(MuiThemeProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        muiTheme: this.props.muiTheme || (0, _getMuiTheme2.default)()
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }]);
	  return MuiThemeProvider;
	}(_react.Component);
	
	MuiThemeProvider.childContextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? MuiThemeProvider.propTypes = {
	  children: _react.PropTypes.element,
	  muiTheme: _react.PropTypes.object
	} : void 0;
	exports.default = MuiThemeProvider;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(180), __esModule: true };

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	module.exports = __webpack_require__(192).Object.getPrototypeOf;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(182)
	  , $getPrototypeOf = __webpack_require__(184);
	
	__webpack_require__(190)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(183);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(185)
	  , toObject    = __webpack_require__(182)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(187)('keys')
	  , uid    = __webpack_require__(189);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(188)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 189 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(191)
	  , core    = __webpack_require__(192)
	  , fails   = __webpack_require__(201);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(188)
	  , core      = __webpack_require__(192)
	  , ctx       = __webpack_require__(193)
	  , hide      = __webpack_require__(195)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 192 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(194);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(196)
	  , createDesc = __webpack_require__(204);
	module.exports = __webpack_require__(200) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(197)
	  , IE8_DOM_DEFINE = __webpack_require__(199)
	  , toPrimitive    = __webpack_require__(203)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(200) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(198);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(200) && !__webpack_require__(201)(function(){
	  return Object.defineProperty(__webpack_require__(202)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(201)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(198)
	  , document = __webpack_require__(188).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(198);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(207);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(209);
	var $Object = __webpack_require__(192).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(200), 'Object', {defineProperty: __webpack_require__(196).f});

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(211);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(212);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(241);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(213), __esModule: true };

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(214);
	__webpack_require__(236);
	module.exports = __webpack_require__(240).f('iterator');

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(215)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(217)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(216)
	  , defined   = __webpack_require__(183);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(218)
	  , $export        = __webpack_require__(191)
	  , redefine       = __webpack_require__(219)
	  , hide           = __webpack_require__(195)
	  , has            = __webpack_require__(185)
	  , Iterators      = __webpack_require__(220)
	  , $iterCreate    = __webpack_require__(221)
	  , setToStringTag = __webpack_require__(234)
	  , getPrototypeOf = __webpack_require__(184)
	  , ITERATOR       = __webpack_require__(235)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(195);

/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(222)
	  , descriptor     = __webpack_require__(204)
	  , setToStringTag = __webpack_require__(234)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(195)(IteratorPrototype, __webpack_require__(235)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(197)
	  , dPs         = __webpack_require__(223)
	  , enumBugKeys = __webpack_require__(232)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(202)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(233).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(196)
	  , anObject = __webpack_require__(197)
	  , getKeys  = __webpack_require__(224);
	
	module.exports = __webpack_require__(200) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(225)
	  , enumBugKeys = __webpack_require__(232);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(185)
	  , toIObject    = __webpack_require__(226)
	  , arrayIndexOf = __webpack_require__(229)(false)
	  , IE_PROTO     = __webpack_require__(186)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(227)
	  , defined = __webpack_require__(183);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(228);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(226)
	  , toLength  = __webpack_require__(230)
	  , toIndex   = __webpack_require__(231);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(216)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(216)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(188).document && document.documentElement;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(196).f
	  , has = __webpack_require__(185)
	  , TAG = __webpack_require__(235)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(187)('wks')
	  , uid        = __webpack_require__(189)
	  , Symbol     = __webpack_require__(188).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(237);
	var global        = __webpack_require__(188)
	  , hide          = __webpack_require__(195)
	  , Iterators     = __webpack_require__(220)
	  , TO_STRING_TAG = __webpack_require__(235)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(238)
	  , step             = __webpack_require__(239)
	  , Iterators        = __webpack_require__(220)
	  , toIObject        = __webpack_require__(226);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(217)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(235);

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(242), __esModule: true };

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(243);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	module.exports = __webpack_require__(192).Symbol;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(188)
	  , has            = __webpack_require__(185)
	  , DESCRIPTORS    = __webpack_require__(200)
	  , $export        = __webpack_require__(191)
	  , redefine       = __webpack_require__(219)
	  , META           = __webpack_require__(244).KEY
	  , $fails         = __webpack_require__(201)
	  , shared         = __webpack_require__(187)
	  , setToStringTag = __webpack_require__(234)
	  , uid            = __webpack_require__(189)
	  , wks            = __webpack_require__(235)
	  , wksExt         = __webpack_require__(240)
	  , wksDefine      = __webpack_require__(245)
	  , keyOf          = __webpack_require__(246)
	  , enumKeys       = __webpack_require__(247)
	  , isArray        = __webpack_require__(250)
	  , anObject       = __webpack_require__(197)
	  , toIObject      = __webpack_require__(226)
	  , toPrimitive    = __webpack_require__(203)
	  , createDesc     = __webpack_require__(204)
	  , _create        = __webpack_require__(222)
	  , gOPNExt        = __webpack_require__(251)
	  , $GOPD          = __webpack_require__(253)
	  , $DP            = __webpack_require__(196)
	  , $keys          = __webpack_require__(224)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(252).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(249).f  = $propertyIsEnumerable;
	  __webpack_require__(248).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(218)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(195)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(189)('meta')
	  , isObject = __webpack_require__(198)
	  , has      = __webpack_require__(185)
	  , setDesc  = __webpack_require__(196).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(201)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(188)
	  , core           = __webpack_require__(192)
	  , LIBRARY        = __webpack_require__(218)
	  , wksExt         = __webpack_require__(240)
	  , defineProperty = __webpack_require__(196).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(224)
	  , toIObject = __webpack_require__(226);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(224)
	  , gOPS    = __webpack_require__(248)
	  , pIE     = __webpack_require__(249);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 249 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(228);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(226)
	  , gOPN      = __webpack_require__(252).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(225)
	  , hiddenKeys = __webpack_require__(232).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(249)
	  , createDesc     = __webpack_require__(204)
	  , toIObject      = __webpack_require__(226)
	  , toPrimitive    = __webpack_require__(203)
	  , has            = __webpack_require__(185)
	  , IE8_DOM_DEFINE = __webpack_require__(199)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(200) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 254 */
/***/ function(module, exports) {



/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(258);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(262);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(211);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(260);
	module.exports = __webpack_require__(192).Object.setPrototypeOf;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(191);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(261).set});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(198)
	  , anObject = __webpack_require__(197);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(193)(Function.call, __webpack_require__(253).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(263), __esModule: true };

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(264);
	var $Object = __webpack_require__(192).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(222)});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(266);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	exports.default = getMuiTheme;
	
	var _lodash = __webpack_require__(276);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _colorManipulator = __webpack_require__(278);
	
	var _lightBaseTheme = __webpack_require__(279);
	
	var _lightBaseTheme2 = _interopRequireDefault(_lightBaseTheme);
	
	var _zIndex = __webpack_require__(282);
	
	var _zIndex2 = _interopRequireDefault(_zIndex);
	
	var _autoprefixer = __webpack_require__(283);
	
	var _autoprefixer2 = _interopRequireDefault(_autoprefixer);
	
	var _callOnce = __webpack_require__(316);
	
	var _callOnce2 = _interopRequireDefault(_callOnce);
	
	var _rtl = __webpack_require__(317);
	
	var _rtl2 = _interopRequireDefault(_rtl);
	
	var _compose = __webpack_require__(321);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	var _typography = __webpack_require__(322);
	
	var _typography2 = _interopRequireDefault(_typography);
	
	var _colors = __webpack_require__(280);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Get the MUI theme corresponding to a base theme.
	 * It's possible to override the computed theme values
	 * by providing a second argument. The calculated
	 * theme will be deeply merged with the second argument.
	 */
	function getMuiTheme(muiTheme) {
	  for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    more[_key - 1] = arguments[_key];
	  }
	
	  muiTheme = _lodash2.default.apply(undefined, [{
	    zIndex: _zIndex2.default,
	    isRtl: false,
	    userAgent: undefined
	  }, _lightBaseTheme2.default, muiTheme].concat(more));
	
	  var _muiTheme = muiTheme;
	  var spacing = _muiTheme.spacing;
	  var fontFamily = _muiTheme.fontFamily;
	  var palette = _muiTheme.palette;
	
	  var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };
	
	  muiTheme = (0, _lodash2.default)({
	    appBar: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      height: spacing.desktopKeylineIncrement,
	      titleFontWeight: _typography2.default.fontWeightNormal,
	      padding: spacing.desktopGutter
	    },
	    avatar: {
	      color: palette.canvasColor,
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.26)
	    },
	    badge: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    bottomNavigation: {
	      backgroundColor: palette.canvasColor,
	      unselectedColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      selectedColor: palette.primary1Color,
	      height: 56,
	      unselectedFontSize: 12,
	      selectedFontSize: 14
	    },
	    button: {
	      height: 36,
	      minWidth: 88,
	      iconButtonSize: spacing.iconSize * 2
	    },
	    card: {
	      titleColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      subtitleColor: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    cardMedia: {
	      color: _colors.darkWhite,
	      overlayContentBackground: _colors.lightBlack,
	      titleColor: _colors.darkWhite,
	      subtitleColor: _colors.lightWhite
	    },
	    cardText: {
	      textColor: palette.textColor
	    },
	    checkbox: {
	      boxColor: palette.textColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    chip: {
	      backgroundColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12),
	      deleteIconColor: (0, _colorManipulator.fade)(palette.textColor, 0.26),
	      textColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      fontSize: 14,
	      fontWeight: _typography2.default.fontWeightNormal,
	      shadow: '0 1px 6px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, _colorManipulator.fade)(palette.shadowColor, 0.12)
	    },
	    datePicker: {
	      color: palette.primary1Color,
	      textColor: palette.alternateTextColor,
	      calendarTextColor: palette.textColor,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor,
	      calendarYearBackgroundColor: palette.canvasColor
	    },
	    dialog: {
	      titleFontSize: 22,
	      bodyFontSize: 16,
	      bodyColor: (0, _colorManipulator.fade)(palette.textColor, 0.6)
	    },
	    dropDownMenu: {
	      accentColor: palette.borderColor
	    },
	    enhancedButton: {
	      tapHighlightColor: _colors.transparent
	    },
	    flatButton: {
	      color: _colors.transparent,
	      buttonFilterColor: '#999999',
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      textColor: palette.textColor,
	      primaryTextColor: palette.primary1Color,
	      secondaryTextColor: palette.accent1Color,
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    floatingActionButton: {
	      buttonSize: 56,
	      miniSize: 40,
	      color: palette.primary1Color,
	      iconColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryIconColor: palette.alternateTextColor,
	      disabledTextColor: palette.disabledColor,
	      disabledColor: (0, _colorManipulator.emphasize)(palette.canvasColor, 0.12)
	    },
	    gridTile: {
	      textColor: _colors.white
	    },
	    icon: {
	      color: palette.canvasColor,
	      backgroundColor: palette.primary1Color
	    },
	    inkBar: {
	      backgroundColor: palette.accent1Color
	    },
	    drawer: {
	      width: spacing.desktopKeylineIncrement * 4,
	      color: palette.canvasColor
	    },
	    listItem: {
	      nestedLevelDepth: 18,
	      secondaryTextColor: palette.secondaryTextColor,
	      leftIconColor: _colors.grey600,
	      rightIconColor: _colors.grey600
	    },
	    menu: {
	      backgroundColor: palette.canvasColor,
	      containerBackgroundColor: palette.canvasColor
	    },
	    menuItem: {
	      dataHeight: 32,
	      height: 48,
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.035),
	      padding: spacing.desktopGutter,
	      selectedTextColor: palette.accent1Color,
	      rightIconDesktopFill: _colors.grey600
	    },
	    menuSubheader: {
	      padding: spacing.desktopGutter,
	      borderColor: palette.borderColor,
	      textColor: palette.primary1Color
	    },
	    overlay: {
	      backgroundColor: _colors.lightBlack
	    },
	    paper: {
	      color: palette.textColor,
	      backgroundColor: palette.canvasColor,
	      zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
	        return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, _colorManipulator.fade)(palette.shadowColor, d[5]);
	      })
	    },
	    radioButton: {
	      borderColor: palette.textColor,
	      backgroundColor: palette.alternateTextColor,
	      checkedColor: palette.primary1Color,
	      requiredColor: palette.primary1Color,
	      disabledColor: palette.disabledColor,
	      size: 24,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor
	    },
	    raisedButton: {
	      color: palette.alternateTextColor,
	      textColor: palette.textColor,
	      primaryColor: palette.primary1Color,
	      primaryTextColor: palette.alternateTextColor,
	      secondaryColor: palette.accent1Color,
	      secondaryTextColor: palette.alternateTextColor,
	      disabledColor: (0, _colorManipulator.darken)(palette.alternateTextColor, 0.1),
	      disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3),
	      fontSize: _typography2.default.fontStyleButtonFontSize,
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    refreshIndicator: {
	      strokeColor: palette.borderColor,
	      loadingStrokeColor: palette.primary1Color
	    },
	    ripple: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.87)
	    },
	    slider: {
	      trackSize: 2,
	      trackColor: palette.primary3Color,
	      trackColorSelected: palette.accent3Color,
	      handleSize: 12,
	      handleSizeDisabled: 8,
	      handleSizeActive: 18,
	      handleColorZero: palette.primary3Color,
	      handleFillColor: palette.alternateTextColor,
	      selectionColor: palette.primary1Color,
	      rippleColor: palette.primary1Color
	    },
	    snackbar: {
	      textColor: palette.alternateTextColor,
	      backgroundColor: palette.textColor,
	      actionColor: palette.accent1Color
	    },
	    subheader: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      fontWeight: _typography2.default.fontWeightMedium
	    },
	    stepper: {
	      backgroundColor: 'transparent',
	      hoverBackgroundColor: (0, _colorManipulator.fade)(_colors.black, 0.06),
	      iconColor: palette.primary1Color,
	      hoveredIconColor: _colors.grey700,
	      inactiveIconColor: _colors.grey500,
	      textColor: (0, _colorManipulator.fade)(_colors.black, 0.87),
	      disabledTextColor: (0, _colorManipulator.fade)(_colors.black, 0.26),
	      connectorLineColor: _colors.grey400
	    },
	    svgIcon: {
	      color: palette.textColor
	    },
	    table: {
	      backgroundColor: palette.canvasColor
	    },
	    tableFooter: {
	      borderColor: palette.borderColor,
	      textColor: palette.accent3Color
	    },
	    tableHeader: {
	      borderColor: palette.borderColor
	    },
	    tableHeaderColumn: {
	      textColor: palette.accent3Color,
	      height: 56,
	      spacing: 24
	    },
	    tableRow: {
	      hoverColor: palette.accent2Color,
	      stripeColor: (0, _colorManipulator.fade)((0, _colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
	      selectedColor: palette.borderColor,
	      textColor: palette.textColor,
	      borderColor: palette.borderColor,
	      height: 48
	    },
	    tableRowColumn: {
	      height: 48,
	      spacing: 24
	    },
	    tabs: {
	      backgroundColor: palette.primary1Color,
	      textColor: (0, _colorManipulator.fade)(palette.alternateTextColor, 0.7),
	      selectedTextColor: palette.alternateTextColor
	    },
	    textField: {
	      textColor: palette.textColor,
	      hintColor: palette.disabledColor,
	      floatingLabelColor: palette.textColor,
	      disabledTextColor: palette.disabledColor,
	      errorColor: _colors.red500,
	      focusColor: palette.primary1Color,
	      backgroundColor: 'transparent',
	      borderColor: palette.borderColor
	    },
	    timePicker: {
	      color: palette.alternateTextColor,
	      textColor: palette.accent3Color,
	      accentColor: palette.primary1Color,
	      clockColor: palette.textColor,
	      clockCircleColor: palette.clockCircleColor,
	      headerColor: palette.pickerHeaderColor || palette.primary1Color,
	      selectColor: palette.primary2Color,
	      selectTextColor: palette.alternateTextColor
	    },
	    toggle: {
	      thumbOnColor: palette.primary1Color,
	      thumbOffColor: palette.accent2Color,
	      thumbDisabledColor: palette.borderColor,
	      thumbRequiredColor: palette.primary1Color,
	      trackOnColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5),
	      trackOffColor: palette.primary3Color,
	      trackDisabledColor: palette.primary3Color,
	      labelColor: palette.textColor,
	      labelDisabledColor: palette.disabledColor,
	      trackRequiredColor: (0, _colorManipulator.fade)(palette.primary1Color, 0.5)
	    },
	    toolbar: {
	      color: (0, _colorManipulator.fade)(palette.textColor, 0.54),
	      hoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.87),
	      backgroundColor: (0, _colorManipulator.darken)(palette.accent2Color, 0.05),
	      height: 56,
	      titleFontSize: 20,
	      iconColor: (0, _colorManipulator.fade)(palette.textColor, 0.4),
	      separatorColor: (0, _colorManipulator.fade)(palette.textColor, 0.175),
	      menuHoverColor: (0, _colorManipulator.fade)(palette.textColor, 0.1)
	    },
	    tooltip: {
	      color: _colors.white,
	      rippleBackgroundColor: _colors.grey700
	    }
	  }, muiTheme, {
	    baseTheme: baseTheme, // To provide backward compatibility.
	    rawTheme: baseTheme });
	
	  var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
	    return t(muiTheme);
	  }).filter(function (t) {
	    return t;
	  });
	  muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));
	
	  return muiTheme;
	}

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(267);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(268), __esModule: true };

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(214);
	__webpack_require__(269);
	module.exports = __webpack_require__(192).Array.from;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(193)
	  , $export        = __webpack_require__(191)
	  , toObject       = __webpack_require__(182)
	  , call           = __webpack_require__(270)
	  , isArrayIter    = __webpack_require__(271)
	  , toLength       = __webpack_require__(230)
	  , createProperty = __webpack_require__(272)
	  , getIterFn      = __webpack_require__(273);
	
	$export($export.S + $export.F * !__webpack_require__(275)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(197);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(220)
	  , ITERATOR   = __webpack_require__(235)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(196)
	  , createDesc      = __webpack_require__(204);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(274)
	  , ITERATOR  = __webpack_require__(235)('iterator')
	  , Iterators = __webpack_require__(220);
	module.exports = __webpack_require__(192).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(228)
	  , TAG = __webpack_require__(235)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(235)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];
	
	  var length = result.length,
	      skipIndexes = !!length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = baseKeysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;
	
	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}
	
	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);
	
	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;
	
	  var isCommon = newValue === undefined;
	
	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  assignMergeValue(object, key, newValue);
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return copyObject(value, keysIn(value));
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = merge;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(277)(module)))

/***/ },
/* 277 */,
/* 278 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertColorToString = convertColorToString;
	exports.convertHexToRGB = convertHexToRGB;
	exports.decomposeColor = decomposeColor;
	exports.getContrastRatio = getContrastRatio;
	exports.getLuminance = getLuminance;
	exports.emphasize = emphasize;
	exports.fade = fade;
	exports.darken = darken;
	exports.lighten = lighten;
	/**
	 * Returns a number whose value is limited to the given range.
	 *
	 * @param {number} value The value to be clamped
	 * @param {number} min The lower boundary of the output range
	 * @param {number} max The upper boundary of the output range
	 * @returns {number} A number in the range [min, max]
	 */
	function clamp(value, min, max) {
	  if (value < min) {
	    return min;
	  }
	  if (value > max) {
	    return max;
	  }
	  return value;
	}
	
	/**
	 * Converts a color object with type and values to a string.
	 *
	 * @param {object} color - Decomposed color
	 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
	 * @returns {string} A CSS color string
	 */
	function convertColorToString(color) {
	  var type = color.type;
	  var values = color.values;
	
	
	  if (type.indexOf('rgb') > -1) {
	    // Only convert the first 3 values to int (i.e. not alpha)
	    for (var i = 0; i < 3; i++) {
	      values[i] = parseInt(values[i]);
	    }
	  }
	
	  var colorString = void 0;
	
	  if (type.indexOf('hsl') > -1) {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
	  } else {
	    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
	  }
	
	  if (values.length === 4) {
	    colorString += ', ' + color.values[3] + ')';
	  } else {
	    colorString += ')';
	  }
	
	  return colorString;
	}
	
	/**
	 * Converts a color from CSS hex format to CSS rgb format.
	 *
	 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
	 *  @returns {string} A CSS rgb color string
	 */
	function convertHexToRGB(color) {
	  if (color.length === 4) {
	    var extendedColor = '#';
	    for (var i = 1; i < color.length; i++) {
	      extendedColor += color.charAt(i) + color.charAt(i);
	    }
	    color = extendedColor;
	  }
	
	  var values = {
	    r: parseInt(color.substr(1, 2), 16),
	    g: parseInt(color.substr(3, 2), 16),
	    b: parseInt(color.substr(5, 2), 16)
	  };
	
	  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
	}
	
	/**
	 * Returns an object with the type and values of a color.
	 *
	 * Note: Does not support rgb % values.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {{type: string, values: number[]}} A MUI color object
	 */
	function decomposeColor(color) {
	  if (color.charAt(0) === '#') {
	    return decomposeColor(convertHexToRGB(color));
	  }
	
	  var marker = color.indexOf('(');
	  var type = color.substring(0, marker);
	  var values = color.substring(marker + 1, color.length - 1).split(',');
	  values = values.map(function (value) {
	    return parseFloat(value);
	  });
	
	  return { type: type, values: values };
	}
	
	/**
	 * Calculates the contrast ratio between two colors.
	 *
	 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	 *
	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
	 */
	function getContrastRatio(foreground, background) {
	  var lumA = getLuminance(foreground);
	  var lumB = getLuminance(background);
	  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
	
	  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
	}
	
	/**
	 * The relative brightness of any point in a color space,
	 * normalized to 0 for darkest black and 1 for lightest white.
	 *
	 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @returns {number} The relative brightness of the color in the range 0 - 1
	 */
	function getLuminance(color) {
	  color = decomposeColor(color);
	
	  if (color.type.indexOf('rgb') > -1) {
	    var rgb = color.values.map(function (val) {
	      val /= 255; // normalized
	      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	    });
	    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
	  } else if (color.type.indexOf('hsl') > -1) {
	    return color.values[2] / 100;
	  }
	}
	
	/**
	 * Darken or lighten a colour, depending on its luminance.
	 * Light colors are darkened, dark colors are lightened.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function emphasize(color) {
	  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
	
	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
	}
	
	/**
	 * Set the absolute transparency of a color.
	 * Any existing alpha values are overwritten.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} value - value to set the alpha channel to in the range 0 -1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function fade(color, value) {
	  color = decomposeColor(color);
	  value = clamp(value, 0, 1);
	
	  if (color.type === 'rgb' || color.type === 'hsl') {
	    color.type += 'a';
	  }
	  color.values[3] = value;
	
	  return convertColorToString(color);
	}
	
	/**
	 * Darkens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function darken(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] *= 1 - coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] *= 1 - coefficient;
	    }
	  }
	  return convertColorToString(color);
	}
	
	/**
	 * Lightens a color.
	 *
	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
	 * @param {number} coefficient - multiplier in the range 0 - 1
	 * @returns {string} A CSS color string. Hex input values are returned as rgb
	 */
	function lighten(color, coefficient) {
	  color = decomposeColor(color);
	  coefficient = clamp(coefficient, 0, 1);
	
	  if (color.type.indexOf('hsl') > -1) {
	    color.values[2] += (100 - color.values[2]) * coefficient;
	  } else if (color.type.indexOf('rgb') > -1) {
	    for (var i = 0; i < 3; i++) {
	      color.values[i] += (255 - color.values[i]) * coefficient;
	    }
	  }
	
	  return convertColorToString(color);
	}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _colors = __webpack_require__(280);
	
	var _colorManipulator = __webpack_require__(278);
	
	var _spacing = __webpack_require__(281);
	
	var _spacing2 = _interopRequireDefault(_spacing);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */
	exports.default = {
	  spacing: _spacing2.default,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: _colors.cyan500,
	    primary2Color: _colors.cyan700,
	    primary3Color: _colors.grey400,
	    accent1Color: _colors.pinkA200,
	    accent2Color: _colors.grey100,
	    accent3Color: _colors.grey500,
	    textColor: _colors.darkBlack,
	    secondaryTextColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.54),
	    alternateTextColor: _colors.white,
	    canvasColor: _colors.white,
	    borderColor: _colors.grey300,
	    disabledColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.3),
	    pickerHeaderColor: _colors.cyan500,
	    clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
	    shadowColor: _colors.fullBlack
	  }
	}; /**
	    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
	    */

/***/ },
/* 280 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var red50 = exports.red50 = '#ffebee';
	var red100 = exports.red100 = '#ffcdd2';
	var red200 = exports.red200 = '#ef9a9a';
	var red300 = exports.red300 = '#e57373';
	var red400 = exports.red400 = '#ef5350';
	var red500 = exports.red500 = '#f44336';
	var red600 = exports.red600 = '#e53935';
	var red700 = exports.red700 = '#d32f2f';
	var red800 = exports.red800 = '#c62828';
	var red900 = exports.red900 = '#b71c1c';
	var redA100 = exports.redA100 = '#ff8a80';
	var redA200 = exports.redA200 = '#ff5252';
	var redA400 = exports.redA400 = '#ff1744';
	var redA700 = exports.redA700 = '#d50000';
	
	var pink50 = exports.pink50 = '#fce4ec';
	var pink100 = exports.pink100 = '#f8bbd0';
	var pink200 = exports.pink200 = '#f48fb1';
	var pink300 = exports.pink300 = '#f06292';
	var pink400 = exports.pink400 = '#ec407a';
	var pink500 = exports.pink500 = '#e91e63';
	var pink600 = exports.pink600 = '#d81b60';
	var pink700 = exports.pink700 = '#c2185b';
	var pink800 = exports.pink800 = '#ad1457';
	var pink900 = exports.pink900 = '#880e4f';
	var pinkA100 = exports.pinkA100 = '#ff80ab';
	var pinkA200 = exports.pinkA200 = '#ff4081';
	var pinkA400 = exports.pinkA400 = '#f50057';
	var pinkA700 = exports.pinkA700 = '#c51162';
	
	var purple50 = exports.purple50 = '#f3e5f5';
	var purple100 = exports.purple100 = '#e1bee7';
	var purple200 = exports.purple200 = '#ce93d8';
	var purple300 = exports.purple300 = '#ba68c8';
	var purple400 = exports.purple400 = '#ab47bc';
	var purple500 = exports.purple500 = '#9c27b0';
	var purple600 = exports.purple600 = '#8e24aa';
	var purple700 = exports.purple700 = '#7b1fa2';
	var purple800 = exports.purple800 = '#6a1b9a';
	var purple900 = exports.purple900 = '#4a148c';
	var purpleA100 = exports.purpleA100 = '#ea80fc';
	var purpleA200 = exports.purpleA200 = '#e040fb';
	var purpleA400 = exports.purpleA400 = '#d500f9';
	var purpleA700 = exports.purpleA700 = '#aa00ff';
	
	var deepPurple50 = exports.deepPurple50 = '#ede7f6';
	var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
	var deepPurple200 = exports.deepPurple200 = '#b39ddb';
	var deepPurple300 = exports.deepPurple300 = '#9575cd';
	var deepPurple400 = exports.deepPurple400 = '#7e57c2';
	var deepPurple500 = exports.deepPurple500 = '#673ab7';
	var deepPurple600 = exports.deepPurple600 = '#5e35b1';
	var deepPurple700 = exports.deepPurple700 = '#512da8';
	var deepPurple800 = exports.deepPurple800 = '#4527a0';
	var deepPurple900 = exports.deepPurple900 = '#311b92';
	var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
	var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
	var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
	var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';
	
	var indigo50 = exports.indigo50 = '#e8eaf6';
	var indigo100 = exports.indigo100 = '#c5cae9';
	var indigo200 = exports.indigo200 = '#9fa8da';
	var indigo300 = exports.indigo300 = '#7986cb';
	var indigo400 = exports.indigo400 = '#5c6bc0';
	var indigo500 = exports.indigo500 = '#3f51b5';
	var indigo600 = exports.indigo600 = '#3949ab';
	var indigo700 = exports.indigo700 = '#303f9f';
	var indigo800 = exports.indigo800 = '#283593';
	var indigo900 = exports.indigo900 = '#1a237e';
	var indigoA100 = exports.indigoA100 = '#8c9eff';
	var indigoA200 = exports.indigoA200 = '#536dfe';
	var indigoA400 = exports.indigoA400 = '#3d5afe';
	var indigoA700 = exports.indigoA700 = '#304ffe';
	
	var blue50 = exports.blue50 = '#e3f2fd';
	var blue100 = exports.blue100 = '#bbdefb';
	var blue200 = exports.blue200 = '#90caf9';
	var blue300 = exports.blue300 = '#64b5f6';
	var blue400 = exports.blue400 = '#42a5f5';
	var blue500 = exports.blue500 = '#2196f3';
	var blue600 = exports.blue600 = '#1e88e5';
	var blue700 = exports.blue700 = '#1976d2';
	var blue800 = exports.blue800 = '#1565c0';
	var blue900 = exports.blue900 = '#0d47a1';
	var blueA100 = exports.blueA100 = '#82b1ff';
	var blueA200 = exports.blueA200 = '#448aff';
	var blueA400 = exports.blueA400 = '#2979ff';
	var blueA700 = exports.blueA700 = '#2962ff';
	
	var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
	var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
	var lightBlue200 = exports.lightBlue200 = '#81d4fa';
	var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
	var lightBlue400 = exports.lightBlue400 = '#29b6f6';
	var lightBlue500 = exports.lightBlue500 = '#03a9f4';
	var lightBlue600 = exports.lightBlue600 = '#039be5';
	var lightBlue700 = exports.lightBlue700 = '#0288d1';
	var lightBlue800 = exports.lightBlue800 = '#0277bd';
	var lightBlue900 = exports.lightBlue900 = '#01579b';
	var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
	var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
	var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
	var lightBlueA700 = exports.lightBlueA700 = '#0091ea';
	
	var cyan50 = exports.cyan50 = '#e0f7fa';
	var cyan100 = exports.cyan100 = '#b2ebf2';
	var cyan200 = exports.cyan200 = '#80deea';
	var cyan300 = exports.cyan300 = '#4dd0e1';
	var cyan400 = exports.cyan400 = '#26c6da';
	var cyan500 = exports.cyan500 = '#00bcd4';
	var cyan600 = exports.cyan600 = '#00acc1';
	var cyan700 = exports.cyan700 = '#0097a7';
	var cyan800 = exports.cyan800 = '#00838f';
	var cyan900 = exports.cyan900 = '#006064';
	var cyanA100 = exports.cyanA100 = '#84ffff';
	var cyanA200 = exports.cyanA200 = '#18ffff';
	var cyanA400 = exports.cyanA400 = '#00e5ff';
	var cyanA700 = exports.cyanA700 = '#00b8d4';
	
	var teal50 = exports.teal50 = '#e0f2f1';
	var teal100 = exports.teal100 = '#b2dfdb';
	var teal200 = exports.teal200 = '#80cbc4';
	var teal300 = exports.teal300 = '#4db6ac';
	var teal400 = exports.teal400 = '#26a69a';
	var teal500 = exports.teal500 = '#009688';
	var teal600 = exports.teal600 = '#00897b';
	var teal700 = exports.teal700 = '#00796b';
	var teal800 = exports.teal800 = '#00695c';
	var teal900 = exports.teal900 = '#004d40';
	var tealA100 = exports.tealA100 = '#a7ffeb';
	var tealA200 = exports.tealA200 = '#64ffda';
	var tealA400 = exports.tealA400 = '#1de9b6';
	var tealA700 = exports.tealA700 = '#00bfa5';
	
	var green50 = exports.green50 = '#e8f5e9';
	var green100 = exports.green100 = '#c8e6c9';
	var green200 = exports.green200 = '#a5d6a7';
	var green300 = exports.green300 = '#81c784';
	var green400 = exports.green400 = '#66bb6a';
	var green500 = exports.green500 = '#4caf50';
	var green600 = exports.green600 = '#43a047';
	var green700 = exports.green700 = '#388e3c';
	var green800 = exports.green800 = '#2e7d32';
	var green900 = exports.green900 = '#1b5e20';
	var greenA100 = exports.greenA100 = '#b9f6ca';
	var greenA200 = exports.greenA200 = '#69f0ae';
	var greenA400 = exports.greenA400 = '#00e676';
	var greenA700 = exports.greenA700 = '#00c853';
	
	var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
	var lightGreen100 = exports.lightGreen100 = '#dcedc8';
	var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
	var lightGreen300 = exports.lightGreen300 = '#aed581';
	var lightGreen400 = exports.lightGreen400 = '#9ccc65';
	var lightGreen500 = exports.lightGreen500 = '#8bc34a';
	var lightGreen600 = exports.lightGreen600 = '#7cb342';
	var lightGreen700 = exports.lightGreen700 = '#689f38';
	var lightGreen800 = exports.lightGreen800 = '#558b2f';
	var lightGreen900 = exports.lightGreen900 = '#33691e';
	var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
	var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
	var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
	var lightGreenA700 = exports.lightGreenA700 = '#64dd17';
	
	var lime50 = exports.lime50 = '#f9fbe7';
	var lime100 = exports.lime100 = '#f0f4c3';
	var lime200 = exports.lime200 = '#e6ee9c';
	var lime300 = exports.lime300 = '#dce775';
	var lime400 = exports.lime400 = '#d4e157';
	var lime500 = exports.lime500 = '#cddc39';
	var lime600 = exports.lime600 = '#c0ca33';
	var lime700 = exports.lime700 = '#afb42b';
	var lime800 = exports.lime800 = '#9e9d24';
	var lime900 = exports.lime900 = '#827717';
	var limeA100 = exports.limeA100 = '#f4ff81';
	var limeA200 = exports.limeA200 = '#eeff41';
	var limeA400 = exports.limeA400 = '#c6ff00';
	var limeA700 = exports.limeA700 = '#aeea00';
	
	var yellow50 = exports.yellow50 = '#fffde7';
	var yellow100 = exports.yellow100 = '#fff9c4';
	var yellow200 = exports.yellow200 = '#fff59d';
	var yellow300 = exports.yellow300 = '#fff176';
	var yellow400 = exports.yellow400 = '#ffee58';
	var yellow500 = exports.yellow500 = '#ffeb3b';
	var yellow600 = exports.yellow600 = '#fdd835';
	var yellow700 = exports.yellow700 = '#fbc02d';
	var yellow800 = exports.yellow800 = '#f9a825';
	var yellow900 = exports.yellow900 = '#f57f17';
	var yellowA100 = exports.yellowA100 = '#ffff8d';
	var yellowA200 = exports.yellowA200 = '#ffff00';
	var yellowA400 = exports.yellowA400 = '#ffea00';
	var yellowA700 = exports.yellowA700 = '#ffd600';
	
	var amber50 = exports.amber50 = '#fff8e1';
	var amber100 = exports.amber100 = '#ffecb3';
	var amber200 = exports.amber200 = '#ffe082';
	var amber300 = exports.amber300 = '#ffd54f';
	var amber400 = exports.amber400 = '#ffca28';
	var amber500 = exports.amber500 = '#ffc107';
	var amber600 = exports.amber600 = '#ffb300';
	var amber700 = exports.amber700 = '#ffa000';
	var amber800 = exports.amber800 = '#ff8f00';
	var amber900 = exports.amber900 = '#ff6f00';
	var amberA100 = exports.amberA100 = '#ffe57f';
	var amberA200 = exports.amberA200 = '#ffd740';
	var amberA400 = exports.amberA400 = '#ffc400';
	var amberA700 = exports.amberA700 = '#ffab00';
	
	var orange50 = exports.orange50 = '#fff3e0';
	var orange100 = exports.orange100 = '#ffe0b2';
	var orange200 = exports.orange200 = '#ffcc80';
	var orange300 = exports.orange300 = '#ffb74d';
	var orange400 = exports.orange400 = '#ffa726';
	var orange500 = exports.orange500 = '#ff9800';
	var orange600 = exports.orange600 = '#fb8c00';
	var orange700 = exports.orange700 = '#f57c00';
	var orange800 = exports.orange800 = '#ef6c00';
	var orange900 = exports.orange900 = '#e65100';
	var orangeA100 = exports.orangeA100 = '#ffd180';
	var orangeA200 = exports.orangeA200 = '#ffab40';
	var orangeA400 = exports.orangeA400 = '#ff9100';
	var orangeA700 = exports.orangeA700 = '#ff6d00';
	
	var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
	var deepOrange100 = exports.deepOrange100 = '#ffccbc';
	var deepOrange200 = exports.deepOrange200 = '#ffab91';
	var deepOrange300 = exports.deepOrange300 = '#ff8a65';
	var deepOrange400 = exports.deepOrange400 = '#ff7043';
	var deepOrange500 = exports.deepOrange500 = '#ff5722';
	var deepOrange600 = exports.deepOrange600 = '#f4511e';
	var deepOrange700 = exports.deepOrange700 = '#e64a19';
	var deepOrange800 = exports.deepOrange800 = '#d84315';
	var deepOrange900 = exports.deepOrange900 = '#bf360c';
	var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
	var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
	var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
	var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';
	
	var brown50 = exports.brown50 = '#efebe9';
	var brown100 = exports.brown100 = '#d7ccc8';
	var brown200 = exports.brown200 = '#bcaaa4';
	var brown300 = exports.brown300 = '#a1887f';
	var brown400 = exports.brown400 = '#8d6e63';
	var brown500 = exports.brown500 = '#795548';
	var brown600 = exports.brown600 = '#6d4c41';
	var brown700 = exports.brown700 = '#5d4037';
	var brown800 = exports.brown800 = '#4e342e';
	var brown900 = exports.brown900 = '#3e2723';
	
	var blueGrey50 = exports.blueGrey50 = '#eceff1';
	var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
	var blueGrey200 = exports.blueGrey200 = '#b0bec5';
	var blueGrey300 = exports.blueGrey300 = '#90a4ae';
	var blueGrey400 = exports.blueGrey400 = '#78909c';
	var blueGrey500 = exports.blueGrey500 = '#607d8b';
	var blueGrey600 = exports.blueGrey600 = '#546e7a';
	var blueGrey700 = exports.blueGrey700 = '#455a64';
	var blueGrey800 = exports.blueGrey800 = '#37474f';
	var blueGrey900 = exports.blueGrey900 = '#263238';
	
	var grey50 = exports.grey50 = '#fafafa';
	var grey100 = exports.grey100 = '#f5f5f5';
	var grey200 = exports.grey200 = '#eeeeee';
	var grey300 = exports.grey300 = '#e0e0e0';
	var grey400 = exports.grey400 = '#bdbdbd';
	var grey500 = exports.grey500 = '#9e9e9e';
	var grey600 = exports.grey600 = '#757575';
	var grey700 = exports.grey700 = '#616161';
	var grey800 = exports.grey800 = '#424242';
	var grey900 = exports.grey900 = '#212121';
	
	var black = exports.black = '#000000';
	var white = exports.white = '#ffffff';
	
	var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
	var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
	var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
	var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
	var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
	var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
	var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
	var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
	var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';

/***/ },
/* 281 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  iconSize: 24,
	
	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopDrawerMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  menu: 1000,
	  appBar: 1100,
	  drawerOverlay: 1200,
	  drawer: 1300,
	  dialogOverlay: 1400,
	  dialog: 1500,
	  layer: 2000,
	  popover: 2100,
	  snackbar: 2900,
	  tooltip: 3000
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(211);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = function (muiTheme) {
	  var userAgent = muiTheme.userAgent;
	
	  if (userAgent === undefined && typeof navigator !== 'undefined') {
	    userAgent = navigator.userAgent;
	  }
	
	  if (userAgent === undefined && !hasWarnedAboutUserAgent) {
	    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Material-UI: userAgent should be supplied in the muiTheme context\n      for server-side rendering.') : void 0;
	
	    hasWarnedAboutUserAgent = true;
	  }
	
	  if (userAgent === false) {
	    // Disabled autoprefixer
	    return null;
	  } else if (userAgent === 'all' || userAgent === undefined) {
	    // Prefix for all user agent
	    return function (style) {
	      return _inlineStylePrefixer2.default.prefixAll(style);
	    };
	  } else {
	    var _ret = function () {
	      var prefixer = new _inlineStylePrefixer2.default({
	        userAgent: userAgent
	      });
	
	      return {
	        v: function v(style) {
	          return prefixer.prefix(style);
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	  }
	};
	
	var _inlineStylePrefixer = __webpack_require__(284);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	var _warning = __webpack_require__(315);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hasWarnedAboutUserAgent = false;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// special flexbox specifications
	
	
	var _prefixAll2 = __webpack_require__(285);
	
	var _prefixAll3 = _interopRequireDefault(_prefixAll2);
	
	var _getBrowserInformation = __webpack_require__(299);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _getPrefixedKeyframes = __webpack_require__(302);
	
	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);
	
	var _capitalizeString = __webpack_require__(287);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _prefixProps = __webpack_require__(303);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _calc = __webpack_require__(304);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _zoomCursor = __webpack_require__(306);
	
	var _zoomCursor2 = _interopRequireDefault(_zoomCursor);
	
	var _grabCursor = __webpack_require__(307);
	
	var _grabCursor2 = _interopRequireDefault(_grabCursor);
	
	var _flex = __webpack_require__(308);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(309);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(310);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(311);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(313);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(314);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var plugins = [_calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
	// this must be run AFTER the flexbox specs
	_flex2.default];
	
	var Prefixer = function () {
	  /**
	   * Instantiante a new prefixer
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   * @param {string} keepUnprefixed - keeps unprefixed properties and values
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	    this._userAgent = options.userAgent || defaultUserAgent;
	    this._keepUnprefixed = options.keepUnprefixed || false;
	
	    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      // set additional prefix information
	      this.cssPrefix = this._browserInfo.prefix.css;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
	    } else {
	      this._usePrefixAllFallback = true;
	      return false;
	    }
	
	    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._usePrefixAllFallback = true;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // use prefixAll as fallback if userAgent can not be resolved
	      if (this._usePrefixAllFallback) {
	        return (0, _prefixAll3.default)(styles);
	      }
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object && !Array.isArray(value)) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
	            if (!_this2._keepUnprefixed) {
	              delete styles[property];
	            }
	          }
	        }
	      });
	
	      Object.keys(styles).forEach(function (property) {
	        [].concat(styles[property]).forEach(function (value) {
	          // resolve plugins
	          plugins.forEach(function (plugin) {
	            // generates a new plugin interface with current data
	            assignStyles(styles, plugin({
	              property: property,
	              value: value,
	              styles: styles,
	              browserInfo: _this2._browserInfo,
	              prefix: {
	                js: _this2.jsPrefix,
	                css: _this2.cssPrefix,
	                keyframes: _this2.prefixedKeyframes
	              },
	              keepUnprefixed: _this2._keepUnprefixed,
	              requiresPrefix: _this2._requiresPrefix
	            }), value, _this2._keepUnprefixed);
	          });
	        });
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      return (0, _prefixAll3.default)(styles);
	    }
	  }]);
	
	  return Prefixer;
	}();
	
	exports.default = Prefixer;
	
	
	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  var value = arguments[2];
	  var keepUnprefixed = arguments[3];
	
	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (val) {
	        if (base[property].indexOf(val) === -1) {
	          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
	        }
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixAll;
	
	var _prefixProps = __webpack_require__(286);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	var _capitalizeString = __webpack_require__(287);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _calc = __webpack_require__(288);
	
	var _calc2 = _interopRequireDefault(_calc);
	
	var _cursor = __webpack_require__(291);
	
	var _cursor2 = _interopRequireDefault(_cursor);
	
	var _flex = __webpack_require__(292);
	
	var _flex2 = _interopRequireDefault(_flex);
	
	var _sizing = __webpack_require__(293);
	
	var _sizing2 = _interopRequireDefault(_sizing);
	
	var _gradient = __webpack_require__(294);
	
	var _gradient2 = _interopRequireDefault(_gradient);
	
	var _transition = __webpack_require__(295);
	
	var _transition2 = _interopRequireDefault(_transition);
	
	var _flexboxIE = __webpack_require__(297);
	
	var _flexboxIE2 = _interopRequireDefault(_flexboxIE);
	
	var _flexboxOld = __webpack_require__(298);
	
	var _flexboxOld2 = _interopRequireDefault(_flexboxOld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// special flexbox specifications
	
	
	var plugins = [_calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];
	
	/**
	 * Returns a prefixed version of the style object using all vendor prefixes
	 * @param {Object} styles - Style object that gets prefixed properties added
	 * @returns {Object} - Style object with prefixed properties and values
	 */
	function prefixAll(styles) {
	  Object.keys(styles).forEach(function (property) {
	    var value = styles[property];
	    if (value instanceof Object && !Array.isArray(value)) {
	      // recurse through nested style objects
	      styles[property] = prefixAll(value);
	    } else {
	      Object.keys(_prefixProps2.default).forEach(function (prefix) {
	        var properties = _prefixProps2.default[prefix];
	        // add prefixes if needed
	        if (properties[property]) {
	          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
	        }
	      });
	    }
	  });
	
	  Object.keys(styles).forEach(function (property) {
	    [].concat(styles[property]).forEach(function (value, index) {
	      // resolve every special plugins
	      plugins.forEach(function (plugin) {
	        return assignStyles(styles, plugin(property, value));
	      });
	    });
	  });
	
	  return styles;
	}
	
	function assignStyles(base) {
	  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(extend).forEach(function (property) {
	    var baseValue = base[property];
	    if (Array.isArray(baseValue)) {
	      [].concat(extend[property]).forEach(function (value) {
	        var valueIndex = baseValue.indexOf(value);
	        if (valueIndex > -1) {
	          base[property].splice(valueIndex, 1);
	        }
	        base[property].push(value);
	      });
	    } else {
	      base[property] = extend[property];
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 286 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
	module.exports = exports["default"];

/***/ },
/* 287 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// helper to capitalize strings
	
	exports.default = function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	module.exports = exports["default"];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _joinPrefixedValue = __webpack_require__(289);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(290);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function calc(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
	    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
	      return value.replace(/calc\(/g, prefix + 'calc(');
	    });
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	// returns a style object with a single concated prefixed value string
	
	exports.default = function (property, value) {
	  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
	    return prefix + value;
	  } : arguments[2];
	  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
	    return replacer(prefix, value);
	  }));
	};
	
	module.exports = exports['default'];

/***/ },
/* 290 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (value) {
	  if (Array.isArray(value)) value = value.join(',');
	
	  return value.match(/-webkit-|-moz-|-ms-/) !== null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = cursor;
	
	var _joinPrefixedValue = __webpack_require__(289);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = {
	  'zoom-in': true,
	  'zoom-out': true,
	  grab: true,
	  grabbing: true
	};
	
	function cursor(property, value) {
	  if (property === 'cursor' && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	var values = { flex: true, 'inline-flex': true };
	
	function flex(property, value) {
	  if (property === 'display' && values[value]) {
	    return {
	      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _joinPrefixedValue = __webpack_require__(289);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(property, value) {
	  if (properties[property] && values[value]) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _joinPrefixedValue = __webpack_require__(289);
	
	var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);
	
	var _isPrefixedValue = __webpack_require__(290);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(property, value) {
	  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
	    return (0, _joinPrefixedValue2.default)(property, value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(296);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _capitalizeString = __webpack_require__(287);
	
	var _capitalizeString2 = _interopRequireDefault(_capitalizeString);
	
	var _isPrefixedValue = __webpack_require__(290);
	
	var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);
	
	var _prefixProps = __webpack_require__(286);
	
	var _prefixProps2 = _interopRequireDefault(_prefixProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  transition: true,
	  transitionProperty: true,
	  WebkitTransition: true,
	  WebkitTransitionProperty: true
	};
	
	function transition(property, value) {
	  // also check for already prefixed transitions
	  if (typeof value === 'string' && properties[property]) {
	    var _ref2;
	
	    var outputValue = prefixValue(value);
	    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
	      return value.match(/-moz-|-ms-/) === null;
	    }).join(',');
	
	    // if the property is already prefixed
	    if (property.indexOf('Webkit') > -1) {
	      return _defineProperty({}, property, webkitOutput);
	    }
	
	    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
	  }
	}
	
	function prefixValue(value) {
	  if ((0, _isPrefixedValue2.default)(value)) {
	    return value;
	  }
	
	  // only split multi values, not cubic beziers
	  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	  // iterate each single value and check for transitioned properties
	  // that need to be prefixed as well
	  multipleValues.forEach(function (val, index) {
	    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
	      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';
	
	      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
	        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);
	
	        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
	          // join all prefixes and create a new value
	          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
	        }
	      });
	      return out;
	    }, val);
	  });
	
	  return multipleValues.join(',');
	}
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports) {

	'use strict';
	
	var uppercasePattern = /[A-Z]/g;
	var msPattern = /^ms-/;
	var cache = {};
	
	function hyphenateStyleName(string) {
	    return string in cache
	    ? cache[string]
	    : cache[string] = string
	      .replace(uppercasePattern, '-$&')
	      .toLowerCase()
	      .replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;


/***/ },
/* 297 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	function flexboxIE(property, value) {
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	function flexboxOld(property, value) {
	  if (property === 'flexDirection' && typeof value === 'string') {
	    return {
	      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	    };
	  }
	  if (alternativeProps[property]) {
	    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _bowser = __webpack_require__(300);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	var browsers = {
	  chrome: [['chrome'], ['chromium']],
	  safari: [['safari']],
	  firefox: [['firefox']],
	  edge: [['msedge']],
	  opera: [['opera'], ['vivaldi']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie: [['msie']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'tablet']],
	  android: [['android', 'mobile'], ['android', 'tablet']]
	};
	
	var browserByInfo = function browserByInfo(info) {
	  if (info.firefox) {
	    return 'firefox';
	  }
	  var name = '';
	
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  return name;
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports.default = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	  var info = _bowser2.default._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          css: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  info.browser = browserByInfo(info);
	
	  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
	  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
	  info.osversion = parseFloat(info.osversion);
	
	  // iOS forces all browsers to use Safari under the hood
	  // as the Safari version seems to match the iOS version
	  // we just explicitely use the osversion instead
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
	  if (info.browser === 'ios_saf' && info.version > info.osversion) {
	    info.version = info.osversion;
	    info.safari = true;
	  }
	
	  // seperate native android chrome
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
	  if (info.browser === 'android' && info.chrome && info.version > 37) {
	    info.browser = 'and_chr';
	  }
	
	  // For android < 4.4 we want to check the osversion
	  // not the chrome version, see issue #26
	  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
	  if (info.browser === 'android' && info.osversion < 5) {
	    info.version = info.osversion;
	  }
	
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Bowser - a browser detector
	 * https://github.com/ded/bowser
	 * MIT License | (c) Dustin Diaz 2015
	 */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) __webpack_require__(301)(name, definition)
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
	      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
	      , chromeos = /CrOS/.test(ua)
	      , silk = /silk/i.test(ua)
	      , sailfish = /sailfish/i.test(ua)
	      , tizen = /tizen/i.test(ua)
	      , webos = /(web|hpw)os/i.test(ua)
	      , windowsphone = /windows phone/i.test(ua)
	      , samsungBrowser = /SamsungBrowser/i.test(ua)
	      , windows = !windowsphone && /windows/i.test(ua)
	      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
	      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , xbox = /xbox/i.test(ua)
	      , result
	
	    if (/opera/i.test(ua)) {
	      //  an old Opera
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
	      }
	    } else if (/opr|opios/i.test(ua)) {
	      // a new Opera
	      result = {
	        name: 'Opera'
	        , opera: t
	        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/SamsungBrowser/i.test(ua)) {
	      result = {
	        name: 'Samsung Internet for Android'
	        , samsungBrowser: t
	        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/coast/i.test(ua)) {
	      result = {
	        name: 'Opera Coast'
	        , coast: t
	        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/ucbrowser/i.test(ua)) {
	      result = {
	          name: 'UC Browser'
	        , ucbrowser: t
	        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/mxios/i.test(ua)) {
	      result = {
	        name: 'Maxthon'
	        , maxthon: t
	        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/epiphany/i.test(ua)) {
	      result = {
	        name: 'Epiphany'
	        , epiphany: t
	        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/puffin/i.test(ua)) {
	      result = {
	        name: 'Puffin'
	        , puffin: t
	        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
	      }
	    }
	    else if (/sleipnir/i.test(ua)) {
	      result = {
	        name: 'Sleipnir'
	        , sleipnir: t
	        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (/k-meleon/i.test(ua)) {
	      result = {
	        name: 'K-Meleon'
	        , kMeleon: t
	        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
	      }
	    }
	    else if (windowsphone) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeos) {
	      result = {
	        name: 'Chrome'
	      , chromeos: t
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/vivaldi/i.test(ua)) {
	      result = {
	        name: 'Vivaldi'
	        , vivaldi: t
	        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (sailfish) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel|fxios/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (silk) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/slimerjs/i.test(ua)) {
	      result = {
	        name: 'SlimerJS'
	        , slimer: t
	        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (webos) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (tizen) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/qupzilla/i.test(ua)) {
	      result = {
	        name: 'QupZilla'
	        , qupzilla: t
	        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
	      }
	    }
	    else if (/chromium/i.test(ua)) {
	      result = {
	        name: 'Chromium'
	        , chromium: t
	        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	        , chrome: t
	        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	        , version: versionIdentifier
	      }
	    }
	    else if (/safari|applewebkit/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      }
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if(/googlebot/i.test(ua)) {
	      result = {
	        name: 'Googlebot'
	      , googlebot: t
	      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      if (/(apple)?webkit\/537\.36/i.test(ua)) {
	        result.name = result.name || "Blink"
	        result.blink = t
	      } else {
	        result.name = result.name || "Webkit"
	        result.webkit = t
	      }
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (!result.windowsphone && !result.msedge && iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    } else if (mac) {
	      result.mac = t
	    } else if (xbox) {
	      result.xbox = t
	    } else if (windows) {
	      result.windows = t
	    } else if (linux) {
	      result.linux = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (
	         tablet
	      || nexusTablet
	      || iosdevice == 'ipad'
	      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
	      || result.silk
	    ) {
	      result.tablet = t
	    } else if (
	         mobile
	      || iosdevice == 'iphone'
	      || iosdevice == 'ipod'
	      || android
	      || nexusMobile
	      || result.blackberry
	      || result.webos
	      || result.bada
	    ) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
			    (result.vivaldi && result.version >= 1.0) ||
	        (result.chrome && result.version >= 20) ||
	        (result.samsungBrowser && result.version >= 4) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        || (result.chromium && result.version >= 20)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        || (result.chromium && result.version < 20)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /**
	   * Get version precisions count
	   *
	   * @example
	   *   getVersionPrecision("1.10.3") // 3
	   *
	   * @param  {string} version
	   * @return {number}
	   */
	  function getVersionPrecision(version) {
	    return version.split(".").length;
	  }
	
	  /**
	   * Array::map polyfill
	   *
	   * @param  {Array} arr
	   * @param  {Function} iterator
	   * @return {Array}
	   */
	  function map(arr, iterator) {
	    var result = [], i;
	    if (Array.prototype.map) {
	      return Array.prototype.map.call(arr, iterator);
	    }
	    for (i = 0; i < arr.length; i++) {
	      result.push(iterator(arr[i]));
	    }
	    return result;
	  }
	
	  /**
	   * Calculate browser version weight
	   *
	   * @example
	   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
	   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
	   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
	   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
	   *
	   * @param  {Array<String>} versions versions to compare
	   * @return {Number} comparison result
	   */
	  function compareVersions(versions) {
	    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
	    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
	    var chunks = map(versions, function (version) {
	      var delta = precision - getVersionPrecision(version);
	
	      // 2) "9" -> "9.0" (for precision = 2)
	      version = version + new Array(delta + 1).join(".0");
	
	      // 3) "9.0" -> ["000000000"", "000000009"]
	      return map(version.split("."), function (chunk) {
	        return new Array(20 - chunk.length).join("0") + chunk;
	      }).reverse();
	    });
	
	    // iterate in reverse order by reversed chunks array
	    while (--precision >= 0) {
	      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
	      if (chunks[0][precision] > chunks[1][precision]) {
	        return 1;
	      }
	      else if (chunks[0][precision] === chunks[1][precision]) {
	        if (precision === 0) {
	          // all version chunks are same
	          return 0;
	        }
	      }
	      else {
	        return -1;
	      }
	    }
	  }
	
	  /**
	   * Check if browser is unsupported
	   *
	   * @example
	   *   bowser.isUnsupportedBrowser({
	   *     msie: "10",
	   *     firefox: "23",
	   *     chrome: "29",
	   *     safari: "5.1",
	   *     opera: "16",
	   *     phantom: "534"
	   *   });
	   *
	   * @param  {Object}  minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function isUnsupportedBrowser(minVersions, strictMode, ua) {
	    var _bowser = bowser;
	
	    // make strictMode param optional with ua param usage
	    if (typeof strictMode === 'string') {
	      ua = strictMode;
	      strictMode = void(0);
	    }
	
	    if (strictMode === void(0)) {
	      strictMode = false;
	    }
	    if (ua) {
	      _bowser = detect(ua);
	    }
	
	    var version = "" + _bowser.version;
	    for (var browser in minVersions) {
	      if (minVersions.hasOwnProperty(browser)) {
	        if (_bowser[browser]) {
	          if (typeof minVersions[browser] !== 'string') {
	            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
	          }
	
	          // browser version and min supported version.
	          return compareVersions([version, minVersions[browser]]) < 0;
	        }
	      }
	    }
	
	    return strictMode; // not found
	  }
	
	  /**
	   * Check if browser is supported
	   *
	   * @param  {Object} minVersions map of minimal version to browser
	   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
	   * @param  {String}  [ua] user agent string
	   * @return {Boolean}
	   */
	  function check(minVersions, strictMode, ua) {
	    return !isUnsupportedBrowser(minVersions, strictMode, ua);
	  }
	
	  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
	  bowser.compareVersions = compareVersions;
	  bowser.check = check;
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 301 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.css + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
	module.exports = exports["default"];

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calc;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function calc(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 305 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (prefixedValue, value, keepUnprefixed) {
	  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
	};
	
	module.exports = exports["default"];

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = zoomCursor;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { 'zoom-in': true, 'zoom-out': true };
	
	function zoomCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = grabCursor;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { grab: true, grabbing: true };
	
	function grabCursor(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var browser = _ref.browserInfo.browser;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
	  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
	    return {
	      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flex;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var values = { flex: true, 'inline-flex': true };
	
	function flex(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
	    return {
	      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sizing;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = {
	  maxHeight: true,
	  maxWidth: true,
	  width: true,
	  height: true,
	  columnWidth: true,
	  minWidth: true,
	  minHeight: true
	};
	var values = {
	  'min-content': true,
	  'max-content': true,
	  'fill-available': true,
	  'fit-content': true,
	  'contain-floats': true
	};
	
	function sizing(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // This might change in the future
	  // Keep an eye on it
	  if (properties[property] && values[value]) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = gradient;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
	
	function gradient(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = transition;
	
	var _hyphenateStyleName = __webpack_require__(296);
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _unprefixProperty = __webpack_require__(312);
	
	var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = { transition: true, transitionProperty: true };
	
	function transition(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var css = _ref.prefix.css;
	  var requiresPrefix = _ref.requiresPrefix;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  // also check for already prefixed transitions
	  var unprefixedProperty = (0, _unprefixProperty2.default)(property);
	
	  if (typeof value === 'string' && properties[unprefixedProperty]) {
	    var _ret = function () {
	      // TODO: memoize this array
	      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
	        return (0, _hyphenateStyleName2.default)(prop);
	      });
	
	      // only split multi values, not cubic beziers
	      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
	
	      requiresPrefixDashCased.forEach(function (prop) {
	        multipleValues.forEach(function (val, index) {
	          if (val.indexOf(prop) > -1 && prop !== 'order') {
	            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
	          }
	        });
	      });
	
	      return {
	        v: _defineProperty({}, property, multipleValues.join(','))
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (property) {
	  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
	  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
	};
	
	module.exports = exports['default'];

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxIE;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: 'flexbox',
	  'inline-flex': 'inline-flexbox'
	};
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	function flexboxIE(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flexboxOld;
	
	var _getPrefixedValue = __webpack_require__(305);
	
	var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
	var properties = Object.keys(alternativeProps).concat(otherProps);
	
	function flexboxOld(_ref) {
	  var property = _ref.property;
	  var value = _ref.value;
	  var styles = _ref.styles;
	  var _ref$browserInfo = _ref.browserInfo;
	  var browser = _ref$browserInfo.browser;
	  var version = _ref$browserInfo.version;
	  var css = _ref.prefix.css;
	  var keepUnprefixed = _ref.keepUnprefixed;
	
	  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (!keepUnprefixed && !Array.isArray(styles[property])) {
	      delete styles[property];
	    }
	    if (property === 'flexDirection' && typeof value === 'string') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return {
	        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
	      };
	    }
	    if (alternativeProps[property]) {
	      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = callOnce;
	
	var _warning = __webpack_require__(315);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CALLED_ONCE = 'muiPrepared';
	
	function callOnce() {
	  if (process.env.NODE_ENV !== 'production') {
	    return function (style) {
	      if (style[CALLED_ONCE]) {
	        process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'You cannot call prepareStyles() on the same style object more than once.') : void 0;
	      }
	      style[CALLED_ONCE] = true;
	      return style;
	    };
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(318);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.default = rtl;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;
	
	/**
	 * This function ensures that `style` supports both ltr and rtl directions by
	 * checking `styleConstants` in `muiTheme` and replacing attribute keys if
	 * necessary.
	 */
	function rtl(muiTheme) {
	  if (muiTheme.isRtl) {
	    return function (style) {
	      if (style.directionInvariant === true) {
	        return style;
	      }
	
	      var flippedAttributes = {
	        // Keys and their replacements.
	        right: 'left',
	        left: 'right',
	        marginRight: 'marginLeft',
	        marginLeft: 'marginRight',
	        paddingRight: 'paddingLeft',
	        paddingLeft: 'paddingRight',
	        borderRight: 'borderLeft',
	        borderLeft: 'borderRight'
	      };
	
	      var newStyle = {};
	
	      (0, _keys2.default)(style).forEach(function (attribute) {
	        var value = style[attribute];
	        var key = attribute;
	
	        if (flippedAttributes.hasOwnProperty(attribute)) {
	          key = flippedAttributes[attribute];
	        }
	
	        switch (attribute) {
	          case 'float':
	          case 'textAlign':
	            if (value === 'right') {
	              value = 'left';
	            } else if (value === 'left') {
	              value = 'right';
	            }
	            break;
	
	          case 'direction':
	            if (value === 'ltr') {
	              value = 'rtl';
	            } else if (value === 'rtl') {
	              value = 'ltr';
	            }
	            break;
	
	          case 'transform':
	            if (!value) break;
	            var matches = void 0;
	            if (matches = value.match(reTranslate)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	            }
	            if (matches = value.match(reSkew)) {
	              value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
	            }
	            break;
	
	          case 'transformOrigin':
	            if (!value) break;
	            if (value.indexOf('right') > -1) {
	              value = value.replace('right', 'left');
	            } else if (value.indexOf('left') > -1) {
	              value = value.replace('left', 'right');
	            }
	            break;
	        }
	
	        newStyle[key] = value;
	      });
	
	      return newStyle;
	    };
	  }
	}

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(319), __esModule: true };

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(320);
	module.exports = __webpack_require__(192).Object.keys;

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(182)
	  , $keys    = __webpack_require__(224);
	
	__webpack_require__(190)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 321 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = compose;
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }
	
	  if (funcs.length === 1) {
	    return funcs[0];
	  }
	
	  var last = funcs[funcs.length - 1];
	  return function () {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i--) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  };
	}

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _colors = __webpack_require__(280);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Typography = function Typography() {
	  (0, _classCallCheck3.default)(this, Typography);
	
	  // text colors
	  this.textFullBlack = _colors.fullBlack;
	  this.textDarkBlack = _colors.darkBlack;
	  this.textLightBlack = _colors.lightBlack;
	  this.textMinBlack = _colors.minBlack;
	  this.textFullWhite = _colors.fullWhite;
	  this.textDarkWhite = _colors.darkWhite;
	  this.textLightWhite = _colors.lightWhite;
	
	  // font weight
	  this.fontWeightLight = 300;
	  this.fontWeightNormal = 400;
	  this.fontWeightMedium = 500;
	
	  this.fontStyleButtonFontSize = 14;
	};
	
	exports.default = new Typography();

/***/ },
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(327);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(328), __esModule: true };

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(329);
	module.exports = __webpack_require__(192).Object.assign;

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(191);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(330)});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(224)
	  , gOPS     = __webpack_require__(248)
	  , pIE      = __webpack_require__(249)
	  , toObject = __webpack_require__(182)
	  , IObject  = __webpack_require__(227)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(201)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 331 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },
/* 333 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 334 */,
/* 335 */,
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shallowEqual = __webpack_require__(124);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _shallowEqual2.default;

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(267);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
	};

/***/ },
/* 350 */,
/* 351 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  once: function once(el, type, callback) {
	    var typeArray = type ? type.split(' ') : [];
	    var recursiveFunction = function recursiveFunction(event) {
	      event.target.removeEventListener(event.type, recursiveFunction);
	      return callback(event);
	    };
	
	    for (var i = typeArray.length - 1; i >= 0; i--) {
	      this.on(el, typeArray[i], recursiveFunction);
	    }
	  },
	  on: function on(el, type, callback) {
	    if (el.addEventListener) {
	      el.addEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.attachEvent('on' + type, function () {
	        callback.call(el);
	      });
	    }
	  },
	  off: function off(el, type, callback) {
	    if (el.removeEventListener) {
	      el.removeEventListener(type, callback);
	    } else {
	      // IE8+ Support
	      el.detachEvent('on' + type, callback);
	    }
	  },
	  isKeyboard: function isKeyboard(event) {
	    return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
	  }
	};

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var horizontal = _react.PropTypes.oneOf(['left', 'middle', 'right']);
	var vertical = _react.PropTypes.oneOf(['top', 'center', 'bottom']);
	
	exports.default = {
	
	  corners: _react.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
	
	  horizontal: horizontal,
	
	  vertical: vertical,
	
	  origin: _react.PropTypes.shape({
	    horizontal: horizontal,
	    vertical: vertical
	  }),
	
	  cornersAndCenter: _react.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),
	
	  stringOrNumber: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	
	  zDepth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5])
	
	};

/***/ },
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  isDescendant: function isDescendant(parent, child) {
	    var node = child.parentNode;
	
	    while (node !== null) {
	      if (node === parent) return true;
	      node = node.parentNode;
	    }
	
	    return false;
	  },
	  offset: function offset(el) {
	    var rect = el.getBoundingClientRect();
	    return {
	      top: rect.top + document.body.scrollTop,
	      left: rect.left + document.body.scrollLeft
	    };
	  }
	};

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Paper = __webpack_require__(363);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Paper2.default;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(352);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var rounded = props.rounded;
	  var circle = props.circle;
	  var transitionEnabled = props.transitionEnabled;
	  var zDepth = props.zDepth;
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var paper = _context$muiTheme.paper;
	
	
	  return {
	    root: {
	      color: paper.color,
	      backgroundColor: paper.backgroundColor,
	      transition: transitionEnabled && _transitions2.default.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: baseTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
	      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    }
	  };
	}
	
	var Paper = function (_Component) {
	  (0, _inherits3.default)(Paper, _Component);
	
	  function Paper() {
	    (0, _classCallCheck3.default)(this, Paper);
	    return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Paper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var circle = _props.circle;
	      var rounded = _props.rounded;
	      var style = _props.style;
	      var transitionEnabled = _props.transitionEnabled;
	      var zDepth = _props.zDepth;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
	        children
	      );
	    }
	  }]);
	  return Paper;
	}(_react.Component);
	
	Paper.defaultProps = {
	  circle: false,
	  rounded: true,
	  transitionEnabled: true,
	  zDepth: 1
	};
	Paper.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Paper.propTypes = {
	  /**
	   * Children passed into the paper element.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Set to true to generate a circlular paper container.
	   */
	  circle: _react.PropTypes.bool,
	  /**
	   * By default, the paper container will have a border radius.
	   * Set this to false to generate a container with sharp corners.
	   */
	  rounded: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Set to false to disable CSS transitions for the paper element.
	   */
	  transitionEnabled: _react.PropTypes.bool,
	  /**
	   * This number represents the zDepth of the paper shadow.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = Paper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _shouldUpdate = __webpack_require__(368);
	
	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);
	
	var _shallowEqual = __webpack_require__(336);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _createHelper = __webpack_require__(369);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});
	
	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _createHelper = __webpack_require__(369);
	
	var _createHelper2 = _interopRequireDefault(_createHelper);
	
	var _createEagerFactory = __webpack_require__(372);
	
	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };
	
	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };
	
	      return _class;
	    }(_react.Component);
	  };
	};
	
	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(370).default;
	      /* eslint-enable global-require */
	
	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }
	
	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }
	
	          if (args.length > func.length) {
	            /* eslint-disable */
	            console.error(
	            /* eslint-enable */
	            'Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
	          }
	
	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();
	
	    if (typeof _ret === "object") return _ret.v;
	  }
	
	  return func;
	};
	
	exports.default = createHelper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _getDisplayName = __webpack_require__(371);
	
	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};
	
	exports.default = wrapDisplayName;

/***/ },
/* 371 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }
	
	  if (!Component) {
	    return undefined;
	  }
	
	  return Component.displayName || Component.name || 'Component';
	};
	
	exports.default = getDisplayName;

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEagerElementUtil = __webpack_require__(373);
	
	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);
	
	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(374);
	
	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};
	
	exports.default = createFactory;

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }
	
	  var Component = type;
	
	  if (children) {
	    return _react2.default.createElement(
	      Component,
	      props,
	      children
	    );
	  }
	
	  return _react2.default.createElement(Component, props);
	};
	
	exports.default = createEagerElementUtil;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _isClassComponent = __webpack_require__(375);
	
	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
	};
	
	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },
/* 375 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
	};
	
	exports.default = isClassComponent;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _SvgIcon = __webpack_require__(377);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _SvgIcon2.default;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SvgIcon = function (_Component) {
	  (0, _inherits3.default)(SvgIcon, _Component);
	
	  function SvgIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, SvgIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var color = _props.color;
	      var hoverColor = _props.hoverColor;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var style = _props.style;
	      var viewBox = _props.viewBox;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
	      var _context$muiTheme = this.context.muiTheme;
	      var svgIcon = _context$muiTheme.svgIcon;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	
	
	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);
	
	      return _react2.default.createElement(
	        'svg',
	        (0, _extends3.default)({}, other, {
	          onMouseEnter: this.handleMouseEnter,
	          onMouseLeave: this.handleMouseLeave,
	          style: prepareStyles(mergedStyles),
	          viewBox: viewBox
	        }),
	        children
	      );
	    }
	  }]);
	  return SvgIcon;
	}(_react.Component);
	
	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	} : void 0;
	exports.default = SvgIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 378 */,
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _childUtils = __webpack_require__(380);
	
	var _events = __webpack_require__(351);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _keycode = __webpack_require__(333);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _FocusRipple = __webpack_require__(383);
	
	var _FocusRipple2 = _interopRequireDefault(_FocusRipple);
	
	var _TouchRipple = __webpack_require__(390);
	
	var _TouchRipple2 = _interopRequireDefault(_TouchRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styleInjected = false;
	var listening = false;
	var tabPressed = false;
	
	function injectStyle() {
	  if (!styleInjected) {
	    // Remove inner padding and border in Firefox 4+.
	    var style = document.createElement('style');
	    style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';
	
	    document.body.appendChild(style);
	    styleInjected = true;
	  }
	}
	
	function listenForTabPresses() {
	  if (!listening) {
	    _events2.default.on(window, 'keydown', function (event) {
	      tabPressed = (0, _keycode2.default)(event) === 'tab';
	    });
	    listening = true;
	  }
	}
	
	var EnhancedButton = function (_Component) {
	  (0, _inherits3.default)(EnhancedButton, _Component);
	
	  function EnhancedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, EnhancedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isKeyboardFocused: false }, _this.handleKeyDown = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'enter' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	        if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
	          _this.removeKeyboardFocus(event);
	        }
	      }
	      _this.props.onKeyDown(event);
	    }, _this.handleKeyUp = function (event) {
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        if ((0, _keycode2.default)(event) === 'space' && _this.state.isKeyboardFocused) {
	          _this.handleTouchTap(event);
	        }
	      }
	      _this.props.onKeyUp(event);
	    }, _this.handleBlur = function (event) {
	      _this.cancelFocusTimeout();
	      _this.removeKeyboardFocus(event);
	      _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      if (event) event.persist();
	      if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
	        // setTimeout is needed because the focus event fires first
	        // Wait so that we can capture if this was a keyboard focus
	        // or touch focus
	        _this.focusTimeout = setTimeout(function () {
	          if (tabPressed) {
	            _this.setKeyboardFocus(event);
	            tabPressed = false;
	          }
	        }, 150);
	
	        _this.props.onFocus(event);
	      }
	    }, _this.handleClick = function (event) {
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.props.onClick(event);
	      }
	    }, _this.handleTouchTap = function (event) {
	      _this.cancelFocusTimeout();
	      if (!_this.props.disabled) {
	        tabPressed = false;
	        _this.removeKeyboardFocus(event);
	        _this.props.onTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(EnhancedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var disableKeyboardFocus = _props.disableKeyboardFocus;
	      var keyboardFocused = _props.keyboardFocused;
	
	      if (!disabled && keyboardFocused && !disableKeyboardFocus) {
	        this.setState({ isKeyboardFocused: true });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      injectStyle();
	      listenForTabPresses();
	      if (this.state.isKeyboardFocused) {
	        this.refs.enhancedButton.focus();
	        this.props.onKeyboardFocus(null, true);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        if (nextProps.onKeyboardFocus) {
	          nextProps.onKeyboardFocus(null, false);
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.focusTimeout);
	    }
	  }, {
	    key: 'isKeyboardFocused',
	    value: function isKeyboardFocused() {
	      return this.state.isKeyboardFocused;
	    }
	  }, {
	    key: 'removeKeyboardFocus',
	    value: function removeKeyboardFocus(event) {
	      if (this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: false });
	        this.props.onKeyboardFocus(event, false);
	      }
	    }
	  }, {
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus(event) {
	      if (!this.state.isKeyboardFocused) {
	        this.setState({ isKeyboardFocused: true });
	        this.props.onKeyboardFocus(event, true);
	      }
	    }
	  }, {
	    key: 'cancelFocusTimeout',
	    value: function cancelFocusTimeout() {
	      if (this.focusTimeout) {
	        clearTimeout(this.focusTimeout);
	        this.focusTimeout = null;
	      }
	    }
	  }, {
	    key: 'createButtonChildren',
	    value: function createButtonChildren() {
	      var _props2 = this.props;
	      var centerRipple = _props2.centerRipple;
	      var children = _props2.children;
	      var disabled = _props2.disabled;
	      var disableFocusRipple = _props2.disableFocusRipple;
	      var disableKeyboardFocus = _props2.disableKeyboardFocus;
	      var disableTouchRipple = _props2.disableTouchRipple;
	      var focusRippleColor = _props2.focusRippleColor;
	      var focusRippleOpacity = _props2.focusRippleOpacity;
	      var touchRippleColor = _props2.touchRippleColor;
	      var touchRippleOpacity = _props2.touchRippleOpacity;
	      var isKeyboardFocused = this.state.isKeyboardFocused;
	
	      // Focus Ripple
	
	      var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
	        color: focusRippleColor,
	        opacity: focusRippleOpacity,
	        show: isKeyboardFocused
	      }) : undefined;
	
	      // Touch Ripple
	      var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
	        _TouchRipple2.default,
	        {
	          centerRipple: centerRipple,
	          color: touchRippleColor,
	          opacity: touchRippleOpacity
	        },
	        children
	      ) : undefined;
	
	      return (0, _childUtils.createChildFragment)({
	        focusRipple: focusRipple,
	        touchRipple: touchRipple,
	        children: touchRipple ? undefined : children
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var centerRipple = _props3.centerRipple;
	      var children = _props3.children;
	      var containerElement = _props3.containerElement;
	      var disabled = _props3.disabled;
	      var disableFocusRipple = _props3.disableFocusRipple;
	      var disableKeyboardFocus = _props3.disableKeyboardFocus;
	      var disableTouchRipple = _props3.disableTouchRipple;
	      var focusRippleColor = _props3.focusRippleColor;
	      var focusRippleOpacity = _props3.focusRippleOpacity;
	      var href = _props3.href;
	      var keyboardFocused = _props3.keyboardFocused;
	      var touchRippleColor = _props3.touchRippleColor;
	      var touchRippleOpacity = _props3.touchRippleOpacity;
	      var onBlur = _props3.onBlur;
	      var onClick = _props3.onClick;
	      var onFocus = _props3.onFocus;
	      var onKeyUp = _props3.onKeyUp;
	      var onKeyDown = _props3.onKeyDown;
	      var onKeyboardFocus = _props3.onKeyboardFocus;
	      var onTouchTap = _props3.onTouchTap;
	      var style = _props3.style;
	      var tabIndex = _props3.tabIndex;
	      var type = _props3.type;
	      var other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'onTouchTap', 'style', 'tabIndex', 'type']);
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var enhancedButton = _context$muiTheme.enhancedButton;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        border: 10,
	        boxSizing: 'border-box',
	        display: 'inline-block',
	        fontFamily: this.context.muiTheme.baseTheme.fontFamily,
	        WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
	        cursor: disabled ? 'default' : 'pointer',
	        textDecoration: 'none',
	        margin: 0,
	        padding: 0,
	        outline: 'none',
	        fontSize: 'inherit',
	        fontWeight: 'inherit',
	        /**
	         * This is needed so that ripples do not bleed
	         * past border radius.
	         * See: http://stackoverflow.com/questions/17298739/
	         * css-overflow-hidden-not-working-in-chrome-when-parent-has-border-radius-and-chil
	         */
	        transform: disableTouchRipple && disableFocusRipple ? null : 'translate(0, 0)',
	        verticalAlign: href ? 'middle' : null
	      }, style);
	
	      // Passing both background:none & backgroundColor can break due to object iteration order
	      if (!mergedStyles.backgroundColor && !mergedStyles.background) {
	        mergedStyles.background = 'none';
	      }
	
	      if (disabled && href) {
	        return _react2.default.createElement(
	          'span',
	          (0, _extends3.default)({}, other, {
	            style: mergedStyles
	          }),
	          children
	        );
	      }
	
	      var buttonProps = (0, _extends3.default)({}, other, {
	        style: prepareStyles(mergedStyles),
	        ref: 'enhancedButton',
	        disabled: disabled,
	        href: href,
	        onBlur: this.handleBlur,
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onKeyUp: this.handleKeyUp,
	        onKeyDown: this.handleKeyDown,
	        onTouchTap: this.handleTouchTap,
	        tabIndex: tabIndex,
	        type: type
	      });
	      var buttonChildren = this.createButtonChildren();
	
	      if (_react2.default.isValidElement(containerElement)) {
	        return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
	      }
	
	      return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
	    }
	  }]);
	  return EnhancedButton;
	}(_react.Component);
	
	EnhancedButton.defaultProps = {
	  containerElement: 'button',
	  onBlur: function onBlur() {},
	  onClick: function onClick() {},
	  onFocus: function onFocus() {},
	  onKeyDown: function onKeyDown() {},
	  onKeyUp: function onKeyUp() {},
	  onKeyboardFocus: function onKeyboardFocus() {},
	  onMouseDown: function onMouseDown() {},
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  onMouseUp: function onMouseUp() {},
	  onTouchEnd: function onTouchEnd() {},
	  onTouchStart: function onTouchStart() {},
	  onTouchTap: function onTouchTap() {},
	  tabIndex: 0,
	  type: 'button'
	};
	EnhancedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? EnhancedButton.propTypes = {
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  containerElement: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	  disableFocusRipple: _react.PropTypes.bool,
	  disableKeyboardFocus: _react.PropTypes.bool,
	  disableTouchRipple: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  focusRippleColor: _react.PropTypes.string,
	  focusRippleOpacity: _react.PropTypes.number,
	  href: _react.PropTypes.string,
	  keyboardFocused: _react.PropTypes.bool,
	  onBlur: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onKeyDown: _react.PropTypes.func,
	  onKeyUp: _react.PropTypes.func,
	  onKeyboardFocus: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseUp: _react.PropTypes.func,
	  onTouchEnd: _react.PropTypes.func,
	  onTouchStart: _react.PropTypes.func,
	  onTouchTap: _react.PropTypes.func,
	  style: _react.PropTypes.object,
	  tabIndex: _react.PropTypes.number,
	  touchRippleColor: _react.PropTypes.string,
	  touchRippleOpacity: _react.PropTypes.number,
	  type: _react.PropTypes.string
	} : void 0;
	exports.default = EnhancedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createChildFragment = createChildFragment;
	exports.extendChildren = extendChildren;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCreateFragment = __webpack_require__(381);
	
	var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createChildFragment(fragments) {
	  var newFragments = {};
	  var validChildrenCount = 0;
	  var firstKey = void 0;
	
	  // Only create non-empty key fragments
	  for (var key in fragments) {
	    var currentChild = fragments[key];
	
	    if (currentChild) {
	      if (validChildrenCount === 0) firstKey = key;
	      newFragments[key] = currentChild;
	      validChildrenCount++;
	    }
	  }
	
	  if (validChildrenCount === 0) return undefined;
	  if (validChildrenCount === 1) return newFragments[firstKey];
	  return (0, _reactAddonsCreateFragment2.default)(newFragments);
	}
	
	function extendChildren(children, extendedProps, extendedChildren) {
	  return _react2.default.isValidElement(children) ? _react2.default.Children.map(children, function (child) {
	    var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;
	
	    var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;
	
	    return _react2.default.cloneElement(child, newProps, newChildren);
	  }) : children;
	}

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(382).create;

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactFragment
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(7);
	
	var ReactChildren = __webpack_require__(5);
	var ReactElement = __webpack_require__(9);
	
	var emptyFunction = __webpack_require__(12);
	var invariant = __webpack_require__(8);
	var warning = __webpack_require__(11);
	
	/**
	 * We used to allow keyed objects to serve as a collection of ReactElements,
	 * or nested sets. This allowed us a way to explicitly key a set or fragment of
	 * components. This is now being replaced with an opaque data structure.
	 * The upgrade path is to call React.addons.createFragment({ key: value }) to
	 * create a keyed fragment. The resulting data structure is an array.
	 */
	
	var numericPropertyRegex = /^\d+$/;
	
	var warnedAboutNumeric = false;
	
	var ReactFragment = {
	  /**
	   * Wrap a keyed object in an opaque proxy that warns you if you access any
	   * of its properties.
	   * See https://facebook.github.io/react/docs/create-fragment.html
	   */
	  create: function (object) {
	    if (typeof object !== 'object' || !object || Array.isArray(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment only accepts a single object. Got: %s', object) : void 0;
	      return object;
	    }
	    if (ReactElement.isValidElement(object)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment does not accept a ReactElement ' + 'without a wrapper object.') : void 0;
	      return object;
	    }
	
	    !(object.nodeType !== 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.') : _prodInvariant('0') : void 0;
	
	    var result = [];
	
	    for (var key in object) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (!warnedAboutNumeric && numericPropertyRegex.test(key)) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React.addons.createFragment(...): Child objects should have ' + 'non-numeric keys so ordering is preserved.') : void 0;
	          warnedAboutNumeric = true;
	        }
	      }
	      ReactChildren.mapIntoWithKeyPrefixInternal(object[key], result, key, emptyFunction.thatReturnsArgument);
	    }
	
	    return result;
	  }
	};
	
	module.exports = ReactFragment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(336);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(384);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _ScaleIn = __webpack_require__(385);
	
	var _ScaleIn2 = _interopRequireDefault(_ScaleIn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pulsateDuration = 750;
	
	var FocusRipple = function (_Component) {
	  (0, _inherits3.default)(FocusRipple, _Component);
	
	  function FocusRipple() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FocusRipple);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
	      var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
	      if (!innerCircle) return;
	
	      var startScale = 'scale(1)';
	      var endScale = 'scale(0.85)';
	      var currentScale = innerCircle.style.transform || startScale;
	      var nextScale = currentScale === startScale ? endScale : startScale;
	
	      _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
	      _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FocusRipple, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this.props.show) {
	        this.setRippleSize();
	        this.pulsate();
	      } else {
	        if (this.timeout) clearTimeout(this.timeout);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timeout);
	    }
	  }, {
	    key: 'getRippleElement',
	    value: function getRippleElement(props) {
	      var color = props.color;
	      var innerStyle = props.innerStyle;
	      var opacity = props.opacity;
	      var _context$muiTheme = this.context.muiTheme;
	      var prepareStyles = _context$muiTheme.prepareStyles;
	      var ripple = _context$muiTheme.ripple;
	
	
	      var innerStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        opacity: opacity ? opacity : 0.16,
	        backgroundColor: color || ripple.color,
	        transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
	      }, innerStyle);
	
	      return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
	      var height = el.offsetHeight;
	      var width = el.offsetWidth;
	      var size = Math.max(height, width);
	
	      var oldTop = 0;
	      // For browsers that don't support endsWith()
	      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
	        oldTop = parseInt(el.style.top);
	      }
	      el.style.height = size + 'px';
	      el.style.top = height / 2 - size / 2 + oldTop + 'px';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var show = _props.show;
	      var style = _props.style;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({
	        height: '100%',
	        width: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }, style);
	
	      var ripple = show ? this.getRippleElement(this.props) : null;
	
	      return _react2.default.createElement(
	        _ScaleIn2.default,
	        {
	          maxScale: 0.85,
	          style: mergedRootStyles
	        },
	        ripple
	      );
	    }
	  }]);
	  return FocusRipple;
	}(_react.Component);
	
	FocusRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FocusRipple.propTypes = {
	  color: _react.PropTypes.string,
	  innerStyle: _react.PropTypes.object,
	  opacity: _react.PropTypes.number,
	  show: _react.PropTypes.bool,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FocusRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 384 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  set: function set(style, key, value) {
	    style[key] = value;
	  }
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsTransitionGroup = __webpack_require__(386);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _ScaleInChild = __webpack_require__(389);
	
	var _ScaleInChild2 = _interopRequireDefault(_ScaleInChild);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleIn = function (_Component) {
	  (0, _inherits3.default)(ScaleIn, _Component);
	
	  function ScaleIn() {
	    (0, _classCallCheck3.default)(this, ScaleIn);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleIn, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var childStyle = _props.childStyle;
	      var enterDelay = _props.enterDelay;
	      var maxScale = _props.maxScale;
	      var minScale = _props.minScale;
	      var style = _props.style;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'relative',
	        overflow: 'hidden',
	        height: '100%'
	      }, style);
	
	      var newChildren = _react2.default.Children.map(children, function (child) {
	        return _react2.default.createElement(
	          _ScaleInChild2.default,
	          {
	            key: child.key,
	            enterDelay: enterDelay,
	            maxScale: maxScale,
	            minScale: minScale,
	            style: childStyle
	          },
	          child
	        );
	      });
	
	      return _react2.default.createElement(
	        _reactAddonsTransitionGroup2.default,
	        (0, _extends3.default)({}, other, {
	          style: prepareStyles(mergedRootStyles),
	          component: 'div'
	        }),
	        newChildren
	      );
	    }
	  }]);
	  return ScaleIn;
	}(_react.Component);
	
	ScaleIn.defaultProps = {
	  enterDelay: 0
	};
	ScaleIn.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleIn.propTypes = {
	  childStyle: _react.PropTypes.object,
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleIn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(387);

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionGroup
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(4);
	
	var React = __webpack_require__(2);
	var ReactInstanceMap = __webpack_require__(119);
	var ReactTransitionChildMapping = __webpack_require__(388);
	
	var emptyFunction = __webpack_require__(12);
	
	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	var ReactTransitionGroup = React.createClass({
	  displayName: 'ReactTransitionGroup',
	
	  propTypes: {
	    component: React.PropTypes.any,
	    childFactory: React.PropTypes.func
	  },
	
	  getDefaultProps: function () {
	    return {
	      component: 'span',
	      childFactory: emptyFunction.thatReturnsArgument
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(this.props.children)
	    };
	  },
	
	  componentWillMount: function () {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  },
	
	  componentDidMount: function () {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    var nextChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    }
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  },
	
	  componentDidUpdate: function () {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  },
	
	  performAppear: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillAppear) {
	      component.componentWillAppear(this._handleDoneAppearing.bind(this, key));
	    } else {
	      this._handleDoneAppearing(key);
	    }
	  },
	
	  _handleDoneAppearing: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidAppear) {
	      component.componentDidAppear();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully appeared. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performEnter: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	
	    if (component.componentWillEnter) {
	      component.componentWillEnter(this._handleDoneEntering.bind(this, key));
	    } else {
	      this._handleDoneEntering(key);
	    }
	  },
	
	  _handleDoneEntering: function (key) {
	    var component = this.refs[key];
	    if (component.componentDidEnter) {
	      component.componentDidEnter();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	      // This was removed before it had fully entered. Remove it.
	      this.performLeave(key);
	    }
	  },
	
	  performLeave: function (key) {
	    this.currentlyTransitioningKeys[key] = true;
	
	    var component = this.refs[key];
	    if (component.componentWillLeave) {
	      component.componentWillLeave(this._handleDoneLeaving.bind(this, key));
	    } else {
	      // Note that this is somewhat dangerous b/c it calls setState()
	      // again, effectively mutating the component before all the work
	      // is done.
	      this._handleDoneLeaving(key);
	    }
	  },
	
	  _handleDoneLeaving: function (key) {
	    var component = this.refs[key];
	
	    if (component.componentDidLeave) {
	      component.componentDidLeave();
	    }
	
	    delete this.currentlyTransitioningKeys[key];
	
	    var currentChildMapping;
	    if (process.env.NODE_ENV !== 'production') {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children, ReactInstanceMap.get(this)._debugID);
	    } else {
	      currentChildMapping = ReactTransitionChildMapping.getChildMapping(this.props.children);
	    }
	
	    if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	      // This entered again before it fully left. Add it again.
	      this.performEnter(key);
	    } else {
	      this.setState(function (state) {
	        var newChildren = _assign({}, state.children);
	        delete newChildren[key];
	        return { children: newChildren };
	      });
	    }
	  },
	
	  render: function () {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	
	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return React.createElement(this.props.component, props, childrenToRender);
	  }
	});
	
	module.exports = ReactTransitionGroup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactTransitionChildMapping
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(128);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      return flattenChildren(children, selfDebugID);
	    }
	
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _autoPrefix = __webpack_require__(384);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ScaleInChild = function (_Component) {
	  (0, _inherits3.default)(ScaleInChild, _Component);
	
	  function ScaleInChild() {
	    (0, _classCallCheck3.default)(this, ScaleInChild);
	    return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ScaleInChild, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');
	
	      this.leaveTimer = setTimeout(callback, 450);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '1';
	      _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	
	      style.opacity = '0';
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	
	      this.enterTimer = setTimeout(callback, this.props.enterDelay);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var enterDelay = _props.enterDelay;
	      var maxScale = _props.maxScale;
	      var minScale = _props.minScale;
	      var style = _props.style;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
	        position: 'absolute',
	        height: '100%',
	        width: '100%',
	        top: 0,
	        left: 0,
	        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
	      }, style);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
	        children
	      );
	    }
	  }]);
	  return ScaleInChild;
	}(_react.Component);
	
	ScaleInChild.defaultProps = {
	  enterDelay: 0,
	  maxScale: 1,
	  minScale: 0
	};
	ScaleInChild.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? ScaleInChild.propTypes = {
	  children: _react.PropTypes.node,
	  enterDelay: _react.PropTypes.number,
	  maxScale: _react.PropTypes.number,
	  minScale: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = ScaleInChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(266);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _toArray2 = __webpack_require__(349);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsTransitionGroup = __webpack_require__(386);
	
	var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);
	
	var _dom = __webpack_require__(361);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _CircleRipple = __webpack_require__(391);
	
	var _CircleRipple2 = _interopRequireDefault(_CircleRipple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Remove the first element of the array
	var shift = function shift(_ref) {
	  var _ref2 = (0, _toArray3.default)(_ref);
	
	  var newArray = _ref2.slice(1);
	
	  return newArray;
	};
	
	var TouchRipple = function (_Component) {
	  (0, _inherits3.default)(TouchRipple, _Component);
	
	  function TouchRipple(props, context) {
	    (0, _classCallCheck3.default)(this, TouchRipple);
	
	    // Touch start produces a mouse down event for compat reasons. To avoid
	    // showing ripples twice we skip showing a ripple for the first mouse down
	    // after a touch start. Note we don't store ignoreNextMouseDown in this.state
	    // to avoid re-rendering when we change it.
	    var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));
	
	    _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.start(event, false);
	      }
	    };
	
	    _this.handleMouseUp = function () {
	      _this.end();
	    };
	
	    _this.handleMouseLeave = function () {
	      _this.end();
	    };
	
	    _this.handleTouchStart = function (event) {
	      event.stopPropagation();
	      // If the user is swiping (not just tapping), save the position so we can
	      // abort ripples if the user appears to be scrolling.
	      if (_this.props.abortOnScroll && event.touches) {
	        _this.startListeningForScrollAbort(event);
	        _this.startTime = Date.now();
	      }
	      _this.start(event, true);
	    };
	
	    _this.handleTouchEnd = function () {
	      _this.end();
	    };
	
	    _this.handleTouchMove = function (event) {
	      // Stop trying to abort if we're already 300ms into the animation
	      var timeSinceStart = Math.abs(Date.now() - _this.startTime);
	      if (timeSinceStart > 300) {
	        _this.stopListeningForScrollAbort();
	        return;
	      }
	
	      // If the user is scrolling...
	      var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
	      var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
	      // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
	      if (deltaY > 6 || deltaX > 6) {
	        var currentRipples = _this.state.ripples;
	        var ripple = currentRipples[0];
	        // This clone will replace the ripple in ReactTransitionGroup with a
	        // version that will disappear immediately when removed from the DOM
	        var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
	        // Remove the old ripple and replace it with the new updated one
	        currentRipples = shift(currentRipples);
	        currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
	        _this.setState({ ripples: currentRipples }, function () {
	          // Call end after we've set the ripple to abort otherwise the setState
	          // in end() merges with this and the ripple abort fails
	          _this.end();
	        });
	      }
	    };
	
	    _this.ignoreNextMouseDown = false;
	
	    _this.state = {
	      // This prop allows us to only render the ReactTransitionGroup
	      // on the first click of the component, making the inital render faster.
	      hasRipples: false,
	      nextKey: 0,
	      ripples: []
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(TouchRipple, [{
	    key: 'start',
	    value: function start(event, isRippleTouchGenerated) {
	      var theme = this.context.muiTheme.ripple;
	
	      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
	        this.ignoreNextMouseDown = false;
	        return;
	      }
	
	      var ripples = this.state.ripples;
	
	      // Add a ripple to the ripples array
	      ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
	        key: this.state.nextKey,
	        style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
	        color: this.props.color || theme.color,
	        opacity: this.props.opacity,
	        touchGenerated: isRippleTouchGenerated
	      })]);
	
	      this.ignoreNextMouseDown = isRippleTouchGenerated;
	      this.setState({
	        hasRipples: true,
	        nextKey: this.state.nextKey + 1,
	        ripples: ripples
	      });
	    }
	  }, {
	    key: 'end',
	    value: function end() {
	      var currentRipples = this.state.ripples;
	      this.setState({
	        ripples: shift(currentRipples)
	      });
	      if (this.props.abortOnScroll) {
	        this.stopListeningForScrollAbort();
	      }
	    }
	
	    // Check if the user seems to be scrolling and abort the animation if so
	
	  }, {
	    key: 'startListeningForScrollAbort',
	    value: function startListeningForScrollAbort(event) {
	      this.firstTouchY = event.touches[0].clientY;
	      this.firstTouchX = event.touches[0].clientX;
	      // Note that when scolling Chrome throttles this event to every 200ms
	      // Also note we don't listen for scroll events directly as there's no general
	      // way to cover cases like scrolling within containers on the page
	      document.body.addEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'stopListeningForScrollAbort',
	    value: function stopListeningForScrollAbort() {
	      document.body.removeEventListener('touchmove', this.handleTouchMove);
	    }
	  }, {
	    key: 'getRippleStyle',
	    value: function getRippleStyle(event) {
	      var el = _reactDom2.default.findDOMNode(this);
	      var elHeight = el.offsetHeight;
	      var elWidth = el.offsetWidth;
	      var offset = _dom2.default.offset(el);
	      var isTouchEvent = event.touches && event.touches.length;
	      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
	      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
	      var pointerX = pageX - offset.left;
	      var pointerY = pageY - offset.top;
	      var topLeftDiag = this.calcDiag(pointerX, pointerY);
	      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
	      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
	      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
	      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
	      var rippleSize = rippleRadius * 2;
	      var left = pointerX - rippleRadius;
	      var top = pointerY - rippleRadius;
	
	      return {
	        directionInvariant: true,
	        height: rippleSize,
	        width: rippleSize,
	        top: top,
	        left: left
	      };
	    }
	  }, {
	    key: 'calcDiag',
	    value: function calcDiag(a, b) {
	      return Math.sqrt(a * a + b * b);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var style = _props.style;
	      var _state = this.state;
	      var hasRipples = _state.hasRipples;
	      var ripples = _state.ripples;
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var rippleGroup = void 0;
	
	      if (hasRipples) {
	        var mergedStyles = (0, _simpleAssign2.default)({
	          height: '100%',
	          width: '100%',
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden'
	        }, style);
	
	        rippleGroup = _react2.default.createElement(
	          _reactAddonsTransitionGroup2.default,
	          { style: prepareStyles(mergedStyles) },
	          ripples
	        );
	      }
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseUp: this.handleMouseUp,
	          onMouseDown: this.handleMouseDown,
	          onMouseLeave: this.handleMouseLeave,
	          onTouchStart: this.handleTouchStart,
	          onTouchEnd: this.handleTouchEnd
	        },
	        rippleGroup,
	        children
	      );
	    }
	  }]);
	  return TouchRipple;
	}(_react.Component);
	
	TouchRipple.defaultProps = {
	  abortOnScroll: true
	};
	TouchRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? TouchRipple.propTypes = {
	  abortOnScroll: _react.PropTypes.bool,
	  centerRipple: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = TouchRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _shallowEqual = __webpack_require__(336);
	
	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);
	
	var _autoPrefix = __webpack_require__(384);
	
	var _autoPrefix2 = _interopRequireDefault(_autoPrefix);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CircleRipple = function (_Component) {
	  (0, _inherits3.default)(CircleRipple, _Component);
	
	  function CircleRipple() {
	    (0, _classCallCheck3.default)(this, CircleRipple);
	    return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(CircleRipple, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return !(0, _shallowEqual2.default)(this.props, nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.enterTimer);
	      clearTimeout(this.leaveTimer);
	    }
	  }, {
	    key: 'componentWillAppear',
	    value: function componentWillAppear(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentWillEnter',
	    value: function componentWillEnter(callback) {
	      this.initializeAnimation(callback);
	    }
	  }, {
	    key: 'componentDidAppear',
	    value: function componentDidAppear() {
	      this.animate();
	    }
	  }, {
	    key: 'componentDidEnter',
	    value: function componentDidEnter() {
	      this.animate();
	    }
	  }, {
	    key: 'componentWillLeave',
	    value: function componentWillLeave(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = 0;
	      // If the animation is aborted, remove from the DOM immediately
	      var removeAfter = this.props.aborted ? 0 : 2000;
	      this.enterTimer = setTimeout(callback, removeAfter);
	    }
	  }, {
	    key: 'animate',
	    value: function animate() {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
	      _autoPrefix2.default.set(style, 'transition', transitionValue);
	      _autoPrefix2.default.set(style, 'transform', 'scale(1)');
	    }
	  }, {
	    key: 'initializeAnimation',
	    value: function initializeAnimation(callback) {
	      var style = _reactDom2.default.findDOMNode(this).style;
	      style.opacity = this.props.opacity;
	      _autoPrefix2.default.set(style, 'transform', 'scale(0)');
	      this.leaveTimer = setTimeout(callback, 0);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var aborted = _props.aborted;
	      var color = _props.color;
	      var opacity = _props.opacity;
	      var style = _props.style;
	      var touchGenerated = _props.touchGenerated;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	
	      var mergedStyles = (0, _simpleAssign2.default)({
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        height: '100%',
	        width: '100%',
	        borderRadius: '50%',
	        backgroundColor: color
	      }, style);
	
	      return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
	    }
	  }]);
	  return CircleRipple;
	}(_react.Component);
	
	CircleRipple.defaultProps = {
	  opacity: 0.1,
	  aborted: false
	};
	CircleRipple.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? CircleRipple.propTypes = {
	  aborted: _react.PropTypes.bool,
	  color: _react.PropTypes.string,
	  opacity: _react.PropTypes.number,
	  style: _react.PropTypes.object,
	  touchGenerated: _react.PropTypes.bool
	} : void 0;
	exports.default = CircleRipple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _IconButton = __webpack_require__(393);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _IconButton2.default;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _propTypes = __webpack_require__(352);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _EnhancedButton = __webpack_require__(379);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _FontIcon = __webpack_require__(394);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	var _Tooltip = __webpack_require__(396);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _childUtils = __webpack_require__(380);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var baseTheme = context.muiTheme.baseTheme;
	
	
	  return {
	    root: {
	      position: 'relative',
	      boxSizing: 'border-box',
	      overflow: 'visible',
	      transition: _transitions2.default.easeOut(),
	      padding: baseTheme.spacing.iconSize / 2,
	      width: baseTheme.spacing.iconSize * 2,
	      height: baseTheme.spacing.iconSize * 2,
	      fontSize: 0
	    },
	    tooltip: {
	      boxSizing: 'border-box'
	    },
	    overlay: {
	      position: 'relative',
	      top: 0,
	      width: '100%',
	      height: '100%',
	      background: baseTheme.palette.disabledColor
	    },
	    disabled: {
	      color: baseTheme.palette.disabledColor,
	      fill: baseTheme.palette.disabledColor,
	      cursor: 'not-allowed'
	    }
	  };
	}
	
	var IconButton = function (_Component) {
	  (0, _inherits3.default)(IconButton, _Component);
	
	  function IconButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, IconButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      tooltipShown: false
	    }, _this.handleBlur = function (event) {
	      _this.hideTooltip();
	      if (_this.props.onBlur) _this.props.onBlur(event);
	    }, _this.handleFocus = function (event) {
	      _this.showTooltip();
	      if (_this.props.onFocus) _this.props.onFocus(event);
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.refs.button.isKeyboardFocused()) _this.hideTooltip();
	      if (_this.props.onMouseLeave) _this.props.onMouseLeave(event);
	    }, _this.handleMouseOut = function (event) {
	      if (_this.props.disabled) _this.hideTooltip();
	      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.showTooltip();
	      if (_this.props.onMouseEnter) _this.props.onMouseEnter(event);
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      if (keyboardFocused && !_this.props.disabled) {
	        _this.showTooltip();
	        if (_this.props.onFocus) _this.props.onFocus(event);
	      } else {
	        _this.hideTooltip();
	        if (_this.props.onBlur) _this.props.onBlur(event);
	      }
	
	      if (_this.props.onKeyboardFocus) {
	        _this.props.onKeyboardFocus(event, keyboardFocused);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(IconButton, [{
	    key: 'setKeyboardFocus',
	    value: function setKeyboardFocus() {
	      this.refs.button.setKeyboardFocus();
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      if (this.props.tooltip) {
	        this.setState({ tooltipShown: true });
	      }
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      if (this.props.tooltip) this.setState({ tooltipShown: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var disableTouchRipple = _props.disableTouchRipple;
	      var children = _props.children;
	      var iconClassName = _props.iconClassName;
	      var onKeyboardFocus = _props.onKeyboardFocus;
	      var tooltip = _props.tooltip;
	      var tooltipPositionProp = _props.tooltipPosition;
	      var tooltipStyles = _props.tooltipStyles;
	      var touch = _props.touch;
	      var iconStyle = _props.iconStyle;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'disableTouchRipple', 'children', 'iconClassName', 'onKeyboardFocus', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);
	
	      var fonticon = void 0;
	
	      var styles = getStyles(this.props, this.context);
	      var tooltipPosition = tooltipPositionProp.split('-');
	
	      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
	        ref: 'tooltip',
	        label: tooltip,
	        show: this.state.tooltipShown,
	        touch: touch,
	        style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
	        verticalPosition: tooltipPosition[0],
	        horizontalPosition: tooltipPosition[1]
	      }) : null;
	
	      if (iconClassName) {
	        var iconHoverColor = iconStyle.iconHoverColor;
	        var iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);
	
	
	        fonticon = _react2.default.createElement(
	          _FontIcon2.default,
	          {
	            className: iconClassName,
	            hoverColor: disabled ? null : iconHoverColor,
	            style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
	            color: this.context.muiTheme.baseTheme.palette.textColor
	          },
	          children
	        );
	      }
	
	      var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;
	
	      return _react2.default.createElement(
	        _EnhancedButton2.default,
	        (0, _extends3.default)({}, other, {
	          ref: 'button',
	          centerRipple: true,
	          disabled: disabled,
	          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
	          disableTouchRipple: disableTouchRipple,
	          onBlur: this.handleBlur,
	          onFocus: this.handleFocus,
	          onMouseLeave: this.handleMouseLeave,
	          onMouseEnter: this.handleMouseEnter,
	          onMouseOut: this.handleMouseOut,
	          onKeyboardFocus: this.handleKeyboardFocus
	        }),
	        tooltipElement,
	        fonticon,
	        (0, _childUtils.extendChildren)(children, {
	          style: childrenStyle
	        })
	      );
	    }
	  }]);
	  return IconButton;
	}(_react.Component);
	
	IconButton.muiName = 'IconButton';
	IconButton.defaultProps = {
	  disabled: false,
	  disableTouchRipple: false,
	  iconStyle: {},
	  tooltipPosition: 'bottom-center',
	  touch: false
	};
	IconButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
	  /**
	   * Can be used to pass a `FontIcon` element as the icon for the button.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the element's ripple effect will be disabled.
	   */
	  disableTouchRipple: _react.PropTypes.bool,
	  /**
	   * If true, the element will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * The CSS class name of the icon. Used for setting the icon with a stylesheet.
	   */
	  iconClassName: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the icon element.
	   */
	  iconStyle: _react.PropTypes.object,
	  /** @ignore */
	  onBlur: _react.PropTypes.func,
	  /** @ignore */
	  onFocus: _react.PropTypes.func,
	  /**
	   * Callback function fired when the element is focused or blurred by the keyboard.
	   *
	   * @param {object} event `focus` or `blur` event targeting the element.
	   * @param {boolean} keyboardFocused Indicates whether the element is focused.
	   */
	  onKeyboardFocus: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseOut: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The text to supply to the element's tooltip.
	   */
	  tooltip: _react.PropTypes.node,
	  /**
	   * The vertical and horizontal positions, respectively, of the element's tooltip.
	   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
	   * "bottom-left", and "top-left".
	   */
	  tooltipPosition: _propTypes2.default.cornersAndCenter,
	  /**
	   * Override the inline-styles of the tooltip element.
	   */
	  tooltipStyles: _react.PropTypes.object,
	  /**
	   * If true, increase the tooltip element's size.  Useful for increasing tooltip
	   * readability on mobile devices.
	   */
	  touch: _react.PropTypes.bool
	} : void 0;
	exports.default = IconButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _FontIcon = __webpack_require__(395);
	
	var _FontIcon2 = _interopRequireDefault(_FontIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _FontIcon2.default;

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var color = props.color;
	  var hoverColor = props.hoverColor;
	  var baseTheme = context.muiTheme.baseTheme;
	
	  var offColor = color || baseTheme.palette.textColor;
	  var onColor = hoverColor || offColor;
	
	  return {
	    root: {
	      color: state.hovered ? onColor : offColor,
	      position: 'relative',
	      fontSize: baseTheme.spacing.iconSize,
	      display: 'inline-block',
	      userSelect: 'none',
	      transition: _transitions2.default.easeOut()
	    }
	  };
	}
	
	var FontIcon = function (_Component) {
	  (0, _inherits3.default)(FontIcon, _Component);
	
	  function FontIcon() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, FontIcon);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: false });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      // hover is needed only when a hoverColor is defined
	      if (_this.props.hoverColor !== undefined) {
	        _this.setState({ hovered: true });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(FontIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var hoverColor = _props.hoverColor;
	      var onMouseLeave = _props.onMouseLeave;
	      var onMouseEnter = _props.onMouseEnter;
	      var style = _props.style;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
	      }));
	    }
	  }]);
	  return FontIcon;
	}(_react.Component);
	
	FontIcon.muiName = 'FontIcon';
	FontIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {}
	};
	FontIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? FontIcon.propTypes = {
	  /**
	   * This is the font color of the font icon. If not specified,
	   * this component will default to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = FontIcon;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context, state) {
	  var verticalPosition = props.verticalPosition;
	  var horizontalPosition = props.horizontalPosition;
	  var touchMarginOffset = props.touch ? 10 : 0;
	  var touchOffsetTop = props.touch ? -20 : -10;
	  var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;
	
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var zIndex = _context$muiTheme.zIndex;
	  var tooltip = _context$muiTheme.tooltip;
	
	
	  var styles = {
	    root: {
	      position: 'absolute',
	      fontFamily: baseTheme.fontFamily,
	      fontSize: '10px',
	      lineHeight: '22px',
	      padding: '0 8px',
	      zIndex: zIndex.tooltip,
	      color: tooltip.color,
	      overflow: 'hidden',
	      top: -10000,
	      borderRadius: 2,
	      userSelect: 'none',
	      opacity: 0,
	      right: horizontalPosition === 'left' ? 12 : null,
	      left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : null,
	      transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    label: {
	      position: 'relative',
	      whiteSpace: 'nowrap'
	    },
	    ripple: {
	      position: 'absolute',
	      left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
	      top: verticalPosition === 'bottom' ? 0 : '100%',
	      transform: 'translate(-50%, -50%)',
	      borderRadius: '50%',
	      backgroundColor: 'transparent',
	      transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    },
	    rootWhenShown: {
	      top: verticalPosition === 'top' ? touchOffsetTop : 36,
	      opacity: 0.9,
	      transform: 'translate(0px, ' + offset + 'px)',
	      transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
	    },
	    rootWhenTouched: {
	      fontSize: '14px',
	      lineHeight: '32px',
	      padding: '0 16px'
	    },
	    rippleWhenShown: {
	      backgroundColor: tooltip.rippleBackgroundColor,
	      transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
	    }
	  };
	
	  return styles;
	}
	
	var Tooltip = function (_Component) {
	  (0, _inherits3.default)(Tooltip, _Component);
	
	  function Tooltip() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, Tooltip);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      offsetWidth: null
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setRippleSize();
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.setTooltipPosition();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.setRippleSize();
	    }
	  }, {
	    key: 'setRippleSize',
	    value: function setRippleSize() {
	      var ripple = this.refs.ripple;
	      var tooltip = this.refs.tooltip;
	      var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
	      var tooltipHeight = parseInt(tooltip.offsetHeight, 10);
	
	      var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
	      if (this.props.show) {
	        ripple.style.height = rippleDiameter + 'px';
	        ripple.style.width = rippleDiameter + 'px';
	      } else {
	        ripple.style.width = '0px';
	        ripple.style.height = '0px';
	      }
	    }
	  }, {
	    key: 'setTooltipPosition',
	    value: function setTooltipPosition() {
	      this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var horizontalPosition = _props.horizontalPosition;
	      var label = _props.label;
	      var show = _props.show;
	      var touch = _props.touch;
	      var verticalPosition = _props.verticalPosition;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	
	      return _react2.default.createElement(
	        'div',
	        (0, _extends3.default)({}, other, {
	          ref: 'tooltip',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
	        }),
	        _react2.default.createElement('div', {
	          ref: 'ripple',
	          style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
	        }),
	        _react2.default.createElement(
	          'span',
	          { style: prepareStyles(styles.label) },
	          label
	        )
	      );
	    }
	  }]);
	  return Tooltip;
	}(_react.Component);
	
	Tooltip.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? Tooltip.propTypes = {
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  horizontalPosition: _react.PropTypes.oneOf(['left', 'right', 'center']),
	  label: _react.PropTypes.node.isRequired,
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  touch: _react.PropTypes.bool,
	  verticalPosition: _react.PropTypes.oneOf(['top', 'bottom'])
	} : void 0;
	exports.default = Tooltip;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var InputPage_1 = __webpack_require__(742);
	var TimeDialog_1 = __webpack_require__(749);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", null, 
	            React.createElement(InputPage_1.InputPage, __assign({}, this.props)), 
	            React.createElement(TimeDialog_1.TimeDialog, __assign({}, this.props))));
	    };
	    return App;
	}(React.Component));
	exports.App = App;


/***/ },
/* 742 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var Toolbar_1 = __webpack_require__(743);
	var RaisedButton_1 = __webpack_require__(747);
	var InputPage = (function (_super) {
	    __extends(InputPage, _super);
	    function InputPage() {
	        _super.apply(this, arguments);
	    }
	    InputPage.prototype.render = function () {
	        return (React.createElement("div", null, 
	            React.createElement(Toolbar_1.Toolbar, __assign({}, this.props)), 
	            React.createElement(RaisedButton_1.default, {label: "Default"})));
	    };
	    return InputPage;
	}(React.Component));
	exports.InputPage = InputPage;


/***/ },
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppBar_1 = __webpack_require__(744);
	var Toolbar = (function (_super) {
	    __extends(Toolbar, _super);
	    function Toolbar() {
	        _super.apply(this, arguments);
	    }
	    Toolbar.prototype.render = function () {
	        return (React.createElement(AppBar_1.default, {title: this.formatCurrentDate(), showMenuIconButton: false}));
	    };
	    Toolbar.prototype.formatCurrentDate = function () {
	        var date = this.props.value.currentDate;
	        return date.getMonth() + 1 + "月" + date.getDate() + "日";
	    };
	    return Toolbar;
	}(React.Component));
	exports.Toolbar = Toolbar;


/***/ },
/* 744 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _AppBar = __webpack_require__(745);
	
	var _AppBar2 = _interopRequireDefault(_AppBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _AppBar2.default;

/***/ },
/* 745 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(318);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	exports.getStyles = getStyles;
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _IconButton = __webpack_require__(392);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _menu = __webpack_require__(746);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _Paper = __webpack_require__(362);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	var _propTypes = __webpack_require__(352);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _warning = __webpack_require__(315);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props, context) {
	  var _context$muiTheme = context.muiTheme;
	  var appBar = _context$muiTheme.appBar;
	  var iconButtonSize = _context$muiTheme.button.iconButtonSize;
	  var zIndex = _context$muiTheme.zIndex;
	
	
	  var flatButtonSize = 36;
	
	  var styles = {
	    root: {
	      position: 'relative',
	      zIndex: zIndex.appBar,
	      width: '100%',
	      display: 'flex',
	      backgroundColor: appBar.color,
	      paddingLeft: appBar.padding,
	      paddingRight: appBar.padding
	    },
	    title: {
	      whiteSpace: 'nowrap',
	      overflow: 'hidden',
	      textOverflow: 'ellipsis',
	      margin: 0,
	      paddingTop: 0,
	      letterSpacing: 0,
	      fontSize: 24,
	      fontWeight: appBar.titleFontWeight,
	      color: appBar.textColor,
	      height: appBar.height,
	      lineHeight: appBar.height + 'px'
	    },
	    mainElement: {
	      boxFlex: 1,
	      flex: '1'
	    },
	    iconButtonStyle: {
	      marginTop: (appBar.height - iconButtonSize) / 2,
	      marginRight: 8,
	      marginLeft: -16
	    },
	    iconButtonIconStyle: {
	      fill: appBar.textColor,
	      color: appBar.textColor
	    },
	    flatButton: {
	      color: appBar.textColor,
	      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
	    }
	  };
	
	  return styles;
	}
	
	var AppBar = function (_Component) {
	  (0, _inherits3.default)(AppBar, _Component);
	
	  function AppBar() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, AppBar);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppBar.__proto__ || (0, _getPrototypeOf2.default)(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
	      if (_this.props.onLeftIconButtonTouchTap) {
	        _this.props.onLeftIconButtonTouchTap(event);
	      }
	    }, _this.handleTouchTapRightIconButton = function (event) {
	      if (_this.props.onRightIconButtonTouchTap) {
	        _this.props.onRightIconButtonTouchTap(event);
	      }
	    }, _this.handleTitleTouchTap = function (event) {
	      if (_this.props.onTitleTouchTap) {
	        _this.props.onTitleTouchTap(event);
	      }
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(AppBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.') : void 0;
	
	      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.') : void 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var titleStyle = _props.titleStyle;
	      var iconStyleLeft = _props.iconStyleLeft;
	      var iconStyleRight = _props.iconStyleRight;
	      var onTitleTouchTap = _props.onTitleTouchTap;
	      var showMenuIconButton = _props.showMenuIconButton;
	      var iconElementLeft = _props.iconElementLeft;
	      var iconElementRight = _props.iconElementRight;
	      var iconClassNameLeft = _props.iconClassNameLeft;
	      var iconClassNameRight = _props.iconClassNameRight;
	      var onLeftIconButtonTouchTap = _props.onLeftIconButtonTouchTap;
	      var onRightIconButtonTouchTap = _props.onRightIconButtonTouchTap;
	      var className = _props.className;
	      var style = _props.style;
	      var zDepth = _props.zDepth;
	      var children = _props.children;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleTouchTap', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonTouchTap', 'onRightIconButtonTouchTap', 'className', 'style', 'zDepth', 'children']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context);
	
	      var menuElementLeft = void 0;
	      var menuElementRight = void 0;
	
	      // If the title is a string, wrap in an h1 tag.
	      // If not, wrap in a div tag.
	      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';
	
	      var titleElement = _react2.default.createElement(titleComponent, {
	        onTouchTap: this.handleTitleTouchTap,
	        style: prepareStyles((0, _simpleAssign2.default)(styles.title, styles.mainElement, titleStyle))
	      }, title);
	
	      var iconLeftStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, iconStyleLeft);
	
	      if (showMenuIconButton) {
	        if (iconElementLeft) {
	          var iconElementLeftProps = {};
	
	          if (iconElementLeft.type.muiName === 'IconButton') {
	            var iconElemLeftChildren = iconElementLeft.props.children;
	            var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;
	
	            iconElementLeftProps.iconStyle = (0, _simpleAssign2.default)({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
	          }
	
	          if (!iconElementLeft.props.onTouchTap && this.props.onLeftIconButtonTouchTap) {
	            iconElementLeftProps.onTouchTap = this.handleTouchTapLeftIconButton;
	          }
	
	          menuElementLeft = _react2.default.createElement(
	            'div',
	            { style: prepareStyles(iconLeftStyle) },
	            (0, _keys2.default)(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft
	          );
	        } else {
	          menuElementLeft = _react2.default.createElement(
	            _IconButton2.default,
	            {
	              style: iconLeftStyle,
	              iconStyle: styles.iconButtonIconStyle,
	              iconClassName: iconClassNameLeft,
	              onTouchTap: this.handleTouchTapLeftIconButton
	            },
	            iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: (0, _simpleAssign2.default)({}, styles.iconButtonIconStyle) })
	          );
	        }
	      }
	
	      var iconRightStyle = (0, _simpleAssign2.default)({}, styles.iconButtonStyle, {
	        marginRight: -16,
	        marginLeft: 'auto'
	      }, iconStyleRight);
	
	      if (iconElementRight) {
	        var iconElementRightProps = {};
	
	        switch (iconElementRight.type.muiName) {
	          case 'IconMenu':
	          case 'IconButton':
	            var iconElemRightChildren = iconElementRight.props.children;
	            var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;
	
	            iconElementRightProps.iconStyle = (0, _simpleAssign2.default)({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
	            break;
	
	          case 'FlatButton':
	            iconElementRightProps.style = (0, _simpleAssign2.default)({}, styles.flatButton, iconElementRight.props.style);
	            break;
	
	          default:
	        }
	
	        if (!iconElementRight.props.onTouchTap && this.props.onRightIconButtonTouchTap) {
	          iconElementRightProps.onTouchTap = this.handleTouchTapRightIconButton;
	        }
	
	        menuElementRight = _react2.default.createElement(
	          'div',
	          { style: prepareStyles(iconRightStyle) },
	          (0, _keys2.default)(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight
	        );
	      } else if (iconClassNameRight) {
	        menuElementRight = _react2.default.createElement(_IconButton2.default, {
	          style: iconRightStyle,
	          iconStyle: styles.iconButtonIconStyle,
	          iconClassName: iconClassNameRight,
	          onTouchTap: this.handleTouchTapRightIconButton
	        });
	      }
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        (0, _extends3.default)({}, other, {
	          rounded: false,
	          className: className,
	          style: (0, _simpleAssign2.default)({}, styles.root, style),
	          zDepth: zDepth
	        }),
	        menuElementLeft,
	        titleElement,
	        menuElementRight,
	        children
	      );
	    }
	  }]);
	  return AppBar;
	}(_react.Component);
	
	AppBar.muiName = 'AppBar';
	AppBar.defaultProps = {
	  showMenuIconButton: true,
	  title: '',
	  zDepth: 1
	};
	AppBar.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? AppBar.propTypes = {
	  /**
	   * Can be used to render a tab inside an app bar for instance.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * Applied to the app bar's root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * The classname of the icon on the left of the app bar.
	   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
	   */
	  iconClassNameLeft: _react.PropTypes.string,
	  /**
	   * Similiar to the iconClassNameLeft prop except that
	   * it applies to the icon displayed on the right of the app bar.
	   */
	  iconClassNameRight: _react.PropTypes.string,
	  /**
	   * The custom element to be displayed on the left side of the
	   * app bar such as an SvgIcon.
	   */
	  iconElementLeft: _react.PropTypes.element,
	  /**
	   * Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
	   */
	  iconElementRight: _react.PropTypes.element,
	  /**
	   * Override the inline-styles of the element displayed on the left side of the app bar.
	   */
	  iconStyleLeft: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the element displayed on the right side of the app bar.
	   */
	  iconStyleRight: _react.PropTypes.object,
	  /**
	   * Callback function for when the left icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the left `IconButton`.
	   */
	  onLeftIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the right icon is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the right `IconButton`.
	   */
	  onRightIconButtonTouchTap: _react.PropTypes.func,
	  /**
	   * Callback function for when the title text is selected via a touch tap.
	   *
	   * @param {object} event TouchTap event targeting the `title` node.
	   */
	  onTitleTouchTap: _react.PropTypes.func,
	  /**
	   * Determines whether or not to display the Menu icon next to the title.
	   * Setting this prop to false will hide the icon.
	   */
	  showMenuIconButton: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The title to display on the app bar.
	   */
	  title: _react.PropTypes.node,
	  /**
	   * Override the inline-styles of the app bar's title element.
	   */
	  titleStyle: _react.PropTypes.object,
	  /**
	   * The zDepth of the component.
	   * The shadow of the app bar is also dependent on this property.
	   */
	  zDepth: _propTypes2.default.zDepth
	} : void 0;
	exports.default = AppBar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 746 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(367);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(376);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMenu = function NavigationMenu(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
	  );
	};
	NavigationMenu = (0, _pure2.default)(NavigationMenu);
	NavigationMenu.displayName = 'NavigationMenu';
	NavigationMenu.muiName = 'SvgIcon';
	
	exports.default = NavigationMenu;

/***/ },
/* 747 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _RaisedButton = __webpack_require__(748);
	
	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _RaisedButton2.default;

/***/ },
/* 748 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(326);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _objectWithoutProperties2 = __webpack_require__(331);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _getPrototypeOf = __webpack_require__(179);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(205);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(206);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(210);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(257);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _simpleAssign = __webpack_require__(332);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(337);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _colorManipulator = __webpack_require__(278);
	
	var _childUtils = __webpack_require__(380);
	
	var _EnhancedButton = __webpack_require__(379);
	
	var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);
	
	var _Paper = __webpack_require__(362);
	
	var _Paper2 = _interopRequireDefault(_Paper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validateLabel(props, propName, componentName) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
	      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
	    }
	  }
	}
	
	function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme;
	  var baseTheme = _context$muiTheme.baseTheme;
	  var button = _context$muiTheme.button;
	  var raisedButton = _context$muiTheme.raisedButton;
	  var disabled = props.disabled;
	  var disabledBackgroundColor = props.disabledBackgroundColor;
	  var disabledLabelColor = props.disabledLabelColor;
	  var fullWidth = props.fullWidth;
	  var icon = props.icon;
	  var label = props.label;
	  var labelPosition = props.labelPosition;
	  var primary = props.primary;
	  var secondary = props.secondary;
	  var style = props.style;
	
	
	  var amount = primary || secondary ? 0.4 : 0.08;
	
	  var backgroundColor = raisedButton.color;
	  var labelColor = raisedButton.textColor;
	
	  if (disabled) {
	    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
	    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
	  } else if (primary) {
	    backgroundColor = raisedButton.primaryColor;
	    labelColor = raisedButton.primaryTextColor;
	  } else if (secondary) {
	    backgroundColor = raisedButton.secondaryColor;
	    labelColor = raisedButton.secondaryTextColor;
	  } else {
	    if (props.backgroundColor) {
	      backgroundColor = props.backgroundColor;
	    }
	    if (props.labelColor) {
	      labelColor = props.labelColor;
	    }
	  }
	
	  var buttonHeight = style && style.height || button.height;
	  var borderRadius = 2;
	
	  return {
	    root: {
	      display: 'inline-block',
	      transition: _transitions2.default.easeOut(),
	      minWidth: fullWidth ? '100%' : button.minWidth
	    },
	    button: {
	      position: 'relative',
	      height: buttonHeight,
	      lineHeight: buttonHeight + 'px',
	      width: '100%',
	      padding: 0,
	      borderRadius: borderRadius,
	      transition: _transitions2.default.easeOut(),
	      backgroundColor: backgroundColor,
	      // That's the default value for a button but not a link
	      textAlign: 'center'
	    },
	    label: {
	      position: 'relative',
	      opacity: 1,
	      fontSize: raisedButton.fontSize,
	      letterSpacing: 0,
	      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
	      fontWeight: raisedButton.fontWeight,
	      margin: 0,
	      userSelect: 'none',
	      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
	      color: labelColor
	    },
	    icon: {
	      verticalAlign: 'middle',
	      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
	      marginRight: label && labelPosition === 'before' ? 12 : 0
	    },
	    overlay: {
	      height: buttonHeight,
	      borderRadius: borderRadius,
	      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
	      transition: _transitions2.default.easeOut(),
	      top: 0
	    },
	    ripple: {
	      color: labelColor,
	      opacity: !(primary || secondary) ? 0.1 : 0.16
	    }
	  };
	}
	
	var RaisedButton = function (_Component) {
	  (0, _inherits3.default)(RaisedButton, _Component);
	
	  function RaisedButton() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    (0, _classCallCheck3.default)(this, RaisedButton);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      hovered: false,
	      keyboardFocused: false,
	      touched: false,
	      initialZDepth: 0,
	      zDepth: 0
	    }, _this.handleMouseDown = function (event) {
	      // only listen to left clicks
	      if (event.button === 0) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth + 1
	        });
	      }
	      if (_this.props.onMouseDown) {
	        _this.props.onMouseDown(event);
	      }
	    }, _this.handleMouseUp = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	      if (_this.props.onMouseUp) {
	        _this.props.onMouseUp(event);
	      }
	    }, _this.handleMouseLeave = function (event) {
	      if (!_this.state.keyboardFocused) {
	        _this.setState({
	          zDepth: _this.state.initialZDepth,
	          hovered: false
	        });
	      }
	      if (_this.props.onMouseLeave) {
	        _this.props.onMouseLeave(event);
	      }
	    }, _this.handleMouseEnter = function (event) {
	      if (!_this.state.keyboardFocused && !_this.state.touched) {
	        _this.setState({
	          hovered: true
	        });
	      }
	      if (_this.props.onMouseEnter) {
	        _this.props.onMouseEnter(event);
	      }
	    }, _this.handleTouchStart = function (event) {
	      _this.setState({
	        touched: true,
	        zDepth: _this.state.initialZDepth + 1
	      });
	
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }
	    }, _this.handleTouchEnd = function (event) {
	      _this.setState({
	        zDepth: _this.state.initialZDepth
	      });
	
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }
	    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
	      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;
	
	      _this.setState({
	        zDepth: zDepth,
	        keyboardFocused: keyboardFocused
	      });
	    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	  }
	
	  (0, _createClass3.default)(RaisedButton, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var zDepth = this.props.disabled ? 0 : 1;
	      this.setState({
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var zDepth = nextProps.disabled ? 0 : 1;
	      var nextState = {
	        zDepth: zDepth,
	        initialZDepth: zDepth
	      };
	
	      if (nextProps.disabled) {
	        nextState.hovered = false;
	      }
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var backgroundColor = _props.backgroundColor;
	      var buttonStyle = _props.buttonStyle;
	      var children = _props.children;
	      var className = _props.className;
	      var disabled = _props.disabled;
	      var disabledBackgroundColor = _props.disabledBackgroundColor;
	      var disabledLabelColor = _props.disabledLabelColor;
	      var fullWidth = _props.fullWidth;
	      var icon = _props.icon;
	      var label = _props.label;
	      var labelColor = _props.labelColor;
	      var labelPosition = _props.labelPosition;
	      var labelStyle = _props.labelStyle;
	      var overlayStyle = _props.overlayStyle;
	      var primary = _props.primary;
	      var rippleStyle = _props.rippleStyle;
	      var secondary = _props.secondary;
	      var style = _props.style;
	      var other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);
	
	      var buttonEventHandlers = disabled ? {} : {
	        onMouseDown: this.handleMouseDown,
	        onMouseUp: this.handleMouseUp,
	        onMouseLeave: this.handleMouseLeave,
	        onMouseEnter: this.handleMouseEnter,
	        onTouchStart: this.handleTouchStart,
	        onTouchEnd: this.handleTouchEnd,
	        onKeyboardFocus: this.handleKeyboardFocus
	      };
	
	      var labelElement = label && _react2.default.createElement(
	        'span',
	        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
	        label
	      );
	
	      var iconCloned = icon && (0, _react.cloneElement)(icon, {
	        color: icon.props.color || styles.label.color,
	        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
	      });
	
	      // Place label before or after children.
	      var childrenFragment = labelPosition === 'before' ? {
	        labelElement: labelElement,
	        iconCloned: iconCloned,
	        children: children
	      } : {
	        children: children,
	        iconCloned: iconCloned,
	        labelElement: labelElement
	      };
	
	      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);
	
	      return _react2.default.createElement(
	        _Paper2.default,
	        {
	          className: className,
	          style: (0, _simpleAssign2.default)(styles.root, style),
	          zDepth: this.state.zDepth
	        },
	        _react2.default.createElement(
	          _EnhancedButton2.default,
	          (0, _extends3.default)({}, other, buttonEventHandlers, {
	            ref: 'container',
	            disabled: disabled,
	            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
	            focusRippleColor: mergedRippleStyles.color,
	            touchRippleColor: mergedRippleStyles.color,
	            focusRippleOpacity: mergedRippleStyles.opacity,
	            touchRippleOpacity: mergedRippleStyles.opacity
	          }),
	          _react2.default.createElement(
	            'div',
	            {
	              ref: 'overlay',
	              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
	            },
	            enhancedButtonChildren
	          )
	        )
	      );
	    }
	  }]);
	  return RaisedButton;
	}(_react.Component);
	
	RaisedButton.muiName = 'RaisedButton';
	RaisedButton.defaultProps = {
	  disabled: false,
	  labelPosition: 'after',
	  fullWidth: false,
	  primary: false,
	  secondary: false
	};
	RaisedButton.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	process.env.NODE_ENV !== "production" ? RaisedButton.propTypes = {
	  /**
	   * Override the default background color for the button,
	   * but not the default disabled background color
	   * (use `disabledBackgroundColor` for this).
	   */
	  backgroundColor: _react.PropTypes.string,
	  /**
	   * Override the inline-styles of the button element.
	   */
	  buttonStyle: _react.PropTypes.object,
	  /**
	   * The content of the button.
	   * If a label is provided via the `label` prop, the text within the label
	   * will be displayed in addition to the content provided here.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The CSS class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * If true, the button will be disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the default background color for the button
	   * when it is disabled.
	   */
	  disabledBackgroundColor: _react.PropTypes.string,
	  /**
	   * The color of the button's label when the button is disabled.
	   */
	  disabledLabelColor: _react.PropTypes.string,
	  /**
	   * If true, the button will take up the full width of its container.
	   */
	  fullWidth: _react.PropTypes.bool,
	  /**
	   * The URL to link to when the button is clicked.
	   */
	  href: _react.PropTypes.string,
	  /**
	   * An icon to be displayed within the button.
	   */
	  icon: _react.PropTypes.node,
	  /**
	   * The label to be displayed within the button.
	   * If content is provided via the `children` prop, that content will be
	   * displayed in addition to the label provided here.
	   */
	  label: validateLabel,
	  /**
	   * The color of the button's label.
	   */
	  labelColor: _react.PropTypes.string,
	  /**
	   * The position of the button's label relative to the button's `children`.
	   */
	  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
	  /**
	   * Override the inline-styles of the button's label element.
	   */
	  labelStyle: _react.PropTypes.object,
	  /** @ignore */
	  onMouseDown: _react.PropTypes.func,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /** @ignore */
	  onMouseUp: _react.PropTypes.func,
	  /** @ignore */
	  onTouchEnd: _react.PropTypes.func,
	  /** @ignore */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * Override the inline style of the button overlay.
	   */
	  overlayStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's primary color.
	   */
	  primary: _react.PropTypes.bool,
	  /**
	   * Override the inline style of the ripple element.
	   */
	  rippleStyle: _react.PropTypes.object,
	  /**
	   * If true, the button will use the theme's secondary color.
	   * If both `secondary` and `primary` are true, the button will use
	   * the theme's primary color.
	   */
	  secondary: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	exports.default = RaisedButton;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 749 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Ons = __webpack_require__(711);
	var Utils_1 = __webpack_require__(750);
	var TimeDialog = (function (_super) {
	    __extends(TimeDialog, _super);
	    function TimeDialog() {
	        _super.apply(this, arguments);
	    }
	    TimeDialog.prototype.render = function () {
	        var timeList = this.createTimeList();
	        return (React.createElement(Ons.Dialog, {isOpen: this.props.value.timeDialogShown, onCancel: this.handleOnCancel.bind(this), style: { maxHeight: "80%", overflow: "auto" }}, 
	            React.createElement(Ons.List, {dataSource: timeList, renderRow: this.renderRow.bind(this)})
	        ));
	    };
	    TimeDialog.prototype.renderRow = function (row, index) {
	        var _this = this;
	        return (React.createElement(Ons.ListItem, {key: index, style: { paddingLeft: "0px", justifyContent: "center" }, onClick: function () { return _this.handleTimeClick(row); }}, 
	            React.createElement("div", {className: "center"}, row)
	        ));
	    };
	    TimeDialog.prototype.handleTimeClick = function (time) {
	        // TODO 
	        console.log(time);
	    };
	    TimeDialog.prototype.handleOnCancel = function () {
	        this.props.actions.hideTimeDialog();
	    };
	    TimeDialog.prototype.createTimeList = function () {
	        var list = [];
	        for (var h = 0; h < 24; h++) {
	            for (var t = 0; t < 60; t += 15) {
	                if ((h == 9 && t == 0)
	                    || (h == 17 && t == 45)) {
	                    list.push('');
	                    list.push('---');
	                }
	                var value = Utils_1.padZero(h, 2) + ':' + Utils_1.padZero(t, 2);
	                list.push(value);
	            }
	        }
	        return list;
	    };
	    return TimeDialog;
	}(React.Component));
	exports.TimeDialog = TimeDialog;


/***/ },
/* 750 */
/***/ function(module, exports) {

	"use strict";
	function padZero(i, length) {
	    var s = i.toString();
	    while (s.length < length) {
	        s = '0' + s;
	    }
	    return s;
	}
	exports.padZero = padZero;


/***/ },
/* 751 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Reducer_1 = __webpack_require__(752);
	var redux_1 = __webpack_require__(719);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = redux_1.createStore(redux_1.combineReducers({
	    kintai: Reducer_1.kintai
	}));


/***/ },
/* 752 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var object_1 = __webpack_require__(753);
	var initialState = {
	    currentDate: new Date(),
	    inTime: "",
	    outTime: "",
	    // TODO stateやreducerを分割？
	    timeDialogShown: false
	};
	function kintai(state, action) {
	    if (state === void 0) { state = initialState; }
	    switch (action.type) {
	        case "quickIn":
	            var inTime = calcQuickInTime(action.now);
	            return object_1.assign({}, state, { inTime: inTime });
	        case "quickOut":
	            var outTime = calcQuickOutTime(action.now);
	            return object_1.assign({}, state, { outTime: outTime });
	        case "showTimeDialog":
	            return object_1.assign({}, state, { timeDialogShown: true });
	        case "hideTimeDialog":
	            return object_1.assign({}, state, { timeDialogShown: false });
	        default:
	            return state;
	    }
	}
	exports.kintai = kintai;
	function calcQuickInTime(now) {
	    now.setMinutes(now.getMinutes() + 15);
	    return to15minTime(now);
	}
	function calcQuickOutTime(now) {
	    return to15minTime(now);
	}
	function to15minTime(time) {
	    time.setMinutes(Math.floor(time.getMinutes() / 15) * 15);
	    return padZero(time.getHours()) + ':' + padZero(time.getMinutes());
	}
	function padZero(i) {
	    return ('0' + i).slice(-2);
	}


/***/ },
/* 753 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(243);
	__webpack_require__(264);
	__webpack_require__(209);
	__webpack_require__(754);
	__webpack_require__(755);
	__webpack_require__(181);
	__webpack_require__(320);
	__webpack_require__(756);
	__webpack_require__(757);
	__webpack_require__(758);
	__webpack_require__(759);
	__webpack_require__(760);
	__webpack_require__(761);
	__webpack_require__(762);
	__webpack_require__(329);
	__webpack_require__(763);
	__webpack_require__(260);
	__webpack_require__(254);
	__webpack_require__(765);
	__webpack_require__(767);
	__webpack_require__(769);
	__webpack_require__(770);
	__webpack_require__(772);
	__webpack_require__(773);
	__webpack_require__(774);
	__webpack_require__(775);
	__webpack_require__(776);
	__webpack_require__(777);
	__webpack_require__(779);
	module.exports = __webpack_require__(192).Object;

/***/ },
/* 754 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(200), 'Object', {defineProperties: __webpack_require__(223)});

/***/ },
/* 755 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(226)
	  , $getOwnPropertyDescriptor = __webpack_require__(253).f;
	
	__webpack_require__(190)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 756 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(190)('getOwnPropertyNames', function(){
	  return __webpack_require__(251).f;
	});

/***/ },
/* 757 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(198)
	  , meta     = __webpack_require__(244).onFreeze;
	
	__webpack_require__(190)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 758 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(198)
	  , meta     = __webpack_require__(244).onFreeze;
	
	__webpack_require__(190)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 759 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(198)
	  , meta     = __webpack_require__(244).onFreeze;
	
	__webpack_require__(190)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 760 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(198);
	
	__webpack_require__(190)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 761 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(198);
	
	__webpack_require__(190)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 762 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(198);
	
	__webpack_require__(190)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 763 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(191);
	$export($export.S, 'Object', {is: __webpack_require__(764)});

/***/ },
/* 764 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 765 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(191)
	  , ownKeys        = __webpack_require__(766)
	  , toIObject      = __webpack_require__(226)
	  , gOPD           = __webpack_require__(253)
	  , createProperty = __webpack_require__(272);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 766 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(252)
	  , gOPS     = __webpack_require__(248)
	  , anObject = __webpack_require__(197)
	  , Reflect  = __webpack_require__(188).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 767 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(191)
	  , $values = __webpack_require__(768)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 768 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(224)
	  , toIObject = __webpack_require__(226)
	  , isEnum    = __webpack_require__(249).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 769 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(191)
	  , $entries = __webpack_require__(768)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 770 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(191)
	  , toObject        = __webpack_require__(182)
	  , aFunction       = __webpack_require__(194)
	  , $defineProperty = __webpack_require__(196);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(200) && $export($export.P + __webpack_require__(771), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 771 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(218)|| !__webpack_require__(201)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(188)[K];
	});

/***/ },
/* 772 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(191)
	  , toObject        = __webpack_require__(182)
	  , aFunction       = __webpack_require__(194)
	  , $defineProperty = __webpack_require__(196);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(200) && $export($export.P + __webpack_require__(771), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 773 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(191)
	  , toObject                 = __webpack_require__(182)
	  , toPrimitive              = __webpack_require__(203)
	  , getPrototypeOf           = __webpack_require__(184)
	  , getOwnPropertyDescriptor = __webpack_require__(253).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(200) && $export($export.P + __webpack_require__(771), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 774 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(191)
	  , toObject                 = __webpack_require__(182)
	  , toPrimitive              = __webpack_require__(203)
	  , getPrototypeOf           = __webpack_require__(184)
	  , getOwnPropertyDescriptor = __webpack_require__(253).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(200) && $export($export.P + __webpack_require__(771), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 775 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191);
	
	$export($export.S + $export.F, 'Object', {isObject: __webpack_require__(198)});

/***/ },
/* 776 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191);
	
	$export($export.S + $export.F, 'Object', {classof: __webpack_require__(274)});

/***/ },
/* 777 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191)
	  , define  = __webpack_require__(778);
	
	$export($export.S + $export.F, 'Object', {define: define});

/***/ },
/* 778 */
/***/ function(module, exports, __webpack_require__) {

	var dP        = __webpack_require__(196)
	  , gOPD      = __webpack_require__(253)
	  , ownKeys   = __webpack_require__(766)
	  , toIObject = __webpack_require__(226);
	
	module.exports = function define(target, mixin){
	  var keys   = ownKeys(toIObject(mixin))
	    , length = keys.length
	    , i = 0, key;
	  while(length > i)dP.f(target, key = keys[i++], gOPD.f(mixin, key));
	  return target;
	};

/***/ },
/* 779 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(191)
	  , define  = __webpack_require__(778)
	  , create  = __webpack_require__(222);
	
	$export($export.S + $export.F, 'Object', {
	  make: function(proto, mixin){
	    return define(create(proto), mixin);
	  }
	});

/***/ },
/* 780 */
/***/ function(module, exports) {

	"use strict";
	var DispatchActions = (function () {
	    function DispatchActions(dispatch) {
	        this.dispatch = dispatch;
	    }
	    DispatchActions.prototype.quickIn = function () {
	        this.dispatch({ type: "quickIn", now: new Date() });
	    };
	    DispatchActions.prototype.quickOut = function () {
	        this.dispatch({ type: "quickOut", now: new Date() });
	    };
	    DispatchActions.prototype.showTimeDialog = function () {
	        this.dispatch({ type: "showTimeDialog" });
	    };
	    DispatchActions.prototype.hideTimeDialog = function () {
	        this.dispatch({ type: "hideTimeDialog" });
	    };
	    return DispatchActions;
	}());
	exports.DispatchActions = DispatchActions;


/***/ }
]);
//# sourceMappingURL=bundle.js.map