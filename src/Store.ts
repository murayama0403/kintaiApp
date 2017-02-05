import { kintai } from './reducers/KintaiReducer'
import { inputPage } from './reducers/InputPageReducer'
import { listPage } from './reducers/ListPageReducer'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import { routerReducer } from 'react-router-redux'
import * as createLogger from 'redux-logger'

declare var window: any

// weinreでConsoleデバッグができるようにredux-loggerがconsole.logを呼び出すように変更
const logger = createLogger({
    level: 'log',
    logger: {
        log: (...args: any[]) => {
            console.log.apply(console, args)
        }
    }
})
const store = createStore(
    combineReducers({
        kintai: kintai,
        inputPage: inputPage,
        listPage: listPage,
        routing: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        autoRehydrate(),
        applyMiddleware(logger)
    )
);

persistStore(store, {whitelist: ['kintai']})

export default store