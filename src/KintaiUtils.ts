import {KintaiState, DayKintai} from './States'
import {toDayString} from './DateUtils'

const defaultDayKintai = {
        inTime: '',
        outTime: '',
        holiday: ''
    }

export function getDayKintai(state: KintaiState, date: Date, defaultValue: DayKintai | null = defaultDayKintai): DayKintai | null {
    const day = toDayString(date)
    let kintai = state.days[day]
    if (kintai) {
        return kintai
    }

    return defaultValue
}
