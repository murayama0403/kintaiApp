import { DayKintai, KintaiState } from "../states/States"
import { toDayString } from "./DateUtils"

const defaultDayKintai = {
    inTime: "",
    outTime: "",
    noRest2: false,
    noRest3: false,
    noRest4: false,
    noRest5: false,
    noRest6: false,
    memo: "",
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
