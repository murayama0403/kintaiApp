import {hashHistory} from "react-router"
import * as actions from "./Actions"
import {sendMonthKintai} from "./ApiClient"
import {Action} from "./common/redux-common"
import {KintaiState} from "./States"

export class DispatchActions {
    private dispatch: (action: Action<any>) => void
    constructor(dispatch: (action: Action<any>) => void) {
        this.dispatch = dispatch
    }

    public selectIn(date: Date, time: string) {
        this.dispatch(actions.SelectInAction.create({
            date,
            time,
        }))
    }

    public selectOut(date: Date, time: string) {
        this.dispatch(actions.SelectOutAction.create({
            date,
            time,
        }))
    }

    public moveCurrentDate(date: Date) {
        this.dispatch(actions.MoveCurrentDateAction.create(date))
    }

    public sendMonth(kintai: KintaiState, month: Date, password: string) {
        // TODO 入力チェック
        this.dispatch(actions.SendStartAction.create(undefined))
        sendMonthKintai(kintai, month, password).then((response) => {
            if (!response.ok) {
                return response.json().then((json) => {
                    this.dispatch(actions.SendErrorAction.create("サーバーサイドエラー: " + json.message))
                })
            }
            this.dispatch(actions.SendSuccessAction.create(undefined))
            return response
        }).catch(() => {
            this.dispatch(actions.SendErrorAction.create("ネットワークエラー"))
        })
    }

    public inputHoliday(date: Date, holiday: string) {
        this.dispatch(actions.InputHolidayAction.create({
            date,
            holiday,
        }))
    }

    public showInputPage(date?: Date) {
        if (!!date) {
            this.moveCurrentDate(date)
        }
        hashHistory.push("/")
    }

    public showListPage() {
        hashHistory.push("/list")
    }

    public showSendPage() {
        hashHistory.push("/send")
    }

    public inputEmail(email: string) {
        // TODO 入力チェック？
        this.dispatch(actions.InputEmailAction.create(email))
    }

    public inputPassword(password: string) {
        this.dispatch(actions.InputPasswordAction.create(password))
    }

    public closeSendSuccessMessage() {
        this.dispatch(actions.CloseSendSuccessMessageAction.create(undefined))
    }

    public closeSendErrorMessage() {
        this.dispatch(actions.CloseSendErrorMessageAction.create(undefined))
    }
}
