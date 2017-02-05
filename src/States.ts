export interface GlobalState {
    kintai: KintaiState;
    inputPage: InputPageState;
    listPage: ListPageState;
}

export interface KintaiState {
    person: Person;
    days: {[day: string]: DayKintai};
}

export interface Person {
    email: string;
}

export interface DayKintai {
    inTime: string;
    outTime: string;
    holiday: string;
}

export interface InputPageState {
    currentDate: Date;
}

export interface ListPageState {
    currentDate: Date;
    isSendDialogOpen: boolean;
    // セキュリティや毎月変わることを考慮して保存したくないのでListPageState側で保持
    password: string;
}
