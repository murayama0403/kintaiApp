import { inputPage } from './reducers/InputPageReducer'
import { createStore, combineReducers } from 'redux'

declare var window: any

export default createStore(
    combineReducers({
        // kintai
        inputPage
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);