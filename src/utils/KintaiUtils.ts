import { RestNumber } from "../constants/KintaiConstants"
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

export function isRestAvailable(outTime: string, restNumber: RestNumber) {
    // 退出時刻を入力していない場合はfalse
    if (outTime === "") {
        return false
    }

    // 時刻を文字列で比較したいため、桁数を合わせる
    // 例）"9:00"" -> "09:00"
    let fixedTime = outTime
    if (outTime.length === 4) {
        fixedTime = "0" + outTime
    }

    switch (restNumber) {
        case 2: return fixedTime > "17:45" || fixedTime <= "09:00"
        case 3: return fixedTime > "19:30" || fixedTime <= "09:00"
        case 4: return fixedTime > "22:00" || fixedTime <= "09:00"
        case 5: return fixedTime > "02:30" && fixedTime <= "09:00"
        case 6: return fixedTime > "08:30" && fixedTime <= "09:00"
        default: return false
    }
}
