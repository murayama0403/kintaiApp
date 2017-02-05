import {ListPageState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentMonthAction} from "../Actions";
import {OpenSendDialogAction, CloseSendDialogAction, InputPasswordAction} from "../Actions";

const initialState: ListPageState = {
    currentDate: new Date(),
    isSendDialogOpen: false,
    password: ""
}

export const listPage = createReducer(initialState, handle => {
    handle(MoveCurrentMonthAction, (state, date) => {
        return {...state, currentDate: date}
    })

    handle(OpenSendDialogAction, (state, date) => {
        return {...state, isSendDialogOpen: true}
    })
    handle(CloseSendDialogAction, (state, date) => {
        return {...state, isSendDialogOpen: false}
    })
    handle(InputPasswordAction, (state, password) => {
        return {...state, password: password}
    })
})
