import * as moment from 'moment'

export function toDayString(date: Date): string {
    return moment(date).format('YYYYMMDD')
}
