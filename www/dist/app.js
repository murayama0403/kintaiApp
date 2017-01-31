webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(32);
	var InputPage_1 = __webpack_require__(178);
	var ListPage_1 = __webpack_require__(499);
	var Store_1 = __webpack_require__(505);
	var DispatchActions_1 = __webpack_require__(577);
	var react_redux_1 = __webpack_require__(634);
	var react_router_1 = __webpack_require__(578);
	var react_router_redux_1 = __webpack_require__(572);
	var injectTapEventPlugin = __webpack_require__(641);
	var MuiThemeProvider_1 = __webpack_require__(647);
	var moment = __webpack_require__(332);
	__webpack_require__(385);
	console.log('userAgent', navigator.userAgent);
	injectTapEventPlugin();
	moment.locale('ja');
	var connector = react_redux_1.connect(function (store) { return { value: store }; }, function (dispatch) { return { actions: new DispatchActions_1.DispatchActions(dispatch) }; });
	var InputPageComponent = connector(InputPage_1.InputPage);
	var ListPageComponent = connector(ListPage_1.ListPage);
	var history = react_router_redux_1.syncHistoryWithStore(react_router_1.hashHistory, Store_1.default);
	ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Store_1.default },
	    React.createElement(MuiThemeProvider_1.default, null,
	        React.createElement(react_router_1.Router, { history: history },
	            React.createElement(react_router_1.Route, { path: "/", component: InputPageComponent }),
	            React.createElement(react_router_1.Route, { path: "/list", component: ListPageComponent })))), document.getElementById('app'));


/***/ },

/***/ 178:
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
	var Toolbar_1 = __webpack_require__(179);
	var Main_1 = __webpack_require__(446);
	var FooterTab_1 = __webpack_require__(491);
	var InputPage = (function (_super) {
	    __extends(InputPage, _super);
	    function InputPage() {
	        return _super.apply(this, arguments) || this;
	    }
	    InputPage.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement(Toolbar_1.Toolbar, __assign({}, this.props)),
	            React.createElement(Main_1.Main, __assign({}, this.props)),
	            React.createElement(FooterTab_1.FooterTab, __assign({}, this.props))));
	    };
	    return InputPage;
	}(React.Component));
	exports.InputPage = InputPage;


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppBar_1 = __webpack_require__(180);
	var IconButton_1 = __webpack_require__(278);
	var keyboard_arrow_left_1 = __webpack_require__(329);
	var keyboard_arrow_right_1 = __webpack_require__(330);
	var DateUtils_1 = __webpack_require__(331);
	var Toolbar = (function (_super) {
	    __extends(Toolbar, _super);
	    function Toolbar() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.buttons = React.createElement("div", null,
	            React.createElement(IconButton_1.default, { onClick: _this.handleBefore.bind(_this) },
	                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
	            React.createElement(IconButton_1.default, { onClick: _this.handleAfter.bind(_this) },
	                React.createElement(keyboard_arrow_right_1.default, { color: "white" })));
	        return _this;
	    }
	    Toolbar.prototype.render = function () {
	        return (React.createElement("div", { className: "toolbar" },
	            React.createElement(AppBar_1.default, { title: this.createTitle(), showMenuIconButton: false, iconElementRight: this.buttons })));
	    };
	    Toolbar.prototype.handleBefore = function () {
	        var date = DateUtils_1.moveDates(this.props.value.inputPage.currentDate, -1);
	        this.props.actions.moveCurrentDate(date);
	    };
	    Toolbar.prototype.handleAfter = function () {
	        var date = DateUtils_1.moveDates(this.props.value.inputPage.currentDate, 1);
	        this.props.actions.moveCurrentDate(date);
	    };
	    Toolbar.prototype.createTitle = function () {
	        var dayStyle = this.getDayStyle(this.props.value.inputPage.currentDate);
	        var text = DateUtils_1.formatDate(this.props.value.inputPage.currentDate);
	        return React.createElement("span", { style: dayStyle }, text);
	    };
	    Toolbar.prototype.getDayStyle = function (date) {
	        var color = DateUtils_1.getDayColor(date);
	        if (color) {
	            return {
	                color: color
	            };
	        }
	        return {};
	    };
	    return Toolbar;
	}(React.Component));
	exports.Toolbar = Toolbar;


/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HardwareKeyboardArrowLeft = function HardwareKeyboardArrowLeft(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' })
	  );
	};
	HardwareKeyboardArrowLeft = (0, _pure2.default)(HardwareKeyboardArrowLeft);
	HardwareKeyboardArrowLeft.displayName = 'HardwareKeyboardArrowLeft';
	HardwareKeyboardArrowLeft.muiName = 'SvgIcon';
	
	exports.default = HardwareKeyboardArrowLeft;

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HardwareKeyboardArrowRight = function HardwareKeyboardArrowRight(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' })
	  );
	};
	HardwareKeyboardArrowRight = (0, _pure2.default)(HardwareKeyboardArrowRight);
	HardwareKeyboardArrowRight.displayName = 'HardwareKeyboardArrowRight';
	HardwareKeyboardArrowRight.muiName = 'SvgIcon';
	
	exports.default = HardwareKeyboardArrowRight;

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var moment = __webpack_require__(332);
	var japanese_holidays_1 = __webpack_require__(443);
	var colors_1 = __webpack_require__(445);
	function toDayString(date) {
	    return moment(date).format('YYYYMMDD');
	}
	exports.toDayString = toDayString;
	function formatDate(date) {
	    return moment(date).format('M/D(dd)');
	}
	exports.formatDate = formatDate;
	function formatDateForListItem(date) {
	    return moment(date).format('D(dd)');
	}
	exports.formatDateForListItem = formatDateForListItem;
	function formatMonth(date) {
	    return moment(date).format('YYYY/M');
	}
	exports.formatMonth = formatMonth;
	function ceil15Minutes(date) {
	    var minutes = Math.ceil(date.getMinutes() / 15) * 15;
	    return moment(date).minute(minutes).toDate();
	}
	exports.ceil15Minutes = ceil15Minutes;
	function floor15Minutes(date) {
	    var minutes = Math.floor(date.getMinutes() / 15) * 15;
	    return moment(date).minute(minutes).toDate();
	}
	exports.floor15Minutes = floor15Minutes;
	function moveDates(date, amount) {
	    return moment(date).add(amount, 'days').toDate();
	}
	exports.moveDates = moveDates;
	function moveMonths(date, amount) {
	    return moment(date).add(amount, 'months').toDate();
	}
	exports.moveMonths = moveMonths;
	function formatTime(date) {
	    return moment(date).format('H:mm');
	}
	exports.formatTime = formatTime;
	function getMonthDates(month) {
	    var date = moment(month);
	    var count = date.daysInMonth();
	    var array = new Array(count);
	    for (var i = 0; i < count; i++) {
	        array[i] = date.date(i + 1).toDate();
	    }
	    return array;
	}
	exports.getMonthDates = getMonthDates;
	var DayType;
	(function (DayType) {
	    DayType[DayType["WEEKDAY"] = 0] = "WEEKDAY";
	    DayType[DayType["SATURDAY"] = 1] = "SATURDAY";
	    DayType[DayType["SUNDAY"] = 2] = "SUNDAY";
	    DayType[DayType["HOLIDAY"] = 3] = "HOLIDAY";
	})(DayType = exports.DayType || (exports.DayType = {}));
	// 就業規則で12/30-1/3は休み(1/1は元日なので設定不要)
	var COMPANY_HOLIDAYS = ['12/30', '12/31', '1/2', '1/3'];
	function getDayType(date) {
	    var holiday = japanese_holidays_1.isHoliday(date);
	    if (holiday) {
	        return DayType.HOLIDAY;
	    }
	    if (COMPANY_HOLIDAYS.indexOf(moment(date).format('M/D')) != -1) {
	        return DayType.HOLIDAY;
	    }
	    var day = date.getDay();
	    if (day == 6) {
	        return DayType.SATURDAY;
	    }
	    if (day == 0) {
	        return DayType.SUNDAY;
	    }
	    return DayType.WEEKDAY;
	}
	exports.getDayType = getDayType;
	function getDayColor(date) {
	    var dayType = getDayType(date);
	    switch (dayType) {
	        case DayType.HOLIDAY:
	        case DayType.SUNDAY:
	            return colors_1.red700;
	        case DayType.SATURDAY:
	            return colors_1.indigo700;
	    }
	    return null;
	}
	exports.getDayColor = getDayColor;


/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	var JapaneseHolidays = __webpack_require__(444);
	
	module.exports = JapaneseHolidays;


/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.10.0
	
	/*
	
	    日本の休日を JavaScript で計算するためのライブラリ
	                         Osamu Takeuchi <osamu@big.jp>
	 */
	
	(function() {
	  "use strict";
	  var definition, furikaeHoliday, getHolidaysOf, getJDate, getJDay, getJFullYear, getJHours, getJMinutes, getJMonth, happyMonday, holidays, isHoliday, isHolidayAt, j2u, jDate, kokuminHoliday, ref, shiftDate, shubun, shubunWithTime, shunbun, shunbunWithTime, simpleHoliday, target, u2j, uDate;
	
	  shiftDate = function(date, year, mon, day, hour, min, sec, msec) {
	    var res;
	    res = new Date(2000, 0, 1);
	    res.setTime(date.getTime() + ((((day != null ? day : 0) * 24 + (hour != null ? hour : 0)) * 60 + (min != null ? min : 0)) * 60 + (sec != null ? sec : 0)) * 1000 + (msec != null ? msec : 0));
	    res.setFullYear(res.getFullYear() + (year != null ? year : 0) + Math.floor((res.getMonth() + (mon != null ? mon : 0)) / 12));
	    res.setMonth(((res.getMonth() + (mon != null ? mon : 0)) % 12 + 12) % 12);
	    return res;
	  };
	
	  u2j = function(d) {
	    return shiftDate(d, 0, 0, 0, +9);
	  };
	
	  j2u = function(d) {
	    return shiftDate(d, 0, 0, 0, -9);
	  };
	
	  uDate = function(y, m, d) {
	    return new Date(Date.UTC(y, m, d));
	  };
	
	  jDate = function(y, m, d) {
	    return j2u(uDate(y, m, d));
	  };
	
	  getJDay = function(d) {
	    return (u2j(d)).getUTCDay();
	  };
	
	  getJDate = function(d) {
	    return (u2j(d)).getUTCDate();
	  };
	
	  getJMonth = function(d) {
	    return (u2j(d)).getUTCMonth();
	  };
	
	  getJFullYear = function(d) {
	    return (u2j(d)).getUTCFullYear();
	  };
	
	  getJHours = function(d) {
	    return (u2j(d)).getUTCHours();
	  };
	
	  getJMinutes = function(d) {
	    return (u2j(d)).getUTCMinutes();
	  };
	
	
	  /*
	      ヘルパ関数
	   */
	
	  simpleHoliday = function(month, day) {
	    return function(year) {
	      return jDate(year, month - 1, day);
	    };
	  };
	
	  happyMonday = function(month, nth) {
	    return function(year) {
	      var first, monday;
	      monday = 1;
	      first = jDate(year, month - 1, 1);
	      return shiftDate(first, 0, 0, (7 - (getJDay(first) - monday)) % 7 + (nth - 1) * 7);
	    };
	  };
	
	  shunbunWithTime = function(year) {
	    return new Date(-655866700000 + 31556940400 * (year - 1949));
	  };
	
	  shunbun = function(year) {
	    var date;
	    date = shunbunWithTime(year);
	    return jDate(year, getJMonth(date), getJDate(date));
	  };
	
	  shubunWithTime = function(year) {
	    var day;
	    if (day = {
	      1603: 23,
	      2074: 23,
	      2355: 23,
	      2384: 22
	    }[year]) {
	      return jDate(year, 9 - 1, day);
	    } else {
	      return new Date(-671316910000 + 31556910000 * (year - 1948));
	    }
	  };
	
	  shubun = function(year) {
	    var date;
	    date = shubunWithTime(year);
	    return jDate(year, getJMonth(date), getJDate(date));
	  };
	
	
	  /*
	      休日定義
	      https://ja.wikipedia.org/wiki/%E5%9B%BD%E6%B0%91%E3%81%AE%E7%A5%9D%E6%97%A5
	   */
	
	  definition = [["元日", simpleHoliday(1, 1), 1949], ["成人の日", simpleHoliday(1, 15), 1949, 1999], ["成人の日", happyMonday(1, 2), 2000], ["建国記念の日", simpleHoliday(2, 11), 1967], ["昭和天皇の大喪の礼", simpleHoliday(2, 24), 1989, 1989], ["春分の日", shunbun, 1949], ["皇太子明仁親王の結婚の儀", simpleHoliday(4, 10), 1959, 1959], ["天皇誕生日", simpleHoliday(4, 29), 1949, 1988], ["みどりの日", simpleHoliday(4, 29), 1989, 2006], ["昭和の日", simpleHoliday(4, 29), 2007], ["憲法記念日", simpleHoliday(5, 3), 1949], ["みどりの日", simpleHoliday(5, 4), 2007], ["こどもの日", simpleHoliday(5, 5), 1949], ["皇太子徳仁親王の結婚の儀", simpleHoliday(6, 9), 1993, 1993], ["海の日", simpleHoliday(7, 20), 1996, 2002], ["海の日", happyMonday(7, 3), 2003], ["山の日", simpleHoliday(8, 11), 2016], ["敬老の日", simpleHoliday(9, 15), 1966, 2002], ["敬老の日", happyMonday(9, 3), 2003], ["秋分の日", shubun, 1948], ["体育の日", simpleHoliday(10, 10), 1966, 1999], ["体育の日", happyMonday(10, 2), 2000], ["文化の日", simpleHoliday(11, 3), 1948], ["即位礼正殿の儀", simpleHoliday(11, 12), 1990, 1990], ["勤労感謝の日", simpleHoliday(11, 23), 1948], ["天皇誕生日", simpleHoliday(12, 23), 1989]];
	
	  furikaeHoliday = function(holiday) {
	    var furikae, sunday;
	    sunday = 0;
	    if (holiday < jDate(1973, 4 - 1, 30 - 1) || getJDay(holiday) !== sunday) {
	      return null;
	    }
	    furikae = shiftDate(holiday, 0, 0, 1);
	    if (!isHolidayAt(furikae, false)) {
	      return furikae;
	    }
	    if (holiday < jDate(2007, 1 - 1, 1)) {
	      return null;
	    }
	    while (true) {
	      furikae = shiftDate(furikae, 0, 0, 1);
	      if (!isHolidayAt(furikae, false)) {
	        return furikae;
	      }
	    }
	  };
	
	  kokuminHoliday = function(holiday) {
	    var kokumin, monday, sunday;
	    if (getJFullYear(holiday) < 1988) {
	      return null;
	    }
	    if (!isHolidayAt(shiftDate(holiday, 0, 0, 2), false)) {
	      return null;
	    }
	    sunday = 0;
	    monday = 1;
	    kokumin = shiftDate(holiday, 0, 0, 1);
	    if (isHolidayAt(kokumin, false) || getJDay(kokumin) === sunday || getJDay(kokumin) === monday) {
	      return null;
	    }
	    return kokumin;
	  };
	
	  holidays = {
	    "true": {},
	    "false": {}
	  };
	
	  getHolidaysOf = function(y, furikae) {
	    var cache, d, entry, holiday, i, j, kokuminHolidays, len, len1, m, month_day, name, w_furikae, wo_furikae;
	    furikae = (furikae == null) || furikae ? true : false;
	    cache = holidays[furikae][y];
	    if (cache != null) {
	      return cache;
	    }
	    wo_furikae = {};
	    for (i = 0, len = definition.length; i < len; i++) {
	      entry = definition[i];
	      if ((entry[2] != null) && y < entry[2]) {
	        continue;
	      }
	      if ((entry[3] != null) && entry[3] < y) {
	        continue;
	      }
	      holiday = entry[1](y);
	      if (holiday == null) {
	        continue;
	      }
	      m = getJMonth(holiday) + 1;
	      d = getJDate(holiday);
	      wo_furikae[[m, d]] = entry[0];
	    }
	    holidays[false][y] = wo_furikae;
	    kokuminHolidays = [];
	    for (month_day in wo_furikae) {
	      month_day = month_day.split(",");
	      holiday = kokuminHoliday(jDate(y, month_day[0] - 1, month_day[1]));
	      if (holiday != null) {
	        m = getJMonth(holiday) + 1;
	        d = getJDate(holiday);
	        kokuminHolidays.push([m, d]);
	      }
	    }
	    for (j = 0, len1 = kokuminHolidays.length; j < len1; j++) {
	      holiday = kokuminHolidays[j];
	      wo_furikae[holiday] = "国民の休日";
	    }
	    w_furikae = {};
	    for (month_day in wo_furikae) {
	      name = wo_furikae[month_day];
	      w_furikae[month_day] = name;
	      month_day = month_day.split(",");
	      holiday = furikaeHoliday(jDate(y, month_day[0] - 1, month_day[1]));
	      if (holiday != null) {
	        m = getJMonth(holiday) + 1;
	        d = getJDate(holiday);
	        w_furikae[[m, d]] = "振替休日";
	      }
	    }
	    holidays[true][y] = w_furikae;
	    return holidays[furikae][y];
	  };
	
	
	  /*
	      クラス定義
	   */
	
	  target = (ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? ref : this.JapaneseHolidays = {};
	
	  target.getHolidaysOf = function(y, furikae) {
	    var month_day, name, ref1, result;
	    result = [];
	    ref1 = getHolidaysOf(y, furikae);
	    for (month_day in ref1) {
	      name = ref1[month_day];
	      result.push({
	        month: parseInt(month_day.split(",")[0]),
	        date: parseInt(month_day.split(",")[1]),
	        name: name
	      });
	    }
	    result.sort(function(a, b) {
	      return (a.month - b.month) || (a.date - b.date);
	    });
	    return result;
	  };
	
	  isHoliday = function(date, furikae) {
	    return getHolidaysOf(date.getFullYear(), furikae)[[date.getMonth() + 1, date.getDate()]];
	  };
	
	  isHolidayAt = function(date, furikae) {
	    return getHolidaysOf(getJFullYear(date), furikae)[[getJMonth(date) + 1, getJDate(date)]];
	  };
	
	  target.isHoliday = isHoliday;
	
	  target.isHolidayAt = isHolidayAt;
	
	  target.shiftDate = shiftDate;
	
	  target.u2j = u2j;
	
	  target.j2u = j2u;
	
	  target.jDate = jDate;
	
	  target.uDate = uDate;
	
	  target.getJDay = getJDay;
	
	  target.getJDate = getJDate;
	
	  target.getJMonth = getJMonth;
	
	  target.getJFullYear = getJFullYear;
	
	  target.getJHours = getJHours;
	
	  target.getJMinutes = getJMinutes;
	
	  target.__forTest = {
	    shunbunWithTime: shunbunWithTime,
	    shubunWithTime: shubunWithTime
	  };
	
	}).call(this);
	
	//# sourceMappingURL=japanese-holidays.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(333)(module)))

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var KintaiUtils_1 = __webpack_require__(447);
	var List_1 = __webpack_require__(448);
	var TextField_1 = __webpack_require__(458);
	var TimeInput_1 = __webpack_require__(469);
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        return _super.apply(this, arguments) || this;
	    }
	    Main.prototype.render = function () {
	        var currentKintai = KintaiUtils_1.getDayKintai(this.props.value.kintai, this.props.value.inputPage.currentDate);
	        return (React.createElement("div", { className: "content" },
	            React.createElement(List_1.List, null,
	                React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.IN, value: currentKintai.inTime, onSelected: this.handleInSelected.bind(this) }),
	                React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.OUT, value: currentKintai.outTime, onSelected: this.handleOutSelected.bind(this) })),
	            React.createElement(TextField_1.default, { hintText: "休暇", value: currentKintai.holiday, onChange: this.handleHolidayChange.bind(this) })));
	    };
	    Main.prototype.handleInSelected = function (value) {
	        this.props.actions.selectIn(this.props.value.inputPage.currentDate, value);
	    };
	    Main.prototype.handleOutSelected = function (value) {
	        this.props.actions.selectOut(this.props.value.inputPage.currentDate, value);
	    };
	    Main.prototype.handleHolidayChange = function (event) {
	        this.props.actions.inputHoliday(this.props.value.inputPage.currentDate, event.target.value);
	    };
	    return Main;
	}(React.Component));
	exports.Main = Main;


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DateUtils_1 = __webpack_require__(331);
	var defaultDayKintai = {
	    inTime: '',
	    outTime: '',
	    holiday: ''
	};
	function getDayKintai(state, date, defaultValue) {
	    if (defaultValue === void 0) { defaultValue = defaultDayKintai; }
	    var day = DateUtils_1.toDayString(date);
	    var kintai = state.days[day];
	    if (kintai) {
	        return kintai;
	    }
	    return defaultValue;
	}
	exports.getDayKintai = getDayKintai;


/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var SelectField_1 = __webpack_require__(470);
	var List_1 = __webpack_require__(448);
	var MenuItem_1 = __webpack_require__(488);
	var IconButton_1 = __webpack_require__(278);
	var schedule_1 = __webpack_require__(489);
	var update_1 = __webpack_require__(490);
	var DateUtils_1 = __webpack_require__(331);
	var TIMES = [':00', ':15', ':30', ':45'];
	var REGULAR_TIME_IN = '9:00';
	var REGULAR_TIME_OUT = '17:45';
	exports.IN = {
	    label: "出勤",
	    regularTime: REGULAR_TIME_IN,
	    menus: createMenus(REGULAR_TIME_IN),
	    adjustTime: DateUtils_1.ceil15Minutes
	};
	exports.OUT = {
	    label: "退勤",
	    regularTime: REGULAR_TIME_OUT,
	    menus: createMenus(REGULAR_TIME_OUT),
	    adjustTime: DateUtils_1.floor15Minutes
	};
	var listInnerStyle = {
	    paddingLeft: "4px",
	    paddingRight: "4px",
	    paddingTop: "0px",
	    paddingBottom: "0px"
	};
	function createMenus(defaultValue) {
	    var menus = [];
	    for (var h = 0; h < 24; h++) {
	        TIMES.forEach(function (time) {
	            var value = h + time;
	            if (value == defaultValue) {
	                menus.push(React.createElement(MenuItem_1.default, { key: "", value: "", primaryText: "" }));
	                menus.push(React.createElement(MenuItem_1.default, { key: "---", value: "---", primaryText: "---" }));
	            }
	            menus.push(React.createElement(MenuItem_1.default, { key: value, value: value, primaryText: value }));
	        });
	    }
	    return menus;
	}
	var TimeInput = (function (_super) {
	    __extends(TimeInput, _super);
	    function TimeInput() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.quickButtons = React.createElement("div", null,
	            React.createElement(IconButton_1.default, { onClick: _this.handleNow.bind(_this) },
	                React.createElement(update_1.default, null)),
	            React.createElement(IconButton_1.default, { onClick: _this.handleRegular.bind(_this) },
	                React.createElement(schedule_1.default, null)));
	        return _this;
	    }
	    TimeInput.prototype.render = function () {
	        return (React.createElement(List_1.ListItem, { innerDivStyle: listInnerStyle, rightIconButton: this.quickButtons, disabled: true },
	            React.createElement(SelectField_1.default, { hintText: this.props.type.label, value: this.props.value, onChange: this.handleChange.bind(this), style: { width: "200px" }, labelStyle: { height: "48px" } }, this.props.type.menus)));
	    };
	    TimeInput.prototype.handleChange = function (event, index, value) {
	        event.preventDefault();
	        this.props.onSelected(value);
	    };
	    TimeInput.prototype.handleNow = function () {
	        var time = this.props.type.adjustTime(new Date());
	        this.props.onSelected(DateUtils_1.formatTime(time));
	    };
	    TimeInput.prototype.handleRegular = function () {
	        this.props.onSelected(this.props.type.regularTime);
	    };
	    return TimeInput;
	}(React.Component));
	exports.TimeInput = TimeInput;


/***/ },

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionSchedule = function ActionSchedule(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z' })
	  );
	};
	ActionSchedule = (0, _pure2.default)(ActionSchedule);
	ActionSchedule.displayName = 'ActionSchedule';
	ActionSchedule.muiName = 'SvgIcon';
	
	exports.default = ActionSchedule;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionUpdate = function ActionUpdate(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z' })
	  );
	};
	ActionUpdate = (0, _pure2.default)(ActionUpdate);
	ActionUpdate.displayName = 'ActionUpdate';
	ActionUpdate.muiName = 'SvgIcon';
	
	exports.default = ActionUpdate;

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BottomNavigation_1 = __webpack_require__(492);
	var Divider_1 = __webpack_require__(495);
	var edit_1 = __webpack_require__(497);
	var list_1 = __webpack_require__(498);
	var FooterTab = (function (_super) {
	    __extends(FooterTab, _super);
	    function FooterTab() {
	        return _super.apply(this, arguments) || this;
	    }
	    FooterTab.prototype.render = function () {
	        var selectedIndex = this.getSelectedIndex();
	        return (React.createElement("div", { className: "footerTab" },
	            React.createElement(Divider_1.default, null),
	            React.createElement(BottomNavigation_1.BottomNavigation, { selectedIndex: selectedIndex },
	                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "入力", icon: React.createElement(edit_1.default, null), onClick: this.onInputSelected.bind(this) }),
	                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "一覧", icon: React.createElement(list_1.default, null), onClick: this.onListSelected.bind(this) }))));
	    };
	    FooterTab.prototype.onInputSelected = function () {
	        this.props.actions.showInputPage();
	    };
	    FooterTab.prototype.onListSelected = function () {
	        this.props.actions.showListPage();
	    };
	    FooterTab.prototype.getSelectedIndex = function () {
	        if (this.props.location.pathname == '/list') {
	            return 1;
	        }
	        return 0;
	    };
	    return FooterTab;
	}(React.Component));
	exports.FooterTab = FooterTab;


/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ImageEdit = function ImageEdit(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
	  );
	};
	ImageEdit = (0, _pure2.default)(ImageEdit);
	ImageEdit.displayName = 'ImageEdit';
	ImageEdit.muiName = 'SvgIcon';
	
	exports.default = ImageEdit;

/***/ },

/***/ 498:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ActionList = function ActionList(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z' })
	  );
	};
	ActionList = (0, _pure2.default)(ActionList);
	ActionList.displayName = 'ActionList';
	ActionList.muiName = 'SvgIcon';
	
	exports.default = ActionList;

/***/ },

/***/ 499:
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
	var Toolbar_1 = __webpack_require__(500);
	var Main_1 = __webpack_require__(504);
	var FooterTab_1 = __webpack_require__(491);
	var ListPage = (function (_super) {
	    __extends(ListPage, _super);
	    function ListPage() {
	        return _super.apply(this, arguments) || this;
	    }
	    ListPage.prototype.render = function () {
	        return (React.createElement("div", null,
	            React.createElement(Toolbar_1.Toolbar, __assign({}, this.props)),
	            React.createElement(Main_1.Main, __assign({}, this.props)),
	            React.createElement(FooterTab_1.FooterTab, __assign({}, this.props))));
	    };
	    return ListPage;
	}(React.Component));
	exports.ListPage = ListPage;


/***/ },

/***/ 500:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var AppBar_1 = __webpack_require__(180);
	var IconButton_1 = __webpack_require__(278);
	var IconMenu_1 = __webpack_require__(501);
	var MenuItem_1 = __webpack_require__(488);
	var keyboard_arrow_left_1 = __webpack_require__(329);
	var keyboard_arrow_right_1 = __webpack_require__(330);
	var more_vert_1 = __webpack_require__(503);
	var DateUtils_1 = __webpack_require__(331);
	var Toolbar = (function (_super) {
	    __extends(Toolbar, _super);
	    function Toolbar() {
	        var _this = _super.apply(this, arguments) || this;
	        _this.buttons = React.createElement("div", null,
	            React.createElement(IconButton_1.default, { onClick: _this.handleBefore.bind(_this) },
	                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
	            React.createElement(IconButton_1.default, { onClick: _this.handleAfter.bind(_this) },
	                React.createElement(keyboard_arrow_right_1.default, { color: "white" })),
	            React.createElement(IconMenu_1.default, { useLayerForClickAway: true, iconButtonElement: React.createElement(IconButton_1.default, null,
	                    React.createElement(more_vert_1.default, { color: "white" })) },
	                React.createElement(MenuItem_1.default, { onClick: _this.handleSend.bind(_this), primaryText: "送信" })));
	        return _this;
	    }
	    Toolbar.prototype.render = function () {
	        return (React.createElement("div", { className: "toolbar" },
	            React.createElement(AppBar_1.default, { title: this.formatCurrentMonth(), showMenuIconButton: false, iconElementRight: this.buttons })));
	    };
	    Toolbar.prototype.handleBefore = function () {
	        var date = DateUtils_1.moveMonths(this.props.value.listPage.currentDate, -1);
	        this.props.actions.moveCurrentMonth(date);
	    };
	    Toolbar.prototype.handleAfter = function () {
	        var date = DateUtils_1.moveMonths(this.props.value.listPage.currentDate, 1);
	        this.props.actions.moveCurrentMonth(date);
	    };
	    Toolbar.prototype.handleSend = function () {
	        this.props.actions.sendMonth(this.props.value.kintai, this.props.value.listPage.currentDate);
	    };
	    Toolbar.prototype.formatCurrentMonth = function () {
	        return DateUtils_1.formatMonth(this.props.value.listPage.currentDate);
	    };
	    return Toolbar;
	}(React.Component));
	exports.Toolbar = Toolbar;


/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pure = __webpack_require__(315);
	
	var _pure2 = _interopRequireDefault(_pure);
	
	var _SvgIcon = __webpack_require__(324);
	
	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	NavigationMoreVert.muiName = 'SvgIcon';
	
	exports.default = NavigationMoreVert;

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var KintaiUtils_1 = __webpack_require__(447);
	var DateUtils_1 = __webpack_require__(331);
	var List_1 = __webpack_require__(448);
	var Main = (function (_super) {
	    __extends(Main, _super);
	    function Main() {
	        return _super.apply(this, arguments) || this;
	    }
	    Main.prototype.render = function () {
	        var listItems = DateUtils_1.getMonthDates(this.props.value.listPage.currentDate).map(this.createListItem.bind(this));
	        return (React.createElement("div", { className: "content" },
	            React.createElement(List_1.List, null, listItems)));
	    };
	    Main.prototype.createListItem = function (date) {
	        var _this = this;
	        var kintai = KintaiUtils_1.getDayKintai(this.props.value.kintai, date);
	        var dayString = DateUtils_1.formatDateForListItem(date);
	        var dayStyle = this.getDayStyle(date);
	        return (React.createElement(List_1.ListItem, { key: date.getDate(), onClick: function () { return _this.onSelectDate(date); } },
	            React.createElement("span", { style: dayStyle }, dayString),
	            " ",
	            kintai.inTime,
	            " ",
	            kintai.outTime));
	    };
	    Main.prototype.onSelectDate = function (date) {
	        this.props.actions.showInputPage(date);
	    };
	    Main.prototype.getDayStyle = function (date) {
	        var color = DateUtils_1.getDayColor(date);
	        if (color) {
	            return {
	                color: color
	            };
	        }
	        return {};
	    };
	    return Main;
	}(React.Component));
	exports.Main = Main;


/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var KintaiReducer_1 = __webpack_require__(506);
	var InputPageReducer_1 = __webpack_require__(509);
	var ListPageReducer_1 = __webpack_require__(510);
	var redux_1 = __webpack_require__(511);
	var redux_persist_1 = __webpack_require__(531);
	var react_router_redux_1 = __webpack_require__(572);
	var store = redux_1.createStore(redux_1.combineReducers({
	    kintai: KintaiReducer_1.kintai,
	    inputPage: InputPageReducer_1.inputPage,
	    listPage: ListPageReducer_1.listPage,
	    routing: react_router_redux_1.routerReducer
	}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), redux_persist_1.autoRehydrate());
	redux_persist_1.persistStore(store, { whitelist: ['kintai'] });
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = store;


/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var redux_common_1 = __webpack_require__(507);
	var Actions_1 = __webpack_require__(508);
	var KintaiUtils_1 = __webpack_require__(447);
	var DateUtils_1 = __webpack_require__(331);
	var initialState = {
	    days: {}
	};
	exports.kintai = redux_common_1.createReducer(initialState, function (handle) {
	    handle(Actions_1.SelectInAction, function (state, selectedTime) {
	        return updateDayKintai(state, selectedTime.date, { inTime: selectedTime.time });
	    });
	    handle(Actions_1.SelectOutAction, function (state, selectedTime) {
	        return updateDayKintai(state, selectedTime.date, { outTime: selectedTime.time });
	    });
	    handle(Actions_1.InputHolidayAction, function (state, selectedHoliday) {
	        return updateDayKintai(state, selectedHoliday.date, { holiday: selectedHoliday.holiday });
	    });
	});
	function updateDayKintai(state, date, partialDayKintai) {
	    var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
	    var newDayState = __assign({}, oldDayKintai, partialDayKintai);
	    var newState = __assign({}, state);
	    newState.days[DateUtils_1.toDayString(date)] = newDayState;
	    return newState;
	}


/***/ },

/***/ 507:
/***/ function(module, exports) {

	"use strict";
	function action(type) {
	    return {
	        type: type,
	        create: function (payload, error, meta) {
	            return {
	                type: type,
	                payload: payload,
	                error: error,
	                meta: meta
	            };
	        }
	    };
	}
	exports.action = action;
	function createReducer(initialState, reducers) {
	    var reducerMap = {};
	    reducers(function (actionType, reduce) { return reducerMap[actionType.type] = reduce; });
	    return function (state, action) {
	        if (state === void 0) { state = initialState; }
	        var reducer = reducerMap[action.type];
	        if (reducer) {
	            return reducer(state, action.payload, action.error, action.meta);
	        }
	        return state;
	    };
	}
	exports.createReducer = createReducer;


/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var redux_common_1 = __webpack_require__(507);
	exports.SelectInAction = redux_common_1.action('SelectIn');
	exports.SelectOutAction = redux_common_1.action('SelectOut');
	exports.MoveCurrentDateAction = redux_common_1.action('MoveCurrentDate');
	exports.MoveCurrentMonthAction = redux_common_1.action('MoveCurrentMonth');
	exports.InputHolidayAction = redux_common_1.action('InputHoliday');


/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var redux_common_1 = __webpack_require__(507);
	var Actions_1 = __webpack_require__(508);
	var initialState = {
	    currentDate: new Date()
	};
	exports.inputPage = redux_common_1.createReducer(initialState, function (handle) {
	    handle(Actions_1.MoveCurrentDateAction, function (state, date) {
	        return __assign({}, state, { currentDate: date });
	    });
	});


/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var redux_common_1 = __webpack_require__(507);
	var Actions_1 = __webpack_require__(508);
	var initialState = {
	    currentDate: new Date()
	};
	exports.listPage = redux_common_1.createReducer(initialState, function (handle) {
	    handle(Actions_1.MoveCurrentMonthAction, function (state, date) {
	        return __assign({}, state, { currentDate: date });
	    });
	});


/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(508);
	var react_router_1 = __webpack_require__(578);
	var ApiClient_1 = __webpack_require__(632);
	var DispatchActions = (function () {
	    function DispatchActions(dispatch) {
	        this.dispatch = dispatch;
	    }
	    DispatchActions.prototype.selectIn = function (date, time) {
	        this.dispatch(actions.SelectInAction.create({
	            date: date,
	            time: time
	        }));
	    };
	    DispatchActions.prototype.selectOut = function (date, time) {
	        this.dispatch(actions.SelectOutAction.create({
	            date: date,
	            time: time
	        }));
	    };
	    DispatchActions.prototype.moveCurrentDate = function (date) {
	        this.dispatch(actions.MoveCurrentDateAction.create(date));
	    };
	    DispatchActions.prototype.moveCurrentMonth = function (date) {
	        this.dispatch(actions.MoveCurrentMonthAction.create(date));
	    };
	    DispatchActions.prototype.sendMonth = function (kintai, month) {
	        var promise = ApiClient_1.sendMonthKintai(kintai, month);
	    };
	    DispatchActions.prototype.inputHoliday = function (date, holiday) {
	        this.dispatch(actions.InputHolidayAction.create({
	            date: date,
	            holiday: holiday
	        }));
	    };
	    DispatchActions.prototype.showInputPage = function (date) {
	        if (!!date) {
	            this.moveCurrentDate(date);
	        }
	        react_router_1.hashHistory.push('/');
	    };
	    DispatchActions.prototype.showListPage = function () {
	        react_router_1.hashHistory.push('/list');
	    };
	    return DispatchActions;
	}());
	exports.DispatchActions = DispatchActions;


/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var DateUtils_1 = __webpack_require__(331);
	var KintaiUtils_1 = __webpack_require__(447);
	__webpack_require__(633);
	function sendMonthKintai(kintai, month) {
	    var body = createBody(kintai, month);
	    fetch('https://sleepy-ravine-40602.herokuapp.com/api/kinmu', {
	        method: 'POST',
	        headers: {
	            'Content-Type': 'application/json'
	        },
	        body: JSON.stringify(body)
	    })
	        .then(function (res) { return console.log(res); });
	}
	exports.sendMonthKintai = sendMonthKintai;
	function createBody(kintai, month) {
	    var workInfoList = DateUtils_1.getMonthDates(month)
	        .map(function (date) { return createWorkInfo(date, kintai); })
	        .filter(function (info) { return info != null; });
	    return {
	        year: month.getFullYear(),
	        month: month.getMonth() + 1,
	        // TODO
	        employeeNo: "99999",
	        employeName: "勤務太郎",
	        departmentCode: "123456",
	        sendMailAddr: "yamato-satoshi@sji-inc.jp",
	        password: "test",
	        workInfoList: workInfoList
	    };
	}
	function createWorkInfo(date, KintaiState) {
	    var dayKintai = KintaiUtils_1.getDayKintai(KintaiState, date, null);
	    if (dayKintai == null) {
	        return null;
	    }
	    return toWorkInfo(date, dayKintai);
	}
	function toWorkInfo(date, dayKintai) {
	    return {
	        day: date.getDate(),
	        startTime: dayKintai.inTime,
	        clockOutTime: dayKintai.outTime,
	        // TODO
	        vacationType: "",
	        break2: "",
	        break3: "",
	        break4: "",
	        break5: "",
	        break6: "",
	        pjNo: "",
	        wkCd: "F"
	    };
	}


/***/ }

});
//# sourceMappingURL=app.js.map