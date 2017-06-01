webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DateUtils_1 = __webpack_require__(57);
var defaultDayKintai = {
    inTime: "",
    outTime: "",
    noRest2: false,
    noRest3: false,
    noRest4: false,
    noRest5: false,
    noRest6: false,
    showRest2: false,
    showRest3: false,
    showRest4: false,
    showRest5: false,
    showRest6: false,
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redux_commons_1 = __webpack_require__(178);
exports.SelectInAction = redux_commons_1.action("SelectIn");
exports.SelectOutAction = redux_commons_1.action("SelectOut");
exports.MoveCurrentDateAction = redux_commons_1.action("MoveCurrentDate");
exports.InputMemoAction = redux_commons_1.action("InputMemo");
exports.InputEmailAction = redux_commons_1.action("InputEmail");
exports.InputPasswordAction = redux_commons_1.action("InputPassword");
exports.SendStartAction = redux_commons_1.action("SendStart");
exports.SendSuccessAction = redux_commons_1.action("SendSuccess");
exports.CloseSendSuccessMessageAction = redux_commons_1.action("CloseSendSuccessMessage");
exports.SendErrorAction = redux_commons_1.action("SendError");
exports.CloseSendErrorMessageAction = redux_commons_1.action("CloseSendErrorMessage");
exports.InputEmployeeNoAction = redux_commons_1.action("InputEmployeeNo");
exports.InputLastNameAction = redux_commons_1.action("InputLastName");
exports.InputFirstNameAction = redux_commons_1.action("InputFirstName");
exports.InputDepartmentCodeAction = redux_commons_1.action("InputDepartmentCode");
exports.InputManageTypeAction = redux_commons_1.action("InputManageType");
exports.InputManager1Action = redux_commons_1.action("InputManager1");
exports.InputManager1PeriodAction = redux_commons_1.action("InputManager1Period");
exports.InputManager2Action = redux_commons_1.action("InputManager2");
exports.InputManager2PeriodAction = redux_commons_1.action("InputManager2Period");
exports.InputDefaultProjectNoAction = redux_commons_1.action("InputDefaultProjectNo");
exports.InputDefaultWorkCodeAction = redux_commons_1.action("InputDefaultWorkCode");
exports.ToggleRest2Action = redux_commons_1.action("ToggleRest2");
exports.ToggleRest3Action = redux_commons_1.action("ToggleRest3");
exports.ToggleRest4Action = redux_commons_1.action("ToggleRest4");
exports.ToggleRest5Action = redux_commons_1.action("ToggleRest5");
exports.ToggleRest6Action = redux_commons_1.action("ToggleRest6");


/***/ }),

/***/ 178:
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
    reducers(function (actionType, reduce) {
        if (reducerMap[actionType.type]) {
            throw new Error("すでに登録済みのactionです: " + actionType.type);
        }
        reducerMap[actionType.type] = reduce;
    });
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LinearProgress_1 = __webpack_require__(230);
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

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 420:
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
var AppBar_1 = __webpack_require__(95);
var IconButton_1 = __webpack_require__(35);
var keyboard_arrow_left_1 = __webpack_require__(259);
var keyboard_arrow_right_1 = __webpack_require__(260);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var ToolbarWithProgress_1 = __webpack_require__(179);
var MonthToolbar = (function (_super) {
    __extends(MonthToolbar, _super);
    function MonthToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleBefore(event); } },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleAfter(event); } },
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

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var react_router_redux_1 = __webpack_require__(87);
var redux_1 = __webpack_require__(111);
var createLogger = __webpack_require__(182);
var redux_persist_1 = __webpack_require__(183);
var KintaiReducer_1 = __webpack_require__(825);
var ViewReducer_1 = __webpack_require__(826);
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

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var react_router_1 = __webpack_require__(88);
var actions = __webpack_require__(177);
var ApiClient_1 = __webpack_require__(816);
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
    DispatchActions.prototype.showCommonPage = function () {
        react_router_1.hashHistory.push("/common");
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
    DispatchActions.prototype.inputEmployeeNo = function (employeeNumber) {
        this.dispatch(actions.InputEmployeeNoAction.create(employeeNumber));
    };
    DispatchActions.prototype.inputLastName = function (lastName) {
        this.dispatch(actions.InputLastNameAction.create(lastName));
    };
    DispatchActions.prototype.inputFirstName = function (firstName) {
        // TODO 入力チェック？
        this.dispatch(actions.InputFirstNameAction.create(firstName));
    };
    DispatchActions.prototype.inputDepartmentCode = function (departmentCode) {
        this.dispatch(actions.InputDepartmentCodeAction.create(departmentCode));
    };
    DispatchActions.prototype.inputManageType = function (manageType) {
        this.dispatch(actions.InputManageTypeAction.create(manageType));
    };
    DispatchActions.prototype.inputManager1 = function (manager1) {
        this.dispatch(actions.InputManager1Action.create(manager1));
    };
    DispatchActions.prototype.inputManager1Period = function (manager1Period) {
        this.dispatch(actions.InputManager1PeriodAction.create(manager1Period));
    };
    DispatchActions.prototype.inputManager2 = function (manager2) {
        this.dispatch(actions.InputManager2Action.create(manager2));
    };
    DispatchActions.prototype.inputManager2Period = function (manager2Period) {
        this.dispatch(actions.InputManager2PeriodAction.create(manager2Period));
    };
    DispatchActions.prototype.inputDefaultProjectNo = function (defaultProjectNo) {
        this.dispatch(actions.InputDefaultProjectNoAction.create(defaultProjectNo));
    };
    DispatchActions.prototype.inputDefaultWorkCode = function (defaultWorkCode) {
        this.dispatch(actions.InputDefaultWorkCodeAction.create(defaultWorkCode));
    };
    DispatchActions.prototype.toggleRest2 = function (date) {
        this.dispatch(actions.ToggleRest2Action.create(date));
    };
    DispatchActions.prototype.toggleRest3 = function (date) {
        this.dispatch(actions.ToggleRest3Action.create(date));
    };
    DispatchActions.prototype.toggleRest4 = function (date) {
        this.dispatch(actions.ToggleRest4Action.create(date));
    };
    DispatchActions.prototype.toggleRest5 = function (date) {
        this.dispatch(actions.ToggleRest5Action.create(date));
    };
    DispatchActions.prototype.toggleRest6 = function (date) {
        this.dispatch(actions.ToggleRest6Action.create(date));
    };
    return DispatchActions;
}());
exports.DispatchActions = DispatchActions;


/***/ }),

/***/ 424:
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
var AppBar_1 = __webpack_require__(95);
var React = __webpack_require__(1);
var ToolbarWithProgress_1 = __webpack_require__(179);
var Main_1 = __webpack_require__(817);
var CommonPage = (function (_super) {
    __extends(CommonPage, _super);
    function CommonPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ToolbarWithProgress_1.ToolbarWithProgress, __assign({}, this.props),
                React.createElement(AppBar_1.default, { title: "共通", showMenuIconButton: false })),
            React.createElement(Main_1.Main, __assign({}, this.props))));
    };
    return CommonPage;
}(React.Component));
exports.CommonPage = CommonPage;


/***/ }),

/***/ 425:
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
var Main_1 = __webpack_require__(819);
var Toolbar_1 = __webpack_require__(821);
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

/***/ 426:
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
var MonthToolbar_1 = __webpack_require__(420);
var Main_1 = __webpack_require__(822);
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

/***/ 427:
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
var FooterTab_1 = __webpack_require__(818);
var SendStatus_1 = __webpack_require__(823);
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

/***/ 428:
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
var MonthToolbar_1 = __webpack_require__(420);
var Main_1 = __webpack_require__(824);
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

var japanese_holidays_1 = __webpack_require__(180);
var colors_1 = __webpack_require__(100);
var moment = __webpack_require__(3);
__webpack_require__(151);
moment.locale("ja");
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
    // 00分は繰り上げしたくないので14分足してから15分の切り捨てをする
    var plus14 = moment(date).add(14, "minutes").toDate();
    return floor15Minutes(plus14);
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

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

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

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageWbSunny = function ImageWbSunny(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z' })
  );
};
ImageWbSunny = (0, _pure2.default)(ImageWbSunny);
ImageWbSunny.displayName = 'ImageWbSunny';
ImageWbSunny.muiName = 'SvgIcon';

exports.default = ImageWbSunny;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapsHotel = function MapsHotel(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z' })
  );
};
MapsHotel = (0, _pure2.default)(MapsHotel);
MapsHotel.displayName = 'MapsHotel';
MapsHotel.muiName = 'SvgIcon';

exports.default = MapsHotel;

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapsRestaurantMenu = function MapsRestaurantMenu(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z' })
  );
};
MapsRestaurantMenu = (0, _pure2.default)(MapsRestaurantMenu);
MapsRestaurantMenu.displayName = 'MapsRestaurantMenu';
MapsRestaurantMenu.muiName = 'SvgIcon';

exports.default = MapsRestaurantMenu;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationAirlineSeatReclineNormal = function NotificationAirlineSeatReclineNormal(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7.59 5.41c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83-.79.79-2.05.79-2.83 0zM6 16V7H4v9c0 2.76 2.24 5 5 5h6v-2H9c-1.66 0-3-1.34-3-3zm14 4.07L14.93 15H11.5v-3.68c1.4 1.15 3.6 2.16 5.5 2.16v-2.16c-1.66.02-3.61-.87-4.67-2.04l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07z' })
  );
};
NotificationAirlineSeatReclineNormal = (0, _pure2.default)(NotificationAirlineSeatReclineNormal);
NotificationAirlineSeatReclineNormal.displayName = 'NotificationAirlineSeatReclineNormal';
NotificationAirlineSeatReclineNormal.muiName = 'SvgIcon';

exports.default = NotificationAirlineSeatReclineNormal;

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlacesFreeBreakfast = function PlacesFreeBreakfast(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z' })
  );
};
PlacesFreeBreakfast = (0, _pure2.default)(PlacesFreeBreakfast);
PlacesFreeBreakfast.displayName = 'PlacesFreeBreakfast';
PlacesFreeBreakfast.muiName = 'SvgIcon';

exports.default = PlacesFreeBreakfast;

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlacesHotTub = function PlacesHotTub(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('circle', { cx: '7', cy: '6', r: '2' }),
    _react2.default.createElement('path', { d: 'M11.15 12c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8H11.15zM7 20H5v-6h2v6zm4 0H9v-6h2v6zm4 0h-2v-6h2v6zm4 0h-2v-6h2v6zm-.35-14.14l-.07-.07c-.57-.62-.82-1.41-.67-2.2L18 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71zm-4 0l-.07-.07c-.57-.62-.82-1.41-.67-2.2L14 3h-1.89l-.06.43c-.2 1.36.27 2.71 1.3 3.72l.07.06c.57.62.82 1.41.67 2.2l-.11.59h1.91l.06-.43c.21-1.36-.27-2.71-1.3-3.71z' })
  );
};
PlacesHotTub = (0, _pure2.default)(PlacesHotTub);
PlacesHotTub.displayName = 'PlacesHotTub';
PlacesHotTub.muiName = 'SvgIcon';

exports.default = PlacesHotTub;

/***/ }),

/***/ 659:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(15);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialPerson = function SocialPerson(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' })
  );
};
SocialPerson = (0, _pure2.default)(SocialPerson);
SocialPerson.displayName = 'SocialPerson';
SocialPerson.muiName = 'SvgIcon';

exports.default = SocialPerson;

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(184);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(109);
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
        employeeNo: kintai.person.employeeNo,
        employeName: kintai.person.lastName + kintai.person.firstName,
        departmentCode: kintai.person.departmentCode,
        manageType: kintai.person.manageType,
        manager1: kintai.person.manager1,
        manager1Period: kintai.person.manager1Period,
        manager2: kintai.person.manager2,
        manager2Period: kintai.person.manager2Period,
        sendMailAddr: kintai.person.email + "@caica.jp",
        password: password,
        workInfoList: workInfoList,
    };
}
function createWorkInfo(date, kintai) {
    var dayKintai = KintaiUtils_1.getDayKintai(kintai, date);
    if (!dayKintai) {
        return undefined;
    }
    return toWorkInfo(date, dayKintai, kintai.person);
}
function toWorkInfo(date, dayKintai, person) {
    var projectNo = person.defaultProjectNo;
    var workCode = person.defaultWorkCode;
    if (!dayKintai.inTime && !dayKintai.outTime) {
        projectNo = "";
        workCode = "";
    }
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
        pjNo: projectNo,
        wkCd: workCode,
    };
}


/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuItem_1 = __webpack_require__(78);
var SelectField_1 = __webpack_require__(144);
var TextField_1 = __webpack_require__(42);
var React = __webpack_require__(1);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "content" },
            React.createElement(TextField_1.default, { hintText: "部署コード", value: this.props.value.kintai.person.departmentCode, onChange: function (_, value) { return _this.handleDepartmentCodeChange(value); } }),
            React.createElement(TextField_1.default, { hintText: "社員番号", value: this.props.value.kintai.person.employeeNo, onChange: function (_, value) { return _this.handleEmployeeNoChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "姓", value: this.props.value.kintai.person.lastName, onChange: function (_, value) { return _this.handleLastNameChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "名", value: this.props.value.kintai.person.firstName, onChange: function (_, value) { return _this.handleFirstNameChange(value); } }),
            React.createElement("br", null),
            React.createElement(SelectField_1.default, { hintText: "管理識別", value: this.props.value.kintai.person.manageType, onChange: function (event, _, value) { return _this.handleManageTypeChange(event, value); }, labelStyle: { height: "48px" } },
                React.createElement(MenuItem_1.default, { value: "", primaryText: "" }),
                React.createElement(MenuItem_1.default, { value: "1", primaryText: "1: M等級" }),
                React.createElement(MenuItem_1.default, { value: "2", primaryText: "2: D等級、E等級の営業職" }),
                React.createElement(MenuItem_1.default, { value: "3", primaryText: "3: 一部契約社員" }),
                React.createElement(MenuItem_1.default, { value: "4", primaryText: "4: 一部契約社員" })),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "勤怠管理者1", value: this.props.value.kintai.person.manager1, onChange: function (_, value) { return _this.handleManager1Change(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "期間1", value: this.props.value.kintai.person.manager1Period, onChange: function (_, value) { return _this.handleManager1PeriodChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "勤怠管理者2", value: this.props.value.kintai.person.manager2, onChange: function (_, value) { return _this.handleManager2Change(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "期間2", value: this.props.value.kintai.person.manager2Period, onChange: function (_, value) { return _this.handleManager2PeriodChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "デフォルトプロジェクト番号", value: this.props.value.kintai.person.defaultProjectNo, onChange: function (_, value) { return _this.handleDefaultProjectNoChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "デフォルト作業コード", value: this.props.value.kintai.person.defaultWorkCode, onChange: function (_, value) { return _this.handleDefaultWorkCodeChange(value); } })));
    };
    Main.prototype.handleEmployeeNoChange = function (value) {
        this.props.actions.inputEmployeeNo(value);
    };
    Main.prototype.handleLastNameChange = function (value) {
        this.props.actions.inputLastName(value);
    };
    Main.prototype.handleFirstNameChange = function (value) {
        this.props.actions.inputFirstName(value);
    };
    Main.prototype.handleDepartmentCodeChange = function (value) {
        this.props.actions.inputDepartmentCode(value);
    };
    Main.prototype.handleManageTypeChange = function (event, value) {
        event.preventDefault();
        this.props.actions.inputManageType(value);
    };
    Main.prototype.handleManager1Change = function (value) {
        this.props.actions.inputManager1(value);
    };
    Main.prototype.handleManager1PeriodChange = function (value) {
        this.props.actions.inputManager1Period(value);
    };
    Main.prototype.handleManager2Change = function (value) {
        this.props.actions.inputManager2(value);
    };
    Main.prototype.handleManager2PeriodChange = function (value) {
        this.props.actions.inputManager2Period(value);
    };
    Main.prototype.handleDefaultProjectNoChange = function (value) {
        this.props.actions.inputDefaultProjectNo(value);
    };
    Main.prototype.handleDefaultWorkCodeChange = function (value) {
        this.props.actions.inputDefaultWorkCode(value);
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BottomNavigation_1 = __webpack_require__(221);
var Divider_1 = __webpack_require__(137);
var list_1 = __webpack_require__(638);
var send_1 = __webpack_require__(641);
var edit_1 = __webpack_require__(644);
var person_1 = __webpack_require__(659);
var React = __webpack_require__(1);
var FooterTab = (function (_super) {
    __extends(FooterTab, _super);
    function FooterTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FooterTab.prototype.render = function () {
        var _this = this;
        var selectedIndex = this.getSelectedIndex();
        return (React.createElement("div", { className: "footerTab" },
            React.createElement(Divider_1.default, null),
            React.createElement(BottomNavigation_1.BottomNavigation, { selectedIndex: selectedIndex },
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "入力", icon: React.createElement(edit_1.default, null), onTouchTap: function (event) { return _this.onInputSelected(event); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "一覧", icon: React.createElement(list_1.default, null), onTouchTap: function (event) { return _this.onListSelected(event); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "共通", icon: React.createElement(person_1.default, null), onTouchTap: function (event) { return _this.onCommonSelected(event); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "送信", icon: React.createElement(send_1.default, null), onTouchTap: function (event) { return _this.onSendSelected(event); } }))));
    };
    FooterTab.prototype.onInputSelected = function (event) {
        event.preventDefault();
        this.props.actions.showInputPage();
    };
    FooterTab.prototype.onListSelected = function (event) {
        event.preventDefault();
        this.props.actions.showListPage();
    };
    FooterTab.prototype.onCommonSelected = function (event) {
        event.preventDefault();
        this.props.actions.showCommonPage();
    };
    FooterTab.prototype.onSendSelected = function (event) {
        event.preventDefault();
        this.props.actions.showSendPage();
    };
    FooterTab.prototype.getSelectedIndex = function () {
        if (this.props.location.pathname === "/list") {
            return 1;
        }
        if (this.props.location.pathname === "/common") {
            return 2;
        }
        if (this.props.location.pathname === "/send") {
            return 3;
        }
        return 0;
    };
    return FooterTab;
}(React.Component));
exports.FooterTab = FooterTab;


/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RaisedButton_1 = __webpack_require__(143);
var wb_sunny_1 = __webpack_require__(645);
var hotel_1 = __webpack_require__(646);
var restaurant_menu_1 = __webpack_require__(647);
var airline_seat_recline_normal_1 = __webpack_require__(656);
var free_breakfast_1 = __webpack_require__(657);
var hot_tub_1 = __webpack_require__(658);
var TextField_1 = __webpack_require__(42);
var React = __webpack_require__(1);
var KintaiUtils_1 = __webpack_require__(109);
var TimeInput_1 = __webpack_require__(820);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var _this = this;
        var currentKintai = KintaiUtils_1.getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate);
        var rest2Icon = currentKintai.noRest2 ? React.createElement(airline_seat_recline_normal_1.default, null) : React.createElement(free_breakfast_1.default, null);
        var rest3Icon = currentKintai.noRest3 ? React.createElement(airline_seat_recline_normal_1.default, null) : React.createElement(restaurant_menu_1.default, null);
        var rest4Icon = currentKintai.noRest4 ? React.createElement(airline_seat_recline_normal_1.default, null) : React.createElement(hot_tub_1.default, null);
        var rest5Icon = currentKintai.noRest5 ? React.createElement(airline_seat_recline_normal_1.default, null) : React.createElement(hotel_1.default, null);
        var rest6Icon = currentKintai.noRest6 ? React.createElement(airline_seat_recline_normal_1.default, null) : React.createElement(wb_sunny_1.default, null);
        return (React.createElement("div", { className: "content" },
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.IN, value: currentKintai.inTime, onSelected: function (value) { return _this.handleInSelected(value); } }),
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.OUT, value: currentKintai.outTime, onSelected: function (value) { return _this.handleOutSelected(value); } }),
            React.createElement("span", { style: { display: currentKintai.showRest2 ? "" : "none" } },
                React.createElement(RaisedButton_1.default, { label: React.createElement("div", { style: { textAlign: "center" } },
                        "17:45",
                        React.createElement("br", null),
                        "18:00"), icon: rest2Icon, secondary: currentKintai.noRest2, onTouchTap: function (event) { return _this.handleRestToggle(event, "2"); }, style: { height: "70px", margin: 5 } })),
            React.createElement("span", { style: { display: currentKintai.showRest3 ? "" : "none" } },
                React.createElement(RaisedButton_1.default, { label: React.createElement("div", { style: { textAlign: "center" } },
                        "19:30",
                        React.createElement("br", null),
                        "20:00"), icon: rest3Icon, secondary: currentKintai.noRest3, onTouchTap: function (event) { return _this.handleRestToggle(event, "3"); }, style: { height: "70px", margin: 5 } })),
            React.createElement("span", { style: { display: currentKintai.showRest4 ? "" : "none" } },
                React.createElement(RaisedButton_1.default, { label: React.createElement("div", { style: { textAlign: "center" } },
                        "22:00",
                        React.createElement("br", null),
                        "22:15"), icon: rest4Icon, secondary: currentKintai.noRest4, onTouchTap: function (event) { return _this.handleRestToggle(event, "4"); }, style: { height: "70px", margin: 5 } })),
            React.createElement("span", { style: { display: currentKintai.showRest5 ? "" : "none" } },
                React.createElement(RaisedButton_1.default, { label: React.createElement("div", { style: { textAlign: "center" } },
                        "02:30",
                        React.createElement("br", null),
                        "03:00"), icon: rest5Icon, secondary: currentKintai.noRest5, onTouchTap: function (event) { return _this.handleRestToggle(event, "5"); }, style: { height: "70px", margin: 5 } })),
            React.createElement("span", { style: { display: currentKintai.showRest6 ? "" : "none" } },
                React.createElement(RaisedButton_1.default, { label: React.createElement("div", { style: { textAlign: "center" } },
                        "08:30",
                        React.createElement("br", null),
                        "09:00"), icon: rest6Icon, secondary: currentKintai.noRest6, onTouchTap: function (event) { return _this.handleRestToggle(event, "6"); }, style: { height: "70px", margin: 5 } })),
            React.createElement(TextField_1.default, { multiLine: true, fullWidth: true, hintText: "メモ（勤務表には反映されません）", value: currentKintai.memo, onChange: function (_, value) { return _this.handleMemoChange(value); } })));
    };
    Main.prototype.handleInSelected = function (value) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleOutSelected = function (value) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleMemoChange = function (value) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleRestToggle = function (event, resttype) {
        event.preventDefault();
        switch (resttype) {
            case "2": {
                this.props.actions.toggleRest2(this.props.value.view.currentDate);
                break;
            }
            case "3": {
                this.props.actions.toggleRest3(this.props.value.view.currentDate);
                break;
            }
            case "4": {
                this.props.actions.toggleRest4(this.props.value.view.currentDate);
                break;
            }
            case "5": {
                this.props.actions.toggleRest5(this.props.value.view.currentDate);
                break;
            }
            case "6": {
                this.props.actions.toggleRest6(this.props.value.view.currentDate);
                break;
            }
            default: {
                break;
            }
        }
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IconButton_1 = __webpack_require__(35);
var MenuItem_1 = __webpack_require__(78);
var SelectField_1 = __webpack_require__(144);
var schedule_1 = __webpack_require__(639);
var update_1 = __webpack_require__(640);
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
        var _this = this;
        return (React.createElement("div", { style: { display: "flex" } },
            React.createElement(SelectField_1.default, { hintText: this.props.type.label, value: this.props.value, onChange: function (event, _, value) { return _this.handleChange(event, value); }, style: { width: "200px" }, labelStyle: { height: "48px" } }, this.props.type.menus),
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleNow(event); } },
                React.createElement(update_1.default, null)),
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleRegular(event); } },
                React.createElement(schedule_1.default, null))));
    };
    TimeInput.prototype.handleChange = function (event, value) {
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

/***/ 821:
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
var AppBar_1 = __webpack_require__(95);
var IconButton_1 = __webpack_require__(35);
var keyboard_arrow_left_1 = __webpack_require__(259);
var keyboard_arrow_right_1 = __webpack_require__(260);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var ToolbarWithProgress_1 = __webpack_require__(179);
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleBefore(event); } },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: function (event) { return _this.handleAfter(event); } },
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

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var List_1 = __webpack_require__(231);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(109);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var _this = this;
        var listItems = DateUtils_1.getMonthDates(this.props.value.view.currentDate).map(function (date) { return _this.createListItem(date); });
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

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dialog_1 = __webpack_require__(96);
var Snackbar_1 = __webpack_require__(236);
var React = __webpack_require__(1);
var SendStatus = (function (_super) {
    __extends(SendStatus, _super);
    function SendStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SendStatus.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Snackbar_1.default, { open: this.props.value.view.isShowSendSuccessMessage, message: "勤務表を送信しました", autoHideDuration: 2000, onRequestClose: function () { return _this.handleCloseSendSuccess(); } }),
            React.createElement(Dialog_1.default, { open: this.props.value.view.sendErrorMessage != null, title: "エラー", onRequestClose: function () { return _this.handleCloseError(); } }, this.props.value.view.sendErrorMessage)));
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

/***/ 824:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RaisedButton_1 = __webpack_require__(143);
var TextField_1 = __webpack_require__(42);
var React = __webpack_require__(1);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var _this = this;
        var buttonLabel = this.props.value.view.isSending ? "送信中..." : "勤務表送信";
        return (React.createElement("div", { className: "content" },
            React.createElement(TextField_1.default, { hintText: "送信先アドレス", value: this.props.value.kintai.person.email, onChange: function (_, value) { return _this.handleEmailChange(value); }, style: { width: "192px" } }),
            "@caica.jp",
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "zipパスワード", type: "password", value: this.props.value.view.password, onChange: function (_, value) { return _this.handlePasswordChange(value); } }),
            React.createElement("br", null),
            React.createElement(RaisedButton_1.default, { label: buttonLabel, primary: true, onTouchTap: function (event) { return _this.handleSend(event); }, disabled: this.props.value.view.isSending })));
    };
    Main.prototype.handleEmailChange = function (value) {
        this.props.actions.inputEmail(value);
    };
    Main.prototype.handlePasswordChange = function (value) {
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

/***/ 825:
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
var actions = __webpack_require__(177);
var redux_commons_1 = __webpack_require__(178);
var DateUtils_1 = __webpack_require__(57);
var KintaiUtils_1 = __webpack_require__(109);
var initialState = {
    person: {
        email: "",
        employeeNo: "",
        lastName: "",
        firstName: "",
        departmentCode: "",
        manageType: "",
        manager1: "",
        manager1Period: "1日～末日",
        manager2: "",
        manager2Period: "",
        defaultProjectNo: "",
        defaultWorkCode: "F",
    },
    days: {},
};
exports.kintai = redux_commons_1.createReducer(initialState, function (handle) {
    handle(actions.SelectInAction, function (state, selectedTime) {
        return updateDayKintai(state, selectedTime.date, { inTime: selectedTime.time });
    });
    handle(actions.SelectOutAction, function (state, selectedTime) {
        // 時刻を比較しやすいように4桁なら先頭に0をつけて5桁にしておく
        var time = selectedTime.time;
        if (time.length === 4) {
            time = "0" + time;
        }
        var showRest2 = time > "17:45" || time <= "09:00";
        var showRest3 = time > "19:30" || time <= "09:00";
        var showRest4 = time > "22:00" || time <= "09:00";
        var showRest5 = time > "02:30" && time <= "09:00";
        var showRest6 = time > "08:30" && time <= "09:00";
        return updateDayKintai(state, selectedTime.date, { outTime: selectedTime.time,
            showRest2: showRest2, showRest3: showRest3, showRest4: showRest4, showRest5: showRest5, showRest6: showRest6 });
    });
    handle(actions.InputMemoAction, function (state, memo) {
        return updateDayKintai(state, memo.date, { memo: memo.text });
    });
    handle(actions.InputEmailAction, function (state, email) {
        var person = __assign({}, state.person, { email: email });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputEmployeeNoAction, function (state, employeeNo) {
        var person = __assign({}, state.person, { employeeNo: employeeNo });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputLastNameAction, function (state, lastName) {
        var person = __assign({}, state.person, { lastName: lastName });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputFirstNameAction, function (state, firstName) {
        var person = __assign({}, state.person, { firstName: firstName });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputDepartmentCodeAction, function (state, departmentCode) {
        var person = __assign({}, state.person, { departmentCode: departmentCode });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputManageTypeAction, function (state, manageType) {
        var person = __assign({}, state.person, { manageType: manageType });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputManager1Action, function (state, manager1) {
        var person = __assign({}, state.person, { manager1: manager1 });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputManager1PeriodAction, function (state, manager1Period) {
        var person = __assign({}, state.person, { manager1Period: manager1Period });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputManager2Action, function (state, manager2) {
        var person = __assign({}, state.person, { manager2: manager2 });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputManager2PeriodAction, function (state, manager2Period) {
        var person = __assign({}, state.person, { manager2Period: manager2Period });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputDefaultProjectNoAction, function (state, defaultProjectNo) {
        var person = __assign({}, state.person, { defaultProjectNo: defaultProjectNo });
        return __assign({}, state, { person: person });
    });
    handle(actions.InputDefaultWorkCodeAction, function (state, defaultWorkCode) {
        var person = __assign({}, state.person, { defaultWorkCode: defaultWorkCode });
        return __assign({}, state, { person: person });
    });
    handle(actions.ToggleRest2Action, function (state, date) {
        var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
        var oldNoRest2 = oldDayKintai ? oldDayKintai.noRest2 : false;
        return updateDayKintai(state, date, { noRest2: !oldNoRest2 });
    });
    handle(actions.ToggleRest3Action, function (state, date) {
        var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
        var oldNoRest3 = oldDayKintai ? oldDayKintai.noRest3 : false;
        return updateDayKintai(state, date, { noRest3: !oldNoRest3 });
    });
    handle(actions.ToggleRest4Action, function (state, date) {
        var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
        var oldNoRest4 = oldDayKintai ? oldDayKintai.noRest4 : false;
        return updateDayKintai(state, date, { noRest4: !oldNoRest4 });
    });
    handle(actions.ToggleRest5Action, function (state, date) {
        var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
        var oldNoRest5 = oldDayKintai ? oldDayKintai.noRest5 : false;
        return updateDayKintai(state, date, { noRest5: !oldNoRest5 });
    });
    handle(actions.ToggleRest6Action, function (state, date) {
        var oldDayKintai = KintaiUtils_1.getDayKintai(state, date);
        var oldNoRest6 = oldDayKintai ? oldDayKintai.noRest6 : false;
        return updateDayKintai(state, date, { noRest6: !oldNoRest6 });
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

/***/ 826:
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
var actions = __webpack_require__(177);
var redux_commons_1 = __webpack_require__(178);
var initialState = {
    currentDate: new Date(),
    password: "",
    isSending: false,
    isShowSendSuccessMessage: false,
    sendErrorMessage: undefined,
};
exports.view = redux_commons_1.createReducer(initialState, function (handle) {
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

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MuiThemeProvider_1 = __webpack_require__(181);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(20);
var react_redux_1 = __webpack_require__(112);
var react_router_1 = __webpack_require__(88);
var react_router_redux_1 = __webpack_require__(87);
var injectTapEventPlugin = __webpack_require__(113);
var DispatchActions_1 = __webpack_require__(423);
var CommonPage_1 = __webpack_require__(424);
var InputPage_1 = __webpack_require__(425);
var ListPage_1 = __webpack_require__(426);
var Root_1 = __webpack_require__(427);
var SendPage_1 = __webpack_require__(428);
var Store_1 = __webpack_require__(422);
injectTapEventPlugin();
var connector = react_redux_1.connect(function (store) { return ({ value: store }); }, function (dispatch) { return ({ actions: new DispatchActions_1.DispatchActions(dispatch) }); });
var RootComponent = connector(Root_1.Root);
var InputPageComponent = connector(InputPage_1.InputPage);
var CommonPageComponent = connector(CommonPage_1.CommonPage);
var ListPageComponent = connector(ListPage_1.ListPage);
var SendPageComponent = connector(SendPage_1.SendPage);
var history = react_router_redux_1.syncHistoryWithStore(react_router_1.hashHistory, Store_1.default);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Store_1.default },
    React.createElement(MuiThemeProvider_1.default, null,
        React.createElement(react_router_1.Router, { history: history },
            React.createElement(react_router_1.Route, { path: "/", component: RootComponent },
                React.createElement(react_router_1.Route, { path: "/list", component: ListPageComponent }),
                React.createElement(react_router_1.Route, { path: "/common", component: CommonPageComponent }),
                React.createElement(react_router_1.Route, { path: "/send", component: SendPageComponent }),
                React.createElement(react_router_1.IndexRoute, { component: InputPageComponent }))))), document.getElementById("app"));


/***/ })

},[828]);
//# sourceMappingURL=app.js.map