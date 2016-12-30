export interface GlobalState {
    kintai: KintaiState;
    inputPage: InputPageState;
    listPage: ListPageState;
}

export interface KintaiState {
    days: {[day: string]: DayKintai}
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
}
