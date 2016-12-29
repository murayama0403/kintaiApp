import * as moment from 'moment'

export function toDayString(date: Date): string {
    return moment(date).format('YYYYMMDD')
}

export function formatDate(date: Date): string {
    return moment(date).format('M/D(dd)')
}

export function formatMonth(date: Date): string {
    return moment(date).format('YYYY/M')
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
    return moment(date).add(amount, 'days').toDate()
}

export function formatTime(date: Date): string {
    return moment(date).format('H:mm')
}