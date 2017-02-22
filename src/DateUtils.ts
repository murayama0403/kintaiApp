import {isHoliday} from "japanese-holidays"
import {indigo700, red700} from "material-ui/styles/colors"
import * as moment from "moment"

export function toDayString(date: Date): string {
    return moment(date).format("YYYYMMDD")
}

export function formatDate(date: Date): string {
    return moment(date).format("M/D(dd)")
}

export function formatDateForListItem(date: Date): string {
    return moment(date).format("D(dd)")
}

export function formatMonth(date: Date): string {
    return moment(date).format("YYYY/M")
}

export function ceil15Minutes(date: Date): Date {
    const minutes = Math.ceil(date.getMinutes() / 15) * 15
    return moment(date).minute(minutes).toDate()
}

export function floor15Minutes(date: Date): Date {
    const minutes = Math.floor(date.getMinutes() / 15) * 15
    return moment(date).minute(minutes).toDate()
}

export function moveDates(date: Date, amount: number) {
    return moment(date).add(amount, "days").toDate()
}

export function moveMonths(date: Date, amount: number) {
    // 月移動する場合は日付は1日にリセットする
    return moment(date).add(amount, "months").date(1).toDate()
}

export function formatTime(date: Date): string {
    return moment(date).format("H:mm")
}

export function getMonthDates(month: Date): Date[] {
    const date = moment(month)
    const count = date.daysInMonth()
    const array = new Array<Date>(count)
    for (let i = 0; i < count; i++) {
        array[i] = date.date(i + 1).toDate()
    }
    return array
}

export enum DayType {
    WEEKDAY,
    SATURDAY,
    SUNDAY,
    HOLIDAY,
}

// 就業規則で12/30-1/3は休み(1/1は元日なので設定不要)
const COMPANY_HOLIDAYS = ["12/30", "12/31", "1/2", "1/3"]

export function getDayType(date: Date): DayType {
    const holiday = isHoliday(date)
    if (holiday) {
        return DayType.HOLIDAY
    }

    if (COMPANY_HOLIDAYS.indexOf(moment(date).format("M/D")) !== -1) {
        return DayType.HOLIDAY
    }

    const day = date.getDay()
    if (day === 6) {
        return DayType.SATURDAY
    }
    if (day === 0) {
        return DayType.SUNDAY
    }
    return DayType.WEEKDAY
}

export function getDayColor(date: Date): string | undefined {
    const dayType = getDayType(date)
    switch (dayType) {
        case DayType.HOLIDAY:
        case DayType.SUNDAY:
            return red700
        case DayType.SATURDAY:
            return indigo700
        default:
            return undefined
    }
}
