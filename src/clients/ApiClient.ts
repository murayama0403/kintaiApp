import "whatwg-fetch"
import { DayKintai, KintaiState } from "../states/States"
import { getMonthDates } from "../utils/DateUtils"
import { getDayKintai } from "../utils/KintaiUtils"

export function sendMonthKintai(kintai: KintaiState, month: Date, password: string): Promise<Response> {
    const body = createBody(kintai, month, password)

    return fetch("https://sleepy-ravine-40602.herokuapp.com/api/kinmu", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    })
}

function createBody(kintai: KintaiState, month: Date, password: string) {
    const workInfoList = getMonthDates(month)
        .map((date) => createWorkInfo(date, kintai))
        .filter((info) => info !== undefined)

    return {
        year: month.getFullYear(),
        month: month.getMonth() + 1,
        // TODO
        employeeNo: "99999",
        employeName: "勤務太郎",
        departmentCode: "123456",
        sendMailAddr: kintai.person.email + "@caica.jp",
        password,
        workInfoList,
    }
}

function createWorkInfo(date: Date, KintaiState: KintaiState) {
    const dayKintai = getDayKintai(KintaiState, date)
    if (!dayKintai) {
        return undefined
    }

    return toWorkInfo(date, dayKintai)
}

function toWorkInfo(date: Date, dayKintai: DayKintai) {
    return {
        day: date.getDate(),
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
        wkCd: "F",
    }
}
