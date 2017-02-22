export interface GlobalState {
    kintai: KintaiState
    view: ViewState
}

export interface KintaiState {
    person: Person
    days: {[day: string]: DayKintai}
}

export interface Person {
    email: string
}

export interface DayKintai {
    inTime: string
    outTime: string
    holiday: string
}

export interface ViewState {
    currentDate: Date
    // セキュリティや毎月変わることを考慮して保存したくないのでViewState側で保持
    password: string
    isSending: boolean
    isShowSendSuccessMessage: boolean
    sendErrorMessage?: string
}
