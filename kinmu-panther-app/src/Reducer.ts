import {GlobalState} from "./States";
import {Action, ActionType, SelectInAction, SelectOutAction} from "./Actions";
import * as _ from "lodash"

const initialState: GlobalState = {
    currentDate: new Date(),
    inTime: "",
    outTime: "",
}

type Reducer<S, T> = (state: S, action: Action<T>) => S

function createReducer<S>(initialState: S, reducers: (reduce: <T>(type: ActionType<T>, reducer: Reducer<S, T>) => void) => void): Reducer<S, any> {
    const reducerMap: {[key: string]: Reducer<S, any>} = {}

    reducers(<T>(t: ActionType<T>, reducer: Reducer<S, T>) => reducerMap[t.type] = reducer)

    return (state: S = initialState, action: Action<any>) => {
        const reducer = reducerMap[action.type]
        if (reducer) {
            return reducer(state, action)
        }
        return state
    }
}

export const kintai = createReducer(initialState, reduce => {
    reduce(SelectInAction, (state, action) =>
        _.assign({}, state, {inTime: action.payload})
    )
    reduce(SelectOutAction, (state, action) =>
        _.assign({}, state, {outTime: action.payload})
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
