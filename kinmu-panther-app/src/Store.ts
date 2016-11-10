import { kintai } from './Reducer'
import { createStore, combineReducers } from 'redux'

declare var window: any

export default createStore(
    combineReducers({
        kintai
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);