import {ListPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentMonthAction} from "../Actions";

const initialState: ListPageState = {
    currentDate: new Date()
}

export const listPage = createReducer(initialState, handle => {
    handle(MoveCurrentMonthAction, (state, date) => {
        return {...state, currentDate: date}
    })
})
