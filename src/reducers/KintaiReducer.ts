import * as actions from "../Actions"
import {createReducer} from "../common/redux-common"
import {toDayString} from "../DateUtils"
import {getDayKintai} from "../KintaiUtils"
import {DayKintai, KintaiState} from "../States"

const initialState: KintaiState = {
    person: {
        email: "",
    },
    days: {},
}

export const kintai = createReducer(initialState, (handle) => {
    handle(actions.SelectInAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {inTime: selectedTime.time})
    })
    handle(actions.SelectOutAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {outTime: selectedTime.time})
    })
    handle(actions.InputHolidayAction, (state, selectedHoliday) => {
        return updateDayKintai(state, selectedHoliday.date, {holiday: selectedHoliday.holiday})
    })
    handle(actions.InputEmailAction, (state, email) => {
        const person = {...state.person, email}
        return {...state, person}
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = {...oldDayKintai, ...partialDayKintai}
    const newState = {...state}
    newState.days[toDayString(date)] = newDayState
    return newState
}
