import {Action} from "./common/redux-common";
import {SelectInAction, SelectOutAction, MoveCurrentDateAction, InputHolidayAction} from "./Actions";

export class DispatchActions {
    private dispatch: (action: Action<any>) => any;
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
}