export interface Holiday {
    value: number
    text: string
}

export const HOLIDAYS: Holiday[] = [
    { value: 1, text: "全日"},
    { value: 2, text: "午前" },
    { value: 3, text: "午後" },
    { value: 4, text: "欠勤" },
    { value: 5, text: "健診BC・再検査" },
    { value: 6, text: "無給" },
    { value: 7, text: "振休" },
    { value: 8, text: "代休" },
    { value: 9, text: "特別代休" },
    { value: 10, text: "結婚忌引配出産" },
    { value: 11, text: "SP5" },
    { value: 12, text: "その他特休" },
    { value: 13, text: "積立休暇" },
    { value: 14, text: "休業" },
    { value: 15, text: "教育訓練" },
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
