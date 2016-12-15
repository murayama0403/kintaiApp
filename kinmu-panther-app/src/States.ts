import {toDayString} from "./DateUtils"

export interface GlobalState {
    kintai: KintaiState;
    inputPage: InputPageState;
}

export interface KintaiState {
    days: {[day: string]: DayKintai}
}

export interface DayKintai {
    inTime: string;
    outTime: string;
}

export interface InputPageState {
    currentDate: Date;
}

export function getDayKintai(state: KintaiState, date: Date) {
    const day = toDayString(date)
    let kintai = state.days[day]
    if (kintai) {
        return kintai
    }

    return {
        inTime: '',
        outTime: ''
    }
}

