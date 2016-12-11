import {KintaiState, DayKintai, getDayKintai} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction} from "../Actions";
import {toDayString} from "../Utils"
import * as _ from "lodash"

const initialState: KintaiState = {
    days: {}
}

export const kintai = createReducer(initialState, handle => {
    handle(SelectInAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {inTime: selectedTime.time})
    })
    handle(SelectOutAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {outTime: selectedTime.time})
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = _.assign({}, oldDayKintai, partialDayKintai)
    const newState = _.assign({}, state)
    newState.days[toDayString(date)] = newDayState
    return newState
}