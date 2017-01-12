import {KintaiState, DayKintai} from "./States"
import {getMonthDates} from "./DateUtils"
import {getDayKintai} from "./KintaiUtils"
import 'whatwg-fetch'

export function sendMonthKintai(kintai: KintaiState, month: Date) {
    const body = createBody(kintai, month)

    fetch('http://localhost:9000/api/kinmu', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((res) => console.log(res))
}

function createBody(kintai: KintaiState, month: Date) {
    const workInfoList = getMonthDates(month)
            .map(date => createWorkInfo(date, kintai))
            .filter(info => info != null)

    return {
        year: month.getFullYear(),
        month: month.getMonth() + 1,
        // TODO
        employeeNo: "99999",
        employeName: "勤務太郎",
        departmentCode: "123456",
        sendMailAddr: "yamato-satoshi@sji-inc.jp",
        password: "test",

        workInfoList: workInfoList
    }
}

function createWorkInfo(date: Date, KintaiState: KintaiState) {
    const dayKintai = getDayKintai(KintaiState, date, null)
    if (dayKintai == null) {
        return null
    }

    return toWorkInfo(date, dayKintai)
}

function toWorkInfo(date: Date, dayKintai: DayKintai) {
    return {
        day : date.getDate(),
        startTime: dayKintai.inTime,
        clockOutTime: dayKintai.outTime,
        // TODO
        vacationType: "",
        break2: "",
        break3: "",
        break4: "",
        break5: "",
        break6: "",
        pjNo: "",
        wkCd: "F"
    }
}