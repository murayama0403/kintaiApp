import {routerReducer} from "react-router-redux"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import * as createLogger from "redux-logger"
import {autoRehydrate, persistStore} from "redux-persist"
import {kintai} from "./reducers/KintaiReducer"
import {view} from "./reducers/ViewReducer"

declare var window: any

// weinreでConsoleデバッグができるようにredux-loggerがconsole.logを呼び出すように変更
const logger = createLogger({
    level: "log",
    logger: {
        log: (...args: any[]) => {
            console.log.apply(console, args)
        },
    },
})
const store = createStore(
    combineReducers({
        kintai,
        routing: routerReducer,
        view,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        autoRehydrate(),
        applyMiddleware(logger),
    ),
)

persistStore(store, {whitelist: ["kintai"]})

export default store
