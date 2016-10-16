import {GlobalState} from "./States";
import {Action} from "./Actions";
import {assign} from "core-js/library/fn/object"

const initialState: GlobalState = {
    currentDate: new Date(),
    inTime: "",
    outTime: ""
}

export function kintai(state: GlobalState = initialState, action: Action): GlobalState {
    switch (action.type) {
        case "quickIn":
            const inTime = calcQuickInTime(action.now)
            return assign({}, state, {inTime: inTime})
        case "quickOut":
            const outTime = calcQuickOutTime(action.now)
            return assign({}, state, {outTime: outTime});
        default:
            return state
    }
}

function calcQuickInTime(now: Date) {
    now.setMinutes(now.getMinutes() + 15);
    return to15minTime(now)
}

function calcQuickOutTime(now: Date) {
    return to15minTime(now)
}

function to15minTime(time: Date) {
    time.setMinutes(Math.floor(time.getMinutes() / 15) * 15);
    return padZero(time.getHours()) + ':' + padZero(time.getMinutes())
}

function padZero(i: number) {
    return ('0' + i).slice(-2);
}