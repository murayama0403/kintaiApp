webpackJsonp([0],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils_1 = __webpack_require__(52);
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

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_commons_1 = __webpack_require__(165);
exports.SelectInAction = redux_commons_1.action("SelectIn");
exports.SelectOutAction = redux_commons_1.action("SelectOut");
exports.MoveCurrentDateAction = redux_commons_1.action("MoveCurrentDate");
exports.InputSpecialNoteAction = redux_commons_1.action("InputSpecialNote");
exports.SelectHolidayAction = redux_commons_1.action("SelectHoliday");
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


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LinearProgress_1 = __webpack_require__(211);
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

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppBar_1 = __webpack_require__(88);
var IconButton_1 = __webpack_require__(33);
var keyboard_arrow_left_1 = __webpack_require__(235);
var keyboard_arrow_right_1 = __webpack_require__(236);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(52);
var ToolbarWithProgress_1 = __webpack_require__(166);
var MonthToolbar = (function (_super) {
    __extends(MonthToolbar, _super);
    function MonthToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleBefore(); } },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleAfter(); } },
                React.createElement(keyboard_arrow_right_1.default, { color: "white" })));
        return _this;
    }
    MonthToolbar.prototype.render = function () {
        return (React.createElement(ToolbarWithProgress_1.ToolbarWithProgress, __assign({}, this.props),
            React.createElement(AppBar_1.default, { title: this.formatCurrentMonth(), showMenuIconButton: false, iconElementRight: this.buttons })));
    };
    MonthToolbar.prototype.handleBefore = function () {
        var date = DateUtils_1.moveMonths(this.props.value.view.currentDate, -1);
        this.props.actions.moveCurrentDate(date);
    };
    MonthToolbar.prototype.handleAfter = function () {
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

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__(105);
var redux_logger_1 = __webpack_require__(169);
var redux_persist_1 = __webpack_require__(170);
var KintaiReducer_1 = __webpack_require__(788);
var ViewReducer_1 = __webpack_require__(789);
// weinreでConsoleデバッグができるようにredux-loggerがconsole.logを呼び出すように変更
var logger = redux_logger_1.createLogger({
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
    view: ViewReducer_1.view,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), redux_1.compose(redux_persist_1.autoRehydrate(), redux_1.applyMiddleware(logger)));
redux_persist_1.persistStore(store, { whitelist: ["kintai"] });
exports.default = store;


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actions = __webpack_require__(164);
var ApiClient_1 = __webpack_require__(779);
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
            return;
        }).catch(function () {
            _this.dispatch(actions.SendErrorAction.create("ネットワークエラー"));
        });
    };
    DispatchActions.prototype.inputSpecialNote = function (date, value) {
        this.dispatch(actions.InputSpecialNoteAction.create({
            date: date,
            text: value,
        }));
    };
    DispatchActions.prototype.selectHoliday = function (date, holiday) {
        this.dispatch(actions.SelectHolidayAction.create({
            date: date,
            value: holiday,
        }));
    };
    DispatchActions.prototype.inputMemo = function (date, memo) {
        this.dispatch(actions.InputMemoAction.create({
            date: date,
            text: memo,
        }));
    };
    DispatchActions.prototype.showInputPage = function (history, date) {
        if (!!date) {
            this.moveCurrentDate(date);
        }
        history.push("/");
    };
    DispatchActions.prototype.showListPage = function (history) {
        history.push("/list");
    };
    DispatchActions.prototype.showCommonPage = function (history) {
        history.push("/common");
    };
    DispatchActions.prototype.showSendPage = function (history) {
        history.push("/send");
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
    return DispatchActions;
}());
exports.DispatchActions = DispatchActions;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppBar_1 = __webpack_require__(88);
var React = __webpack_require__(1);
var ToolbarWithProgress_1 = __webpack_require__(166);
var Main_1 = __webpack_require__(780);
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

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var Main_1 = __webpack_require__(782);
var Toolbar_1 = __webpack_require__(784);
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

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var MonthToolbar_1 = __webpack_require__(396);
var Main_1 = __webpack_require__(785);
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

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var react_router_1 = __webpack_require__(23);
var Connector_1 = __webpack_require__(794);
var FooterTab_1 = __webpack_require__(781);
var CommonPage_1 = __webpack_require__(401);
var InputPage_1 = __webpack_require__(402);
var ListPage_1 = __webpack_require__(403);
var SendPage_1 = __webpack_require__(405);
var SendStatus_1 = __webpack_require__(786);
var ListPageComponent = Connector_1.connect(ListPage_1.ListPage);
var CommonPageComponent = Connector_1.connect(CommonPage_1.CommonPage);
var SendPageComponent = Connector_1.connect(SendPage_1.SendPage);
var InputPageComponent = Connector_1.connect(InputPage_1.InputPage);
var Root = (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_router_1.Switch, null,
                React.createElement(react_router_1.Route, { path: "/list", component: ListPageComponent }),
                React.createElement(react_router_1.Route, { path: "/common", component: CommonPageComponent }),
                React.createElement(react_router_1.Route, { path: "/send", component: SendPageComponent }),
                React.createElement(react_router_1.Route, { component: InputPageComponent })),
            React.createElement(SendStatus_1.SendStatus, __assign({}, this.props)),
            React.createElement(FooterTab_1.FooterTab, __assign({}, this.props))));
    };
    return Root;
}(React.Component));
exports.Root = Root;


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var MonthToolbar_1 = __webpack_require__(396);
var Main_1 = __webpack_require__(787);
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

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TouchTapEventで２回クリックされたような動きを抑制するため、
// 常にpreventDefaultを呼び出すための実装。
// 参考: https://github.com/callemall/material-ui/issues/5070
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
function forceTouchTapPreventDefault() {
    var react = React;
    var orig = react.createElement;
    // 型を厳密にするTypeScriptでthisの型を定義する時には先頭パラメータとしてthisを使う
    // 参考: https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters
    react.createElement = function (type, props) {
        var children = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            children[_i - 2] = arguments[_i];
        }
        // only wrap native elements (string-ish `type`) which have an onTouchTap prop
        if (typeof type === "string" && props && props.onTouchTap) {
            var onTouchTap_1 = props.onTouchTap;
            props = __assign({}, props, { 
                // thisによる型定義は変数名を変えられないので仕方ないのでtslintを無視設定する
                // tslint:disable-next-line
                onTouchTap: function (e) {
                    e.preventDefault();
                    return onTouchTap_1.apply(this, arguments);
                } });
        }
        return orig.call.apply(orig, [this, type, props].concat(children));
    };
}
exports.forceTouchTapPreventDefault = forceTouchTapPreventDefault;


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var japanese_holidays_1 = __webpack_require__(167);
var colors_1 = __webpack_require__(78);
var moment = __webpack_require__(3);
__webpack_require__(142);
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

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(17);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(16);

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

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MuiThemeProvider_1 = __webpack_require__(168);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(18);
var react_redux_1 = __webpack_require__(106);
var react_router_dom_1 = __webpack_require__(398);
var injectTapEventPlugin = __webpack_require__(107);
var Root_1 = __webpack_require__(404);
var Store_1 = __webpack_require__(399);
var Connector_1 = __webpack_require__(794);
var FixReactTouchTap_1 = __webpack_require__(406);
injectTapEventPlugin();
FixReactTouchTap_1.forceTouchTapPreventDefault();
var RootComponent = Connector_1.connect(Root_1.Root);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Store_1.default },
    React.createElement(MuiThemeProvider_1.default, null,
        React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(RootComponent, null)))), document.getElementById("app"));


/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(171);
var DateUtils_1 = __webpack_require__(52);
var KintaiUtils_1 = __webpack_require__(103);
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
        specialNote: dayKintai.specialNote,
        vacationType: dayKintai.holiday,
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

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem_1 = __webpack_require__(59);
var SelectField_1 = __webpack_require__(92);
var TextField_1 = __webpack_require__(41);
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
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "社員番号", value: this.props.value.kintai.person.employeeNo, onChange: function (_, value) { return _this.handleEmployeeNoChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "姓", value: this.props.value.kintai.person.lastName, onChange: function (_, value) { return _this.handleLastNameChange(value); } }),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { hintText: "名", value: this.props.value.kintai.person.firstName, onChange: function (_, value) { return _this.handleFirstNameChange(value); } }),
            React.createElement("br", null),
            React.createElement(SelectField_1.default, { hintText: "管理識別", value: this.props.value.kintai.person.manageType, onChange: function (_, __, value) { return _this.handleManageTypeChange(value); }, labelStyle: { height: "48px" } },
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
    Main.prototype.handleManageTypeChange = function (value) {
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

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BottomNavigation_1 = __webpack_require__(201);
var Divider_1 = __webpack_require__(131);
var list_1 = __webpack_require__(609);
var send_1 = __webpack_require__(612);
var edit_1 = __webpack_require__(615);
var person_1 = __webpack_require__(625);
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
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "入力", icon: React.createElement(edit_1.default, null), onTouchTap: function () { return _this.onInputSelected(); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "一覧", icon: React.createElement(list_1.default, null), onTouchTap: function () { return _this.onListSelected(); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "共通", icon: React.createElement(person_1.default, null), onTouchTap: function () { return _this.onCommonSelected(); } }),
                React.createElement(BottomNavigation_1.BottomNavigationItem, { label: "送信", icon: React.createElement(send_1.default, null), onTouchTap: function () { return _this.onSendSelected(); } }))));
    };
    FooterTab.prototype.onInputSelected = function () {
        this.props.actions.showInputPage(this.props.history);
    };
    FooterTab.prototype.onListSelected = function () {
        this.props.actions.showListPage(this.props.history);
    };
    FooterTab.prototype.onCommonSelected = function () {
        this.props.actions.showCommonPage(this.props.history);
    };
    FooterTab.prototype.onSendSelected = function () {
        this.props.actions.showSendPage(this.props.history);
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

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IconButton_1 = __webpack_require__(33);
var IconMenu_1 = __webpack_require__(210);
var MenuItem_1 = __webpack_require__(59);
var SelectField_1 = __webpack_require__(92);
var more_vert_1 = __webpack_require__(624);
var TextField_1 = __webpack_require__(41);
var React = __webpack_require__(1);
var Holidays_1 = __webpack_require__(82);
var KintaiUtils_1 = __webpack_require__(103);
var Strings_1 = __webpack_require__(790);
var TimeInput_1 = __webpack_require__(783);
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        var _this = this;
        var currentKintai = KintaiUtils_1.getDayKintaiOrDefault(this.props.value.kintai, this.props.value.view.currentDate);
        var specialNoteMenus = [];
        specialNoteMenus.push(React.createElement(MenuItem_1.default, { key: "", value: "", primaryText: "" }));
        for (var _i = 0, SPECIAL_NOTES_1 = Holidays_1.SPECIAL_NOTES; _i < SPECIAL_NOTES_1.length; _i++) {
            var specialNote = SPECIAL_NOTES_1[_i];
            specialNoteMenus.push(React.createElement(MenuItem_1.default, { key: specialNote.text, value: specialNote.text, primaryText: specialNote.text }));
        }
        var holidayMenus = [];
        holidayMenus.push(React.createElement(MenuItem_1.default, { key: "", value: undefined, primaryText: "" }));
        for (var _a = 0, HOLIDAYS_1 = Holidays_1.HOLIDAYS; _a < HOLIDAYS_1.length; _a++) {
            var holiday = HOLIDAYS_1[_a];
            holidayMenus.push(React.createElement(MenuItem_1.default, { key: holiday.value, value: holiday.value, primaryText: holiday.value + ": " + holiday.text }));
        }
        return (React.createElement("div", { className: "content" },
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.IN, value: currentKintai.inTime, onSelected: function (event) { return _this.handleInSelected(event); } }),
            React.createElement(TimeInput_1.TimeInput, { type: TimeInput_1.OUT, value: currentKintai.outTime, onSelected: function (event) { return _this.handleOutSelected(event); } }),
            React.createElement(TextField_1.default, { multiLine: false, fullWidth: false, hintText: "特記事項", value: Strings_1.undefinedToEmpty(currentKintai.specialNote), onChange: function (_, value) { return _this.handleSpecialNoteChange(value); } }),
            React.createElement(IconMenu_1.default, { iconButtonElement: React.createElement(IconButton_1.default, null,
                    React.createElement(more_vert_1.default, null)), onChange: function (_, value) { return _this.handleSpecialNoteChange(value); }, useLayerForClickAway: true }, specialNoteMenus),
            React.createElement("br", null),
            React.createElement(SelectField_1.default, { hintText: "休暇", value: currentKintai.holiday, onChange: function (_, __, value) { return _this.handleHolidayChange(value); }, style: { width: "200px" }, labelStyle: { height: "48px" } }, holidayMenus),
            React.createElement("br", null),
            React.createElement(TextField_1.default, { multiLine: true, fullWidth: true, hintText: "メモ（勤務表には反映されません）", value: currentKintai.memo, onChange: function (_, value) { return _this.handleMemoChange(value); } })));
    };
    Main.prototype.handleInSelected = function (value) {
        this.props.actions.selectIn(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleOutSelected = function (value) {
        this.props.actions.selectOut(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleSpecialNoteChange = function (value) {
        this.props.actions.inputSpecialNote(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleHolidayChange = function (value) {
        this.props.actions.selectHoliday(this.props.value.view.currentDate, value);
    };
    Main.prototype.handleMemoChange = function (value) {
        this.props.actions.inputMemo(this.props.value.view.currentDate, value);
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IconButton_1 = __webpack_require__(33);
var MenuItem_1 = __webpack_require__(59);
var SelectField_1 = __webpack_require__(92);
var schedule_1 = __webpack_require__(610);
var update_1 = __webpack_require__(611);
var React = __webpack_require__(1);
var Holidays_1 = __webpack_require__(82);
var DateUtils_1 = __webpack_require__(52);
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
                menus.push(React.createElement(MenuItem_1.default, { key: Holidays_1.HOLIDAY_TIME_VALUE, value: Holidays_1.HOLIDAY_TIME_VALUE, primaryText: Holidays_1.HOLIDAY_TIME_VALUE }));
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
            React.createElement(SelectField_1.default, { hintText: this.props.type.label, value: this.props.value, onChange: function (_, __, value) { return _this.handleChange(value); }, style: { width: "200px" }, labelStyle: { height: "48px" } }, this.props.type.menus),
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleNow(); } },
                React.createElement(update_1.default, null)),
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleRegular(); } },
                React.createElement(schedule_1.default, null))));
    };
    TimeInput.prototype.handleChange = function (value) {
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


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppBar_1 = __webpack_require__(88);
var IconButton_1 = __webpack_require__(33);
var keyboard_arrow_left_1 = __webpack_require__(235);
var keyboard_arrow_right_1 = __webpack_require__(236);
var React = __webpack_require__(1);
var DateUtils_1 = __webpack_require__(52);
var ToolbarWithProgress_1 = __webpack_require__(166);
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttons = React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleBefore(); } },
                React.createElement(keyboard_arrow_left_1.default, { color: "white" })),
            React.createElement(IconButton_1.default, { onTouchTap: function () { return _this.handleAfter(); } },
                React.createElement(keyboard_arrow_right_1.default, { color: "white" })));
        return _this;
    }
    Toolbar.prototype.render = function () {
        return (React.createElement(ToolbarWithProgress_1.ToolbarWithProgress, __assign({}, this.props),
            React.createElement(AppBar_1.default, { title: this.createTitle(), showMenuIconButton: false, iconElementRight: this.buttons })));
    };
    Toolbar.prototype.handleBefore = function () {
        var date = DateUtils_1.moveDates(this.props.value.view.currentDate, -1);
        this.props.actions.moveCurrentDate(date);
    };
    Toolbar.prototype.handleAfter = function () {
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

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = __webpack_require__(212);
var colors_1 = __webpack_require__(78);
var React = __webpack_require__(1);
var Holidays_1 = __webpack_require__(82);
var DateUtils_1 = __webpack_require__(52);
var KintaiUtils_1 = __webpack_require__(103);
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
        return (React.createElement(List_1.ListItem, { key: date.getDate(), onTouchTap: function () { return _this.onSelectDate(date); } },
            React.createElement("div", { style: dayStyle }, dayString),
            React.createElement("div", { style: { display: "inline-block", width: "48px" } }, kintai.inTime),
            React.createElement("div", { style: { display: "inline-block", width: "48px" } }, kintai.outTime),
            React.createElement("div", { style: { display: "inline-block", color: colors_1.red700 } },
                kintai.specialNote,
                " ",
                Holidays_1.getHolidayText(kintai.holiday))));
    };
    Main.prototype.onSelectDate = function (date) {
        this.props.actions.showInputPage(this.props.history, date);
    };
    Main.prototype.getDayStyle = function (date) {
        var defaultStyle = { display: "inline-block", width: "58px" };
        var color = DateUtils_1.getDayColor(date);
        if (color === undefined) {
            return defaultStyle;
        }
        return __assign({}, defaultStyle, { color: color });
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog_1 = __webpack_require__(89);
var Snackbar_1 = __webpack_require__(218);
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

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RaisedButton_1 = __webpack_require__(217);
var TextField_1 = __webpack_require__(41);
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
            React.createElement(RaisedButton_1.default, { label: buttonLabel, primary: true, onTouchTap: function () { return _this.handleSend(); }, disabled: this.props.value.view.isSending })));
    };
    Main.prototype.handleEmailChange = function (value) {
        this.props.actions.inputEmail(value);
    };
    Main.prototype.handlePasswordChange = function (value) {
        this.props.actions.inputPassword(value);
    };
    Main.prototype.handleSend = function () {
        this.props.actions.sendMonth(this.props.value.kintai, this.props.value.view.currentDate, this.props.value.view.password);
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ 788:
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
Object.defineProperty(exports, "__esModule", { value: true });
var actions = __webpack_require__(164);
var redux_commons_1 = __webpack_require__(165);
var Holidays_1 = __webpack_require__(82);
var Holidays_2 = __webpack_require__(82);
var DateUtils_1 = __webpack_require__(52);
var KintaiUtils_1 = __webpack_require__(103);
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
        return updateDayKintai(state, selectedTime.date, { outTime: selectedTime.time });
    });
    handle(actions.InputSpecialNoteAction, function (state, specialNote) {
        var specialHoliday = Holidays_1.getSpecialNoteHolidayFromText(specialNote.text);
        var updater = { specialNote: specialNote.text };
        if (specialHoliday !== undefined) {
            updater.inTime = Holidays_2.HOLIDAY_TIME_VALUE;
            updater.outTime = Holidays_2.HOLIDAY_TIME_VALUE;
            if (specialHoliday.requireInputUnpaid) {
                updater.holiday = Holidays_2.UNPAID_HOLIDAY.value;
            }
            else {
                updater.holiday = undefined;
            }
        }
        return updateDayKintai(state, specialNote.date, updater);
    });
    handle(actions.SelectHolidayAction, function (state, selected) {
        var holiday = Holidays_1.getHolidayFromValue(selected.value);
        var updater = { holiday: selected.value };
        if (holiday !== undefined && holiday.isAllDayOff) {
            updater.inTime = Holidays_2.HOLIDAY_TIME_VALUE;
            updater.outTime = Holidays_2.HOLIDAY_TIME_VALUE;
        }
        return updateDayKintai(state, selected.date, updater);
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
});
function updateDayKintai(state, date, partialDayKintai) {
    var oldDayKintai = KintaiUtils_1.getDayKintaiOrDefault(state, date);
    var newDayState = __assign({}, oldDayKintai, partialDayKintai);
    var newState = __assign({}, state);
    newState.days[DateUtils_1.toDayString(date)] = newDayState;
    return newState;
}


/***/ }),

/***/ 789:
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
Object.defineProperty(exports, "__esModule", { value: true });
var actions = __webpack_require__(164);
var redux_commons_1 = __webpack_require__(165);
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

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function undefinedToEmpty(value) {
    if (value !== undefined) {
        return value;
    }
    return "";
}
exports.undefinedToEmpty = undefinedToEmpty;


/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reactRedux = __webpack_require__(106);
var react_router_dom_1 = __webpack_require__(398);
var DispatchActions_1 = __webpack_require__(400);
function connect(component) {
    var connected = reactRedux.connect(function (store) { return ({ value: store }); }, function (dispatch) { return ({ actions: new DispatchActions_1.DispatchActions(dispatch) }); })(component);
    return react_router_dom_1.withRouter(connected);
}
exports.connect = connect;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// 休みの時に使う時刻の値
exports.HOLIDAY_TIME_VALUE = "---";
exports.UNPAID_HOLIDAY = { value: 6, text: "無給", isAllDayOff: true };
exports.HOLIDAYS = [
    { value: 1, text: "全日", isAllDayOff: true },
    { value: 2, text: "午前", isAllDayOff: false },
    { value: 3, text: "午後", isAllDayOff: false },
    { value: 4, text: "欠勤", isAllDayOff: true },
    { value: 5, text: "健診BC・再検査", isAllDayOff: true },
    exports.UNPAID_HOLIDAY,
    { value: 7, text: "振休", isAllDayOff: true },
    { value: 8, text: "代休", isAllDayOff: true },
    { value: 9, text: "特別代休", isAllDayOff: true },
    { value: 10, text: "結婚忌引配出産", isAllDayOff: true },
    { value: 11, text: "SP5", isAllDayOff: true },
    { value: 12, text: "その他特休", isAllDayOff: true },
    { value: 13, text: "積立休暇", isAllDayOff: true },
    { value: 14, text: "休業", isAllDayOff: true },
    { value: 15, text: "教育訓練", isAllDayOff: true },
];
function getHolidayFromValue(value) {
    if (value === undefined) {
        return undefined;
    }
    return exports.HOLIDAYS.find(function (h) { return h.value === value; });
}
exports.getHolidayFromValue = getHolidayFromValue;
function getHolidayText(value) {
    var holiday = getHolidayFromValue(value);
    if (holiday === undefined) {
        return "";
    }
    return holiday.text;
}
exports.getHolidayText = getHolidayText;
exports.SPECIAL_NOTES = [
    { text: "①生理休暇", requireInputUnpaid: true },
    { text: "①子の介護休暇", requireInputUnpaid: true },
    { text: "①妊娠出産通院休暇", requireInputUnpaid: true },
    { text: "①妊娠障害休暇", requireInputUnpaid: true },
    { text: "②介護休暇", requireInputUnpaid: false },
    { text: "②出産休暇", requireInputUnpaid: false },
    { text: "②再雇用RF休暇", requireInputUnpaid: false },
];
function getSpecialNoteHolidayFromText(text) {
    if (text === undefined) {
        return undefined;
    }
    return exports.SPECIAL_NOTES.find(function (s) { return s.text === text; });
}
exports.getSpecialNoteHolidayFromText = getSpecialNoteHolidayFromText;


/***/ })

},[778]);
//# sourceMappingURL=app.js.map