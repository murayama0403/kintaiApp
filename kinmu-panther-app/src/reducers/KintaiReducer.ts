import {KintaiState, MonthKintai} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction} from "../Actions";
import * as _ from "lodash"

const initialState: KintaiState = {
    inTime: '',
    outTime: ''
//    months: {}
}

export const kintai = createReducer(initialState, handle => {
    handle(SelectInAction, (state, selectedTime) => {
        return _.assign({}, state, {inTime: selectedTime.time})
    })
    handle(SelectOutAction, (state, selectedTime) =>
        _.assign({}, state, {outTime: selectedTime.time})
    )
})

function toMonthKey(date: Date): number {
    return date.getFullYear() * 100 + (date.getMonth() + 1)
}