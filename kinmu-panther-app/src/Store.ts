import { kintai } from './Reducer'
import { createStore, combineReducers } from 'redux'

export default createStore(
    combineReducers({
        kintai
    })
);