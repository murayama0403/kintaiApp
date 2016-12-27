import {Action} from "./common/redux-common";
import {SelectInAction, SelectOutAction, MoveCurrentDateAction, InputHolidayAction} from "./Actions";
import {browserHistory} from 'react-router'

export class DispatchActions {
    private dispatch: (action: any) => any;
    constructor(dispatch: (action: any) => any) {
        this.dispatch = dispatch
    }

    selectIn(date: Date, time: string) {
        this.dispatch(SelectInAction.create({
            date: date,
            time: time
        }))
    }

    selectOut(date: Date, time: string) {
        this.dispatch(SelectOutAction.create({
            date: date,
            time: time
        }))
    }

    moveCurrentDate(date: Date) {
        this.dispatch(MoveCurrentDateAction.create(date))
    }

    inputHoliday(date: Date, holiday: string) {
        this.dispatch(InputHolidayAction.create({
            date: date,
            holiday: holiday
        }))
    }

    showInputPage() {
        this.pushIfNotCurrent('/')
    }

    showListPage() {
        this.pushIfNotCurrent('/list')
    }

    private pushIfNotCurrent(path: string) {
        if (browserHistory.getCurrentLocation().pathname != path) {
            browserHistory.push(path)
        }
    }
}