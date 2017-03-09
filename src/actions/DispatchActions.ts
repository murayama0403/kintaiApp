import { hashHistory } from "react-router"
import * as actions from "../actions/Actions"
import { sendMonthKintai } from "../clients/ApiClient"
import { Action } from "../commons/redux-commons"
import { KintaiState } from "../states/States"

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

    public inputMemo(date: Date, memo: string) {
        this.dispatch(actions.InputMemoAction.create({
            date,
            text: memo,
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

    public rest1(date: Date, isRest: boolean) {
        this.dispatch(actions.Rest1Action.create({date, isRest}))
    }
}
