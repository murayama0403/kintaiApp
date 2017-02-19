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
export const InputHolidayAction = action<SelectedHoliday>('InputHoliday')
export const InputEmailAction = action<string>('InputEmail')
export const InputPasswordAction = action<string>('InputPassword')
export const SendStartAction = action<undefined>('SendStart')
export const SendSuccessAction = action<undefined>('SendSuccess')
export const CloseSendSuccessMessageAction = action<undefined>('CloseSendSuccessMessage')
export const SendErrorAction = action<string>('SendError')
export const CloseSendErrorMessageAction = action<undefined>('CloseSendErrorMessage')
