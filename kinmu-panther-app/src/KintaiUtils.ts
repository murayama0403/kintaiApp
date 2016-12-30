import {KintaiState} from './States'
import {toDayString} from './DateUtils'

export function getDayKintai(state: KintaiState, date: Date) {
    const day = toDayString(date)
    let kintai = state.days[day]
    if (kintai) {
        return kintai
    }

    return {
        inTime: '',
        outTime: '',
        holiday: ''
    }
}
