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

    public showCommonPage() {
        hashHistory.push("/common")
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

    public inputEmployeeNo(employeeNumber: string) {
        this.dispatch(actions.InputEmployeeNoAction.create(employeeNumber))
    }

    public inputLastName(lastName: string) {
        this.dispatch(actions.InputLastNameAction.create(lastName))
    }

    public inputFirstName(firstName: string) {
        // TODO 入力チェック？
        this.dispatch(actions.InputFirstNameAction.create(firstName))
    }

    public inputDepartmentCode(departmentCode: string) {
        this.dispatch(actions.InputDepartmentCodeAction.create(departmentCode))
    }

    public inputManageType(manageType: string) {
        this.dispatch(actions.InputManageTypeAction.create(manageType))
    }

    public inputManager1(manager1: string) {
        this.dispatch(actions.InputManager1Action.create(manager1))
    }

    public inputManager1Period(manager1Period: string) {
        this.dispatch(actions.InputManager1PeriodAction.create(manager1Period))
    }

    public inputManager2(manager2: string) {
        this.dispatch(actions.InputManager2Action.create(manager2))
    }

    public inputManager2Period(manager2Period: string) {
        this.dispatch(actions.InputManager2PeriodAction.create(manager2Period))
    }

    public inputDefaultProjectNo(defaultProjectNo: string) {
        this.dispatch(actions.InputDefaultProjectNoAction.create(defaultProjectNo))
    }

    public inputDefaultWorkCode(defaultWorkCode: string) {
        this.dispatch(actions.InputDefaultWorkCodeAction.create(defaultWorkCode))
    }

    public toggleRest1(date: Date) {
        this.dispatch(actions.ToggleRest1Action.create(date))
    }
	
	public toggleRest2(date: Date) {
        this.dispatch(actions.ToggleRest2Action.create(date))
    }
	
	public toggleRest3(date: Date) {
        this.dispatch(actions.ToggleRest3Action.create(date))
    }

	public toggleRest4(date: Date) {
        this.dispatch(actions.ToggleRest4Action.create(date))
    }

}
