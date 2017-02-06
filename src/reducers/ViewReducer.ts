import {ViewState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentDateAction, InputPasswordAction} from "../Actions";

const initialState: ViewState = {
    currentDate: new Date(),
    password: ""
}

export const view = createReducer(initialState, handle => {
    handle(MoveCurrentDateAction, (state, date) => {
        return {...state, currentDate: date}
    })
    handle(InputPasswordAction, (state, password) => {
        return {...state, password: password}
    })
})
