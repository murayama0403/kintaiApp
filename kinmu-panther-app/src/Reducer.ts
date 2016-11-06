import {GlobalState} from "./States";
import {Action} from "./Actions";
import * as _ from "lodash"

const initialState: GlobalState = {
    currentDate: new Date(),
    inTime: "",
    outTime: "",
}

export function kintai(state: GlobalState = initialState, action: Action): GlobalState {
    switch (action.type) {
        case "selectIn":
            return _.assign({}, state, {inTime: action.time})
        case "selectOut":
            return _.assign({}, state, {outTime: action.time})
        case "quickIn":
            const inTime = calcQuickInTime(action.now)
            return _.assign({}, state, {inTime: inTime})
        case "quickOut":
            const outTime = calcQuickOutTime(action.now)
            return _.assign({}, state, {outTime: outTime});
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
    return _.padStart(time.getHours().toString(), 2, '0') + ':' + _.padStart(time.getMinutes().toString(), 2, '0')
}
