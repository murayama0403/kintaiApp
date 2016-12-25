import {KintaiState, DayKintai, getDayKintai} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction, InputHolidayAction} from "../Actions";
import {toDayString} from "../DateUtils"

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
    handle(InputHolidayAction, (state, selectedHoliday) => {
        return updateDayKintai(state, selectedHoliday.date, {holiday: selectedHoliday.holiday})
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = {...oldDayKintai, ...partialDayKintai}
    const newState = {...state}
    newState.days[toDayString(date)] = newDayState
    return newState
}