import {action} from "./common/redux-common"

interface SelectedTime {
    date: Date;
    time: string;
}

export const SelectInAction = action<SelectedTime>('SelectIn')
export const SelectOutAction = action<SelectedTime>('SelectOut')
