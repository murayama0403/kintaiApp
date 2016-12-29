import {ListPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentDateAction} from "../Actions";

const initialState: ListPageState = {
    currentDate: new Date()
}

export const listPage = createReducer(initialState, handle => {
})
