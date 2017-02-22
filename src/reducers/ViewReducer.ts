import * as actions from "../Actions"
import { createReducer } from "../common/redux-common"
import { ViewState } from "../States"

const initialState: ViewState = {
    currentDate: new Date(),
    password: "",
    isSending: false,
    isShowSendSuccessMessage: false,
    sendErrorMessage: undefined,
}

export const view = createReducer(initialState, (handle) => {
    handle(actions.MoveCurrentDateAction, (state, date) => {
        return { ...state, currentDate: date }
    })
    handle(actions.InputPasswordAction, (state, password) => {
        return { ...state, password }
    })
    handle(actions.SendStartAction, (state) => {
        return { ...state, isSending: true }
    })
    handle(actions.SendSuccessAction, (state) => {
        return {
            ...state,
            isSending: false,
            isShowSendSuccessMessage: true,
        }
    })
    handle(actions.CloseSendSuccessMessageAction, (state) => {
        return { ...state, isShowSendSuccessMessage: false }
    })
    handle(actions.SendErrorAction, (state, message) => {
        return {
            ...state,
            isSending: false,
            sendErrorMessage: message,
        }
    })
    handle(actions.CloseSendErrorMessageAction, (state) => {
        return { ...state, sendErrorMessage: undefined }
    })
})
