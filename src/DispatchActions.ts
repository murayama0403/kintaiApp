import {Action} from "./common/redux-common";
import * as actions from "./Actions";
import {hashHistory} from 'react-router'
import {KintaiState} from "./States";
import {sendMonthKintai} from "./ApiClient"

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any) {
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

    moveCurrentMonth(date: Date) {
        this.dispatch(actions.MoveCurrentMonthAction.create(date))
    }

    sendMonth(kintai: KintaiState, month: Date, password: string) {
        // TODO 入力チェック
        const promise = sendMonthKintai(kintai, month, password)
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

    inputEmail(email: string) {
        // TODO 入力チェック？
        this.dispatch(actions.InputEmailAction.create(email))
    }

    inputPassword(password: string) {
        this.dispatch(actions.InputPasswordAction.create(password))
    }

    openSendDialog() {
        console.log('openSendDialog')
        this.dispatch(actions.OpenSendDialogAction.create({}))
    }

    closeSendDialog() {
        this.dispatch(actions.CloseSendDialogAction.create({}))
    }
}