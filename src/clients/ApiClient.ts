import "whatwg-fetch"
import { DayKintai, KintaiState, Person } from "../states/States"
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
        employeeNo: kintai.person.employeeNo,
        employeName: kintai.person.lastName + kintai.person.firstName,
        departmentCode: kintai.person.departmentCode,
        manageType: kintai.person.manageType,
        manager1: kintai.person.manager1,
        manager1Period: kintai.person.manager1Period,
        manager2: kintai.person.manager2,
        manager2Period: kintai.person.manager2Period,
        sendMailAddr: kintai.person.email + "@caica.jp",
        password,
        workInfoList,
    }
}

function createWorkInfo(date: Date, kintai: KintaiState) {
    const dayKintai = getDayKintai(kintai, date)
    if (!dayKintai) {
        return undefined
    }

    return toWorkInfo(date, dayKintai, kintai.person)
}

function toWorkInfo(date: Date, dayKintai: DayKintai, person: Person) {
    let projectNo = person.defaultProjectNo
    let workCode = person.defaultWorkCode
    if (!dayKintai.inTime && !dayKintai.outTime) {
        projectNo = ""
        workCode = ""
    }

    return {
        day: date.getDate(),
        startTime: dayKintai.inTime,
        clockOutTime: dayKintai.outTime,
        vacationType: dayKintai.holiday,
        break2: "",
        break3: "",
        break4: "",
        break5: "",
        break6: "",
        pjNo: projectNo,
        wkCd: workCode,
    }
}
