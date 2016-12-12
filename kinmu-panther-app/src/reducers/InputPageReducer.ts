import {InputPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {SelectInAction, SelectOutAction} from "../Actions";
import * as _ from "lodash"

const initialState: InputPageState = {
    currentDate: new Date()
}

export const inputPage = createReducer(initialState, handle => {
})
