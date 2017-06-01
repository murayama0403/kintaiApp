import * as actions from "../actions/Actions"
import { createReducer } from "../commons/redux-commons"
import { getHolidayFromValue, HOLIDAY_TIME_VALUE } from "../constants/Holidays"
import { DayKintai, KintaiState } from "../states/States"
import { toDayString } from "../utils/DateUtils"
import { getDayKintaiOrDefault } from "../utils/KintaiUtils"

const initialState: KintaiState = {
    person: {
        email: "",
        employeeNo: "",
        lastName: "",
        firstName: "",
        departmentCode: "",
        manageType: "",
        manager1: "",
        manager1Period: "1日～末日",
        manager2: "",
        manager2Period: "",
        defaultProjectNo: "",
        defaultWorkCode: "F",
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
    handle(actions.InputSpecialNoteAction, (state, specialNote) => {
        return updateDayKintai(state, specialNote.date, { specialNote: specialNote.text })
    })
    handle(actions.SelectHolidayAction, (state, selected) => {
        const holiday = getHolidayFromValue(selected.value)
        const updater: Partial<DayKintai> = { holiday: selected.value }
        if (holiday !== undefined && holiday.isAllDayOff) {
            updater.inTime = HOLIDAY_TIME_VALUE
            updater.outTime = HOLIDAY_TIME_VALUE
        }
        return updateDayKintai(state, selected.date, updater)
    })
    handle(actions.InputMemoAction, (state, memo) => {
        return updateDayKintai(state, memo.date, { memo: memo.text })
    })
    handle(actions.InputEmailAction, (state, email) => {
        const person = { ...state.person, email }
        return { ...state, person }
    })
    handle(actions.InputEmployeeNoAction, (state, employeeNo) => {
        const person = { ...state.person, employeeNo }
        return { ...state, person }
    })
    handle(actions.InputLastNameAction, (state, lastName) => {
        const person = { ...state.person, lastName }
        return { ...state, person }
    })
    handle(actions.InputFirstNameAction, (state, firstName) => {
        const person = { ...state.person, firstName }
        return { ...state, person }
    })
    handle(actions.InputDepartmentCodeAction, (state, departmentCode) => {
        const person = { ...state.person, departmentCode }
        return { ...state, person }
    })
    handle(actions.InputManageTypeAction, (state, manageType) => {
        const person = { ...state.person, manageType }
        return { ...state, person }
    })
    handle(actions.InputManager1Action, (state, manager1) => {
        const person = { ...state.person, manager1 }
        return { ...state, person }
    })
    handle(actions.InputManager1PeriodAction, (state, manager1Period) => {
        const person = { ...state.person, manager1Period }
        return { ...state, person }
    })
    handle(actions.InputManager2Action, (state, manager2) => {
        const person = { ...state.person, manager2 }
        return { ...state, person }
    })
    handle(actions.InputManager2PeriodAction, (state, manager2Period) => {
        const person = { ...state.person, manager2Period }
        return { ...state, person }
    })
    handle(actions.InputDefaultProjectNoAction, (state, defaultProjectNo) => {
        const person = { ...state.person, defaultProjectNo }
        return { ...state, person }
    })
    handle(actions.InputDefaultWorkCodeAction, (state, defaultWorkCode) => {
        const person = { ...state.person, defaultWorkCode }
        return { ...state, person }
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintaiOrDefault(state, date)
    const newDayState = { ...oldDayKintai, ...partialDayKintai }
    const newState = { ...state }
    newState.days[toDayString(date)] = newDayState

    return newState
}
