import {InputPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction} from "../Actions";
import * as _ from "lodash"

const initialState: InputPageState = {
    currentDate: new Date(),
    inTime: "",
    outTime: "",
}

export const inputPage = createReducer(initialState, handle => {
    handle(SelectInAction, (state, time) =>
        _.assign({}, state, {inTime: time})
    )
    handle(SelectOutAction, (state, time) =>
        _.assign({}, state, {outTime: time})
    )
})

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
