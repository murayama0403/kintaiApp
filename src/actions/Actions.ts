import { action } from "../commons/redux-commons"

interface SelectedTime {
    date: Date
    time: string
}

interface DateText {
    date: Date
    text: string
}

export const SelectInAction = action<SelectedTime>("SelectIn")
export const SelectOutAction = action<SelectedTime>("SelectOut")
export const MoveCurrentDateAction = action<Date>("MoveCurrentDate")
export const InputMemoAction = action<DateText>("InputMemo")
export const InputEmailAction = action<string>("InputEmail")
export const InputPasswordAction = action<string>("InputPassword")
export const SendStartAction = action<undefined>("SendStart")
export const SendSuccessAction = action<undefined>("SendSuccess")
export const CloseSendSuccessMessageAction = action<undefined>("CloseSendSuccessMessage")
export const SendErrorAction = action<string>("SendError")
export const CloseSendErrorMessageAction = action<undefined>("CloseSendErrorMessage")
export const InputEmployeeNoAction = action<string>("InputEmployeeNo")
export const InputLastNameAction = action<string>("InputLastName")
export const InputFirstNameAction = action<string>("InputFirstName")
export const InputDepartmentCodeAction = action<string>("InputDepartmentCode")
export const InputManageTypeAction = action<string>("InputManageType")
