import {Action} from "./common/redux-common"
import * as actions from "./Actions";
import {hashHistory} from 'react-router'
import {KintaiState} from "./States";
import {sendMonthKintai} from "./ApiClient"

export class DispatchActions {
    private dispatch: (action: Action<any>) => void;
    constructor(dispatch: (action: Action<any>) => void) {
        this.dispatch = dispatch
    }

    selectIn(date: Date, time: string) {
        this.dispatch(actions.SelectInAction.create({
            date: date,
            time: time
        }))
    }

    selectOut(date: Date, time: string) {
        this.dispatch(actions.SelectOutAction.create({
            date: date,
            time: time
        }))
    }

    moveCurrentDate(date: Date) {
        this.dispatch(actions.MoveCurrentDateAction.create(date))
    }

    sendMonth(kintai: KintaiState, month: Date, password: string) {
        // TODO 入力チェック
        this.dispatch(actions.SendStartAction.create(undefined))
        sendMonthKintai(kintai, month, password).then(response => {
            if (!response.ok) {
                return response.json().then(json => {
                    this.dispatch(actions.SendErrorAction.create("サーバーサイドエラー: " + json.message))
                })
            }
            this.dispatch(actions.SendSuccessAction.create(undefined))
            return response
        }).catch(() => {
            this.dispatch(actions.SendErrorAction.create("ネットワークエラー"))
        })
    }

    inputHoliday(date: Date, holiday: string) {
        this.dispatch(actions.InputHolidayAction.create({
            date: date,
            holiday: holiday
        }))
    }

    showInputPage(date?: Date) {
        if (!!date) {
            this.moveCurrentDate(date)
        }
        hashHistory.push('/')
    }

    showListPage() {
        hashHistory.push('/list')
    }

    showSendPage() {
        hashHistory.push('/send')
    }

    inputEmail(email: string) {
        // TODO 入力チェック？
        this.dispatch(actions.InputEmailAction.create(email))
    }

    inputPassword(password: string) {
        this.dispatch(actions.InputPasswordAction.create(password))
    }

    closeSendSuccessMessage() {
        this.dispatch(actions.CloseSendSuccessMessageAction.create(undefined))
    }

    closeSendErrorMessage() {
        this.dispatch(actions.CloseSendErrorMessageAction.create(undefined))
    }
}