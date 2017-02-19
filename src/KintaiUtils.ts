import {KintaiState, DayKintai} from './States'
import {toDayString} from './DateUtils'

const defaultDayKintai = {
        inTime: '',
        outTime: '',
        holiday: ''
    }

export function getDayKintai(state: KintaiState, date: Date): DayKintai | undefined {
    const day = toDayString(date)
    return state.days[day]
}

export function getDayKintaiOrDefault(state: KintaiState, date: Date, defaultValue: DayKintai = defaultDayKintai): DayKintai {
    let kintai = getDayKintai(state, date)
    if (kintai) {
        return kintai
    }
    return defaultValue
}
