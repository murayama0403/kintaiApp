import {ViewState} from "../States";
import {createReducer} from "../common/redux-common";
import {MoveCurrentDateAction, InputPasswordAction} from "../Actions";
import {SendStartAction, SendSuccessAction, SendErrorAction, CloseSendSuccessMessageAction, CloseSendErrorMessageAction} from "../Actions";

const initialState: ViewState = {
    currentDate: new Date(),
    password: "",
    isSending: false,
    isShowSendSuccessMessage: false,
    sendErrorMessage: undefined
}

export const view = createReducer(initialState, handle => {
    handle(MoveCurrentDateAction, (state, date) => {
        return {...state, currentDate: date}
    })
    handle(InputPasswordAction, (state, password) => {
        return {...state, password: password}
    })
    handle(SendStartAction, (state) => {
        return {...state, isSending: true}
    })
    handle(SendSuccessAction, (state) => {
        return {...state,
            isSending: false,
            isShowSendSuccessMessage: true}
    })
    handle(CloseSendSuccessMessageAction, (state) => {
        return {...state, isShowSendSuccessMessage: false}
    })
    handle(SendErrorAction, (state, message) => {
        return {...state,
            isSending: false,
            sendErrorMessage: message}
    })
    handle(CloseSendErrorMessageAction, (state) => {
        return {...state, sendErrorMessage: undefined}
    })
})
