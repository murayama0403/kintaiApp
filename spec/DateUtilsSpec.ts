import * as target from "../src/DateUtils"

describe("toDayString", () => {
  it("日付文字列に変換できる", () => {
    // Dateに渡す月は0はじまりなので3月が2。
    expect(target.toDayString(new Date(2017, 2, 1))).toBe("20170301")
  })
})
