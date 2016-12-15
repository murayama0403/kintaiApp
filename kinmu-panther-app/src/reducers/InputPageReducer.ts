import {InputPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentDateAction} from "../Actions";

const initialState: InputPageState = {
    currentDate: new Date()
}

export const inputPage = createReducer(initialState, handle => {
    handle(MoveCurrentDateAction, (state, date) => {
        return {...state, currentDate: date}
    })
})
