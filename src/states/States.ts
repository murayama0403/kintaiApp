export interface GlobalState {
    kintai: KintaiState
    view: ViewState
}

export interface KintaiState {
    person: Person
    days: { [day: string]: DayKintai }
}

export interface Person {
    email: string
    employeeNo: string
    lastName: string
    firstName: string
    departmentCode: string
    manageType: string
    manager1: string
    manager1Period: string
    manager2: string
    manager2Period: string
    defaultProjectNo: string
    defaultWorkCode: string
}

export interface DayKintai {
    inTime: string
    outTime: string
    noRest2: boolean
    noRest3: boolean
    noRest4: boolean
    noRest5: boolean
    noRest6: boolean
    showRest2: boolean
    showRest3: boolean
    showRest4: boolean
    showRest5: boolean
    showRest6: boolean
    memo: string
}

export interface ViewState {
    currentDate: Date
    // セキュリティや毎月変わることを考慮して保存したくないのでViewState側で保持
    password: string
    isSending: boolean
    isShowSendSuccessMessage: boolean
    sendErrorMessage?: string
}
