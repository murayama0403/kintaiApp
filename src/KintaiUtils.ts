import { toDayString } from "./DateUtils"
import { DayKintai, KintaiState } from "./States"

const defaultDayKintai = {
    holiday: "",
    inTime: "",
    outTime: "",
}

export function getDayKintai(state: KintaiState, date: Date): DayKintai | undefined {
    const day = toDayString(date)
    return state.days[day]
}

export function getDayKintaiOrDefault(
    state: KintaiState, date: Date, defaultValue: DayKintai = defaultDayKintai): DayKintai {
    const kintai = getDayKintai(state, date)
    if (kintai) {
        return kintai
    }
    return defaultValue
}
