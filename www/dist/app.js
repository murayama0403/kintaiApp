webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DateUtils_1 = __webpack_require__(57);
var defaultDayKintai = {
    inTime: "",
    outTime: "",
    memo: "",
};
function getDayKintai(state, date) {
    var day = DateUtils_1.toDayString(date);
    return state.days[day];
}
exports.getDayKintai = getDayKintai;
function getDayKintaiOrDefault(state, date, defaultValue) {
    if (defaultValue === void 0) { defaultValue = defaultDayKintai; }
    var kintai = getDayKintai(state, date);
    if (kintai) {
        return kintai;
    }
    return defaultValue;
}
exports.getDayKintaiOrDefault = getDayKintaiOrDefault;


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redux_common_1 = __webpack_require__(177);
exports.SelectInAction = redux_common_1.action("SelectIn");
exports.SelectOutAction = redux_common_1.action("SelectOut");
exports.MoveCurrentDateAction = redux_common_1.action("MoveCurrentDate");
exports.InputMemoAction = redux_common_1.action("InputMemo");
exports.InputEmailAction = redux_common_1.action("InputEmail");
exports.InputPasswordAction = redux_common_1.action("InputPassword");
exports.SendStartAction = redux_common_1.action("SendStart");
exports.SendSuccessAction = redux_common_1.action("SendSuccess");
exports.CloseSendSuccessMessageAction = redux_common_1.action("CloseSendSuccessMessage");
exports.SendErrorAction = redux_common_1.action("SendError");
exports.CloseSendErrorMessageAction = redux_common_1.action("CloseSendErrorMessage");


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function action(type) {
    return {
        type: type,
        create: function (payload) {
            return {
                type: type,
                payload: payload,
            };
        },
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
            return reducer(state, action.payload);
        }
        return state;
    };
}
exports.createReducer = createReducer;


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

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
var AppBar_1 = __webpack_require__(138);
var IconButton_1 = __webpack_require__(35);
var keyboard_arrow_left_1 = __webpack_require__(247);
var keyboard_arrow_right_1 = __webpack_require__(248);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var ToolbarWithProgress_1 = __webpack_require__(409);
var MonthToolbar = (function (_super) {
    __extends(MonthToolbar, _super);
    function MonthToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: _this.handleBefore.bind(_this) },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: _this.handleAfter.bind(_this) },
                React.createElement(keyboard_arrow_right_1.default, { color: "white" })));
        return _this;
    }
    MonthToolbar.prototype.render = function () {
        return (React.createElement(ToolbarWithProgress_1.ToolbarWithProgress, __assign({}, this.props),
            React.createElement(AppBar_1.default, { title: this.formatCurrentMonth(), showMenuIconButton: false, iconElementRight: this.buttons })));
    };
    MonthToolbar.prototype.handleBefore = function (event) {
        event.preventDefault();
        var date = DateUtils_1.moveMonths(this.props.value.view.currentDate, -1);
        this.props.actions.moveCurrentDate(date);
    };
    MonthToolbar.prototype.handleAfter = function (event) {
        event.preventDefault();
        var date = DateUtils_1.moveMonths(this.props.value.view.currentDate, 1);
        this.props.actions.moveCurrentDate(date);
    };
    MonthToolbar.prototype.formatCurrentMonth = function () {
        return DateUtils_1.formatMonth(this.props.value.view.currentDate);
    };
    return MonthToolbar;
}(React.Component));
exports.MonthToolbar = MonthToolbar;


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LinearProgress_1 = __webpack_require__(222);
var React = __webpack_require__(1);
var ToolbarWithProgress = (function (_super) {
    __extends(ToolbarWithProgress, _super);
    function ToolbarWithProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarWithProgress.prototype.render = function () {
        var progressVisibility = this.props.value.view.isSending ? "visible" : "hidden";
        return (React.createElement("div", { className: "toolbar" },
            this.props.children,
            React.createElement(LinearProgress_1.default, { mode: "indeterminate", style: { visibility: progressVisibility } })));
    };
    return ToolbarWithProgress;
}(React.Component));
exports.ToolbarWithProgress = ToolbarWithProgress;


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var react_router_1 = __webpack_require__(86);
var actions = __webpack_require__(176);
var ApiClient_1 = __webpack_require__(790);
var DispatchActions = (function () {
    function DispatchActions(dispatch) {
        this.dispatch = dispatch;
    }
    DispatchActions.prototype.selectIn = function (date, time) {
        this.dispatch(actions.SelectInAction.create({
            date: date,
            time: time,
        }));
    };
    DispatchActions.prototype.selectOut = function (date, time) {
        this.dispatch(actions.SelectOutAction.create({
            date: date,
            time: time,
        }));
    };
    DispatchActions.prototype.moveCurrentDate = function (date) {
        this.dispatch(actions.MoveCurrentDateAction.create(date));
    };
    DispatchActions.prototype.sendMonth = function (kintai, month, password) {
        var _this = this;
        // TODO 入力チェック
        this.dispatch(actions.SendStartAction.create(undefined));
        ApiClient_1.sendMonthKintai(kintai, month, password).then(function (response) {
            if (!response.ok) {
                return response.json().then(function (json) {
                    _this.dispatch(actions.SendErrorAction.create("サーバーサイドエラー: " + json.message));
                });
            }
            _this.dispatch(actions.SendSuccessAction.create(undefined));
            return response;
        }).catch(function () {
            _this.dispatch(actions.SendErrorAction.create("ネットワークエラー"));
        });
    };
    DispatchActions.prototype.inputMemo = function (date, memo) {
        this.dispatch(actions.InputMemoAction.create({
            date: date,
            text: memo,
        }));
    };
    DispatchActions.prototype.showInputPage = function (date) {
        if (!!date) {
            this.moveCurrentDate(date);
        }
        react_router_1.hashHistory.push("/");
    };
    DispatchActions.prototype.showListPage = function () {
        react_router_1.hashHistory.push("/list");
    };
    DispatchActions.prototype.showSendPage = function () {
        react_router_1.hashHistory.push("/send");
    };
    DispatchActions.prototype.inputEmail = function (email) {
        // TODO 入力チェック？
        this.dispatch(actions.InputEmailAction.create(email));
    };
    DispatchActions.prototype.inputPassword = function (password) {
        this.dispatch(actions.InputPasswordAction.create(password));
    };
    DispatchActions.prototype.closeSendSuccessMessage = function () {
        this.dispatch(actions.CloseSendSuccessMessageAction.create(undefined));
    };
    DispatchActions.prototype.closeSendErrorMessage = function () {
        this.dispatch(actions.CloseSendErrorMessageAction.create(undefined));
    };
    return DispatchActions;
}());
exports.DispatchActions = DispatchActions;


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var react_router_redux_1 = __webpack_require__(85);
var redux_1 = __webpack_require__(111);
var createLogger = __webpack_require__(180);
var redux_persist_1 = __webpack_require__(181);
var KintaiReducer_1 = __webpack_require__(798);
var ViewReducer_1 = __webpack_require__(799);
// weinreでConsoleデバッグができるようにredux-loggerがconsole.logを呼び出すように変更
var logger = createLogger({
    level: "log",
    logger: {
        log: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log.apply(console, args);
        },
    },
});
var store = redux_1.createStore(redux_1.combineReducers({
    kintai: KintaiReducer_1.kintai,
    routing: react_router_redux_1.routerReducer,
    view: ViewReducer_1.view,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), redux_1.compose(redux_persist_1.autoRehydrate(), redux_1.applyMiddleware(logger)));
redux_persist_1.persistStore(store, { whitelist: ["kintai"] });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

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
var Main_1 = __webpack_require__(792);
var Toolbar_1 = __webpack_require__(794);
var InputPage = (function (_super) {
    __extends(InputPage, _super);
    function InputPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Toolbar_1.Toolbar, __assign({}, this.props)),
            React.createElement(Main_1.Main, __assign({}, this.props))));
    };
    return InputPage;
}(React.Component));
exports.InputPage = InputPage;


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

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
var MonthToolbar_1 = __webpack_require__(408);
var Main_1 = __webpack_require__(795);
var ListPage = (function (_super) {
    __extends(ListPage, _super);
    function ListPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(MonthToolbar_1.MonthToolbar, __assign({}, this.props)),
            React.createElement(Main_1.Main, __assign({}, this.props))));
    };
    return ListPage;
}(React.Component));
exports.ListPage = ListPage;


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

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
var FooterTab_1 = __webpack_require__(791);
var SendStatus_1 = __webpack_require__(796);
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (React.createElement("div", null,
            this.props.children,
            React.createElement(SendStatus_1.SendStatus, __assign({}, this.props)),
            React.createElement(FooterTab_1.FooterTab, __assign({}, this.props))));
    };
    return Root;
}(React.Component));
exports.Root = Root;


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

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
var MonthToolbar_1 = __webpack_require__(408);
var Main_1 = __webpack_require__(797);
var SendPage = (function (_super) {
    __extends(SendPage, _super);
    function SendPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(MonthToolbar_1.MonthToolbar, __assign({}, this.props)),
            React.createElement(Main_1.Main, __assign({}, this.props))));
    };
    return SendPage;
}(React.Component));
exports.SendPage = SendPage;


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var japanese_holidays_1 = __webpack_require__(178);
var colors_1 = __webpack_require__(99);
var moment = __webpack_require__(2);
function toDayString(date) {
    return moment(date).format("YYYYMMDD");
}
exports.toDayString = toDayString;
function formatDate(date) {
    return moment(date).format("M/D(dd)");
}
exports.formatDate = formatDate;
function formatDateForListItem(date) {
    return moment(date).format("D(dd)");
}
exports.formatDateForListItem = formatDateForListItem;
function formatMonth(date) {
    return moment(date).format("YYYY/M");
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
    return moment(date).add(amount, "days").toDate();
}
exports.moveDates = moveDates;
function moveMonths(date, amount) {
    // 月移動する場合は日付は1日にリセットする
    return moment(date).add(amount, "months").date(1).toDate();
}
exports.moveMonths = moveMonths;
function formatTime(date) {
    return moment(date).format("H:mm");
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
var COMPANY_HOLIDAYS = ["12/30", "12/31", "1/2", "1/3"];
function getDayType(date) {
    var holiday = japanese_holidays_1.isHoliday(date);
    if (holiday) {
        return DayType.HOLIDAY;
    }
    if (COMPANY_HOLIDAYS.indexOf(moment(date).format("M/D")) !== -1) {
        return DayType.HOLIDAY;
    }
    var day = date.getDay();
    if (day === 6) {
        return DayType.SATURDAY;
    }
    if (day === 0) {
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
        default:
            return undefined;
    }
}
exports.getDayColor = getDayColor;


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentSend = function ContentSend(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
  );
};
ContentSend = (0, _pure2.default)(ContentSend);
ContentSend.displayName = 'ContentSend';
ContentSend.muiName = 'SvgIcon';

exports.default = ContentSend;

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(18);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

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

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(182);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(108);
function sendMonthKintai(kintai, month, password) {
    var body = createBody(kintai, month, password);
    return fetch("https://sleepy-ravine-40602.herokuapp.com/api/kinmu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}
exports.sendMonthKintai = sendMonthKintai;
function createBody(kintai, month, password) {
    var workInfoList = DateUtils_1.getMonthDates(month)
        .map(function (date) { return createWorkInfo(date, kintai); })
        .filter(function (info) { return info !== undefined; });
    return {
        year: month.getFullYear(),
        month: month.getMonth() + 1,
        // TODO
        employeeNo: "99999",
        employeName: "勤務太郎",
        departmentCode: "123456",
        sendMailAddr: kintai.person.email + "@caica.jp",
        password: password,
        workInfoList: workInfoList,
    };
}
function createWorkInfo(date, KintaiState) {
    var dayKintai = KintaiUtils_1.getDayKintai(KintaiState, date);
    if (!dayKintai) {
        return undefined;
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
        wkCd: "F",
    };
}


/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BottomNavigation_1 = __webpack_require__(213);
var Divider_1 = __webpack_require__(140);
var list_1 = __webpack_require__(622);
var send_1 = __webpack_require__(625);
var edit_1 = __webpack_require__(628);
var React = __webpack_require__(1);
var FooterTab = (function (_super) {
    __extends(FooterTab, _super);
    function FooterTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterTab.prototype.render = function () {
        var selectedIndex = this.getSelectedIndex();
        return (React.createElement("div", { className: "footerTab" },
            React.createElement(Divider_1.default, null),
            React.createElement(BottomNavigation_1.BottomNavigation, { selectedIndex: selectedIndex },
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "入力", icon: React.createElement(edit_1.default, null), onTouchTap: this.onInputSelected.bind(this) }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "一覧", icon: React.createElement(list_1.default, null), onTouchTap: this.onListSelected.bind(this) }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "送信", icon: React.createElement(send_1.default, null), onTouchTap: this.onSendSelected.bind(this) }))));
    };
    FooterTab.prototype.onInputSelected = function (event) {
        event.preventDefault();
        this.props.actions.showInputPage();
    };
    FooterTab.prototype.onListSelected = function (event) {
        event.preventDefault();
        this.props.actions.showListPage();
    };
    FooterTab.prototype.onSendSelected = function (event) {
        event.preventDefault();
        this.props.actions.showSendPage();
    };
    FooterTab.prototype.getSelectedIndex = function () {
        if (this.props.location.pathname === "/list") {
            return 1;
        }
        if (this.props.location.pathname === "/send") {
            return 2;
        }
        return 0;
    };
    return FooterTab;
}(React.Component));
exports.FooterTab = FooterTab;


/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextField_1 = __webpack_require__(52);
var React = __webpack_require__(1);
var KintaiUtils_1 = __webpack_require__(108);
var TimeInput_1 = __webpack_require__(793);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var currentKintai = KintaiUtils_1.getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate);
        return (React.createElement("div", { className: "content" },
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.IN, value: currentKintai.inTime, onSelected: this.handleInSelected.bind(this) }),
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.OUT, value: currentKintai.outTime, onSelected: this.handleOutSelected.bind(this) }),
            React.createElement(TextField_1.default, { multiLine: true, fullWidth: true, hintText: "メモ（勤務表には反映されません）", value: currentKintai.memo, onChange: this.handleMemoChange.bind(this) })));
    };
    Main.prototype.handleInSelected = function (value) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleOutSelected = function (value) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleMemoChange = function (_, value) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value);
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IconButton_1 = __webpack_require__(35);
var MenuItem_1 = __webpack_require__(96);
var SelectField_1 = __webpack_require__(229);
var schedule_1 = __webpack_require__(623);
var update_1 = __webpack_require__(624);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var TIMES = [":00", ":15", ":30", ":45"];
var REGULAR_TIME_IN = "9:00";
var REGULAR_TIME_OUT = "17:45";
exports.IN = {
    label: "出勤",
    regularTime: REGULAR_TIME_IN,
    menus: createMenus(REGULAR_TIME_IN),
    adjustTime: DateUtils_1.ceil15Minutes,
};
exports.OUT = {
    label: "退勤",
    regularTime: REGULAR_TIME_OUT,
    menus: createMenus(REGULAR_TIME_OUT),
    adjustTime: DateUtils_1.floor15Minutes,
};
function createMenus(defaultValue) {
    var menus = [];
    var _loop_1 = function (h) {
        TIMES.forEach(function (time) {
            var value = h + time;
            if (value === defaultValue) {
                menus.push(React.createElement(MenuItem_1.default, { key: "", value: "", primaryText: "" }));
                menus.push(React.createElement(MenuItem_1.default, { key: "---", value: "---", primaryText: "---" }));
            }
            menus.push(React.createElement(MenuItem_1.default, { key: value, value: value, primaryText: value }));
        });
    };
    for (var h = 0; h < 24; h++) {
        _loop_1(h);
    }
    return menus;
}
var TimeInput = (function (_super) {
    __extends(TimeInput, _super);
    function TimeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeInput.prototype.render = function () {
        return (React.createElement("div", { style: { display: "flex" } },
            React.createElement(SelectField_1.default, { hintText: this.props.type.label, value: this.props.value, onChange: this.handleChange.bind(this), style: { width: "200px" }, labelStyle: { height: "48px" } }, this.props.type.menus),
            React.createElement(IconButton_1.default, { onTouchTap: this.handleNow.bind(this) },
                React.createElement(update_1.default, null)),
            React.createElement(IconButton_1.default, { onTouchTap: this.handleRegular.bind(this) },
                React.createElement(schedule_1.default, null))));
    };
    TimeInput.prototype.handleChange = function (event, _, value) {
        event.preventDefault();
        this.props.onSelected(value);
    };
    TimeInput.prototype.handleNow = function (event) {
        event.preventDefault();
        var time = this.props.type.adjustTime(new Date());
        this.props.onSelected(DateUtils_1.formatTime(time));
    };
    TimeInput.prototype.handleRegular = function (event) {
        event.preventDefault();
        this.props.onSelected(this.props.type.regularTime);
    };
    return TimeInput;
}(React.Component));
exports.TimeInput = TimeInput;


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

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
var AppBar_1 = __webpack_require__(138);
var IconButton_1 = __webpack_require__(35);
var keyboard_arrow_left_1 = __webpack_require__(247);
var keyboard_arrow_right_1 = __webpack_require__(248);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var ToolbarWithProgress_1 = __webpack_require__(409);
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: _this.handleBefore.bind(_this) },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: _this.handleAfter.bind(_this) },
                React.createElement(keyboard_arrow_right_1.default, { color: "white" })));
        return _this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement(ToolbarWithProgress_1.ToolbarWithProgress, __assign({}, this.props),
            React.createElement(AppBar_1.default, { title: this.createTitle(), showMenuIconButton: false, iconElementRight: this.buttons })));
    };
    Toolbar.prototype.handleBefore = function (event) {
        event.preventDefault();
        var date = DateUtils_1.moveDates(this.props.value.view.currentDate, -1);
        this.props.actions.moveCurrentDate(date);
    };
    Toolbar.prototype.handleAfter = function (event) {
        event.preventDefault();
        var date = DateUtils_1.moveDates(this.props.value.view.currentDate, 1);
        this.props.actions.moveCurrentDate(date);
    };
    Toolbar.prototype.createTitle = function () {
        var dayStyle = this.getDayStyle(this.props.value.view.currentDate);
        var text = DateUtils_1.formatDate(this.props.value.view.currentDate);
        return React.createElement("span", { style: dayStyle }, text);
    };
    Toolbar.prototype.getDayStyle = function (date) {
        var color = DateUtils_1.getDayColor(date);
        if (color) {
            return {
                color: color,
            };
        }
        return {};
    };
    return Toolbar;
}(React.Component));
exports.Toolbar = Toolbar;


/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var List_1 = __webpack_require__(223);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(108);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var listItems = DateUtils_1.getMonthDates(this.props.value.view.currentDate).map(this.createListItem.bind(this));
        return (React.createElement("div", { className: "content" },
            React.createElement(List_1.List, null, listItems)));
    };
    Main.prototype.createListItem = function (date) {
        var _this = this;
        var kintai = KintaiUtils_1.getDayKintaiOrDefault(this.props.value.kintai, date);
        var dayString = DateUtils_1.formatDateForListItem(date);
        var dayStyle = this.getDayStyle(date);
        return (React.createElement(List_1.ListItem, { key: date.getDate(), onTouchTap: function (event) { return _this.onSelectDate(event, date); } },
            React.createElement("span", { style: dayStyle }, dayString),
            " ",
            kintai.inTime,
            " ",
            kintai.outTime));
    };
    Main.prototype.onSelectDate = function (event, date) {
        event.preventDefault();
        this.props.actions.showInputPage(date);
    };
    Main.prototype.getDayStyle = function (date) {
        var color = DateUtils_1.getDayColor(date);
        if (color) {
            return {
                color: color,
            };
        }
        return {};
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dialog_1 = __webpack_require__(94);
var Snackbar_1 = __webpack_require__(230);
var React = __webpack_require__(1);
var SendStatus = (function (_super) {
    __extends(SendStatus, _super);
    function SendStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendStatus.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Snackbar_1.default, { open: this.props.value.view.isShowSendSuccessMessage, message: "勤務表を送信しました", autoHideDuration: 2000, onRequestClose: this.handleCloseSendSuccess.bind(this) }),
            React.createElement(Dialog_1.default, { open: this.props.value.view.sendErrorMessage != null, title: "エラー", onRequestClose: this.handleCloseError.bind(this) }, this.props.value.view.sendErrorMessage)));
    };
    SendStatus.prototype.handleCloseSendSuccess = function () {
        this.props.actions.closeSendSuccessMessage();
    };
    SendStatus.prototype.handleCloseError = function () {
        this.props.actions.closeSendErrorMessage();
    };
    return SendStatus;
}(React.Component));
exports.SendStatus = SendStatus;


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RaisedButton_1 = __webpack_require__(228);
var TextField_1 = __webpack_require__(52);
var React = __webpack_require__(1);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var buttonLabel = this.props.value.view.isSending ? "送信中..." : "勤務表送信";
        return (React.createElement("div", { className: "content" },
            React.createElement(TextField_1.default, { hintText: "送信先アドレス", defaultValue: this.props.value.kintai.person.email, onChange: this.handleEmailChange.bind(this), style: { width: "192px" } }),
            "@caica.jp",
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "zipパスワード", type: "password", defaultValue: this.props.value.view.password, onChange: this.handlePasswordChange.bind(this) }),
            React.createElement("br", null),
            React.createElement(RaisedButton_1.default, { label: buttonLabel, primary: true, onTouchTap: this.handleSend.bind(this), disabled: this.props.value.view.isSending })));
    };
    Main.prototype.handleEmailChange = function (_, value) {
        this.props.actions.inputEmail(value);
    };
    Main.prototype.handlePasswordChange = function (_, value) {
        this.props.actions.inputPassword(value);
    };
    Main.prototype.handleSend = function (event) {
        event.preventDefault();
        this.props.actions.sendMonth(this.props.value.kintai, this.props.value.view.currentDate, this.props.value.view.password);
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var actions = __webpack_require__(176);
var redux_common_1 = __webpack_require__(177);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(108);
var initialState = {
    person: {
        email: "",
    },
    days: {},
};
exports.kintai = redux_common_1.createReducer(initialState, function (handle) {
    handle(actions.SelectInAction, function (state, selectedTime) {
        return updateDayKintai(state, selectedTime.date, { inTime: selectedTime.time });
    });
    handle(actions.SelectOutAction, function (state, selectedTime) {
        return updateDayKintai(state, selectedTime.date, { outTime: selectedTime.time });
    });
    handle(actions.InputMemoAction, function (state, memo) {
        return updateDayKintai(state, memo.date, { memo: memo.text });
    });
    handle(actions.InputEmailAction, function (state, email) {
        var person = __assign({}, state.person, { email: email });
        return __assign({}, state, { person: person });
    });
});
function updateDayKintai(state, date, partialDayKintai) {
    var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
    var newDayState = __assign({}, oldDayKintai, partialDayKintai);
    var newState = __assign({}, state);
    newState.days[DateUtils_1.toDayString(date)] = newDayState;
    return newState;
}


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var actions = __webpack_require__(176);
var redux_common_1 = __webpack_require__(177);
var initialState = {
    currentDate: new Date(),
    password: "",
    isSending: false,
    isShowSendSuccessMessage: false,
    sendErrorMessage: undefined,
};
exports.view = redux_common_1.createReducer(initialState, function (handle) {
    handle(actions.MoveCurrentDateAction, function (state, date) {
        return __assign({}, state, { currentDate: date });
    });
    handle(actions.InputPasswordAction, function (state, password) {
        return __assign({}, state, { password: password });
    });
    handle(actions.SendStartAction, function (state) {
        return __assign({}, state, { isSending: true });
    });
    handle(actions.SendSuccessAction, function (state) {
        return __assign({}, state, { isSending: false, isShowSendSuccessMessage: true });
    });
    handle(actions.CloseSendSuccessMessageAction, function (state) {
        return __assign({}, state, { isShowSendSuccessMessage: false });
    });
    handle(actions.SendErrorAction, function (state, message) {
        return __assign({}, state, { isSending: false, sendErrorMessage: message });
    });
    handle(actions.CloseSendErrorMessageAction, function (state) {
        return __assign({}, state, { sendErrorMessage: undefined });
    });
});


/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MuiThemeProvider_1 = __webpack_require__(179);
var moment = __webpack_require__(2);
__webpack_require__(110);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(17);
var react_redux_1 = __webpack_require__(112);
var react_router_1 = __webpack_require__(86);
var react_router_redux_1 = __webpack_require__(85);
var injectTapEventPlugin = __webpack_require__(113);
var InputPage_1 = __webpack_require__(413);
var ListPage_1 = __webpack_require__(414);
var Root_1 = __webpack_require__(415);
var SendPage_1 = __webpack_require__(416);
var DispatchActions_1 = __webpack_require__(411);
var Store_1 = __webpack_require__(412);
injectTapEventPlugin();
moment.locale("ja");
var connector = react_redux_1.connect(function (store) { return ({ value: store }); }, function (dispatch) { return ({ actions: new DispatchActions_1.DispatchActions(dispatch) }); });
var RootComponent = connector(Root_1.Root);
var InputPageComponent = connector(InputPage_1.InputPage);
var ListPageComponent = connector(ListPage_1.ListPage);
var SendPageComponent = connector(SendPage_1.SendPage);
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.hashHistory, Store_1.default);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Store_1.default },
    React.createElement(MuiThemeProvider_1.default, null,
        React.createElement(react_router_1.Router, { history: history },
            React.createElement(react_router_1.Route, { path: "/", component: RootComponent },
                React.createElement(react_router_1.Route, { path: "/list", component: ListPageComponent }),
                React.createElement(react_router_1.Route, { path: "/send", component: SendPageComponent }),
                React.createElement(react_router_1.IndexRoute, { component: InputPageComponent }))))), document.getElementById("app"));


/***/ })

},[801]);
//# sourceMappingURL=app.js.map