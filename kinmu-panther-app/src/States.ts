export interface GlobalState {
    kintai: KintaiState;
    inputPage: InputPageState;
}

export interface KintaiState {
    inTime: string;
    outTime: string;
//    months: {[month: number]: MonthKintai}
}

export interface MonthKintai {
    year: number;
    month: number;
    days: {[day: number]: DayKintai}
}

export interface DayKintai {
    inTime: string;
    outTime: string;
}

export interface InputPageState {
    currentDate: Date;
}
