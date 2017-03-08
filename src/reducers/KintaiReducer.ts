import * as actions from "../actions/Actions"
import { createReducer } from "../commons/redux-commons"
import { DayKintai, KintaiState } from "../states/States"
import { toDayString } from "../utils/DateUtils"
import { getDayKintai } from "../utils/KintaiUtils"

const initialState: KintaiState = {
    person: {
        email: "",
    },
    days: {},
}

export const kintai = createReducer(initialState, (handle) => {
    handle(actions.SelectInAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, { inTime: selectedTime.time })
    })
    handle(actions.SelectOutAction, (state, selectedTime) => {
        return updateDayKintai(state, selectedTime.date, { outTime: selectedTime.time })
    })
    handle(actions.InputMemoAction, (state, memo) => {
        return updateDayKintai(state, memo.date, { memo: memo.text })
    })
    handle(actions.InputEmailAction, (state, email) => {
        const person = { ...state.person, email }
        return { ...state, person }
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = { ...oldDayKintai, ...partialDayKintai }
    const newState = { ...state }
    newState.days[toDayString(date)] = newDayState
    return newState
}
