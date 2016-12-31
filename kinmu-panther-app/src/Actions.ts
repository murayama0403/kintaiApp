import {action} from "./common/redux-common"

interface SelectedTime {
    date: Date;
    time: string;
}

interface SelectedHoliday {
    date: Date;
    holiday: string;
}

export const SelectInAction = action<SelectedTime>('SelectIn')
export const SelectOutAction = action<SelectedTime>('SelectOut')
export const MoveCurrentDateAction = action<Date>('MoveCurrentDate')
export const MoveCurrentMonthAction = action<Date>('MoveCurrentMonth')
export const InputHolidayAction = action<SelectedHoliday>('InputHoliday')
