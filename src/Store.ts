import { kintai } from './reducers/KintaiReducer'
import { inputPage } from './reducers/InputPageReducer'
import { listPage } from './reducers/ListPageReducer'
import { createStore, combineReducers } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import { routerReducer } from 'react-router-redux'

declare var window: any

const store = createStore(
    combineReducers({
        kintai: kintai,
        inputPage: inputPage,
        listPage: listPage,
        routing: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    autoRehydrate()
);

persistStore(store, {whitelist: ['kintai']})

export default store