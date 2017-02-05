import {KintaiState, DayKintai} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction, InputHolidayAction, InputEmailAction} from "../Actions";
import {getDayKintai} from "../KintaiUtils"
import {toDayString} from "../DateUtils"

const initialState: KintaiState = {
    person: {
        email: ""
    },
    days: {}
}

export const kintai = createReducer(initialState, handle => {
    handle(SelectInAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {inTime: selectedTime.time})
    })
    handle(SelectOutAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, {outTime: selectedTime.time})
    })
    handle(InputHolidayAction, (state, selectedHoliday) => {
        return updateDayKintai(state, selectedHoliday.date, {holiday: selectedHoliday.holiday})
    })
    handle(InputEmailAction, (state, email) => {
        const person = {...state.person, email: email}
        return {...state, person: person}
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = {...oldDayKintai, ...partialDayKintai}
    const newState = {...state}
    newState.days[toDayString(date)] = newDayState
    return newState
}