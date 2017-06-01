import * as actions from "../actions/Actions"
import { createReducer } from "../commons/redux-commons"
import { DayKintai, KintaiState } from "../states/States"
import { toDayString } from "../utils/DateUtils"
import { getDayKintai } from "../utils/KintaiUtils"

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
        // 時刻を比較しやすいように4桁なら先頭に0をつけて5桁にしておく
        let time = selectedTime.time
        if (time.length === 4) {
            time = "0" + time
        }

        const showRest2 = time > "17:45" || time <= "09:00"
        const showRest3 = time > "19:30" || time <= "09:00"
        const showRest4 = time > "22:00" || time <= "09:00"
        const showRest5 = time > "02:30" && time <= "09:00"
        const showRest6 = time > "08:30" && time <= "09:00"

        return updateDayKintai(state, selectedTime.date, {outTime: selectedTime.time,
            showRest2, showRest3, showRest4, showRest5, showRest6 })
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
    handle(actions.ToggleRest2Action, (state, date) => {
        const oldDayKintai = getDayKintai(state, date)
        const oldNoRest2 = oldDayKintai ? oldDayKintai.noRest2 : false
        return updateDayKintai(state, date, { noRest2: !oldNoRest2 })
    })
    handle(actions.ToggleRest3Action, (state, date) => {
        const oldDayKintai = getDayKintai(state, date)
        const oldNoRest3 = oldDayKintai ? oldDayKintai.noRest3 : false
        return updateDayKintai(state, date, { noRest3: !oldNoRest3 })
    })
    handle(actions.ToggleRest4Action, (state, date) => {
        const oldDayKintai = getDayKintai(state, date)
        const oldNoRest4 = oldDayKintai ? oldDayKintai.noRest4 : false
        return updateDayKintai(state, date, { noRest4: !oldNoRest4 })
    })
    handle(actions.ToggleRest5Action, (state, date) => {
        const oldDayKintai = getDayKintai(state, date)
        const oldNoRest5 = oldDayKintai ? oldDayKintai.noRest5 : false
        return updateDayKintai(state, date, { noRest5: !oldNoRest5 })
    })
    handle(actions.ToggleRest6Action, (state, date) => {
        const oldDayKintai = getDayKintai(state, date)
        const oldNoRest6 = oldDayKintai ? oldDayKintai.noRest6 : false
        return updateDayKintai(state, date, { noRest6: !oldNoRest6 })
    })
})

function updateDayKintai(state: KintaiState, date: Date, partialDayKintai: Partial<DayKintai>) {
    const oldDayKintai = getDayKintai(state, date)
    const newDayState = { ...oldDayKintai, ...partialDayKintai }
    const newState = { ...state }
    newState.days[toDayString(date)] = newDayState
    return newState
}
