import { History } from "history"
import * as actions from "../actions/Actions"
import { sendMonthKintai } from "../clients/ApiClient"
import { Action } from "../commons/redux-commons"
import { RestNumber } from "../constants/KintaiConstants"
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
            return
        }).catch(() => {
            this.dispatch(actions.SendErrorAction.create("ネットワークエラー"))
        })
    }

    public inputSpecialNote(date: Date, value: string) {
        this.dispatch(actions.InputSpecialNoteAction.create({
            date,
            text: value,
        }))
    }

    public selectHoliday(date: Date, holiday?: number) {
        this.dispatch(actions.SelectHolidayAction.create({
            date,
            value: holiday,
        }))
    }

    public inputMemo(date: Date, memo: string) {
        this.dispatch(actions.InputMemoAction.create({
            date,
            text: memo,
        }))
    }

    public showInputPage(history: History, date?: Date) {
        if (!!date) {
            this.moveCurrentDate(date)
        }
        history.push("/")
    }

    public showListPage(history: History) {
        history.push("/list")
    }

    public showCommonPage(history: History) {
        history.push("/common")
    }

    public showProjectPage(history: History) {
        history.push("/project")
    }

    public showSendPage(history: History) {
        history.push("/send")
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

    public toggleRest(date: Date, restNumber: RestNumber) {
        this.dispatch(actions.ToggleRestAction.create({
            date,
            restNumber,
        }))
    }

}
