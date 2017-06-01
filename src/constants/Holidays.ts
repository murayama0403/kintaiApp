// 休みの時に使う時刻の値
export const HOLIDAY_TIME_VALUE = "---"

export interface Holiday {
    value: number
    text: string
    isAllDayOff: boolean
}

export const HOLIDAYS: Holiday[] = [
    { value: 1, text: "全日", isAllDayOff: true },
    { value: 2, text: "午前", isAllDayOff: false },
    { value: 3, text: "午後", isAllDayOff: false },
    { value: 4, text: "欠勤", isAllDayOff: true },
    { value: 5, text: "健診BC・再検査", isAllDayOff: true },
    { value: 6, text: "無給", isAllDayOff: true },
    { value: 7, text: "振休", isAllDayOff: true },
    { value: 8, text: "代休", isAllDayOff: true },
    { value: 9, text: "特別代休", isAllDayOff: true },
    { value: 10, text: "結婚忌引配出産", isAllDayOff: true },
    { value: 11, text: "SP5", isAllDayOff: true },
    { value: 12, text: "その他特休", isAllDayOff: true },
    { value: 13, text: "積立休暇", isAllDayOff: true },
    { value: 14, text: "休業", isAllDayOff: true },
    { value: 15, text: "教育訓練", isAllDayOff: true },
]

export function getHolidayFromValue(value?: number): Holiday | undefined {
    if (value === undefined) {
        return undefined
    }

    return HOLIDAYS.find((h) => h.value === value)
}

export function getHolidayText(value?: number) {
    const holiday = getHolidayFromValue(value)
    if (holiday === undefined) {
        return ""
    }
    return holiday.text
}
