import {Action} from "./common/redux-common";
import * as actions from "./Actions";
import {browserHistory} from 'react-router'

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
        browserHistory.push('/')
    }

    showListPage() {
        browserHistory.push('/list')
    }
}