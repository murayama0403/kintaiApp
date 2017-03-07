import * as moment from "moment"
import * as assert from "power-assert"
import * as target from "../src/DateUtils"

describe("toDayString", () => {
  it("yyyyMMdd形式の日付文字列に変換する", () => {
    // Dateに渡す月は0はじまりなので3月が2。
    assert(target.toDayString(new Date(2017, 2, 1)) === "20170301")
  })
})

describe("formatDate", () => {
  it("月/日(曜日)形式に変換する", () => {
    assert(target.formatDate(new Date(2017, 2, 1)) === "3/1(水)")
  })
})

describe("formatDateForListItem", () => {
  it("日(曜日)形式に変換する", () => {
    assert(target.formatDateForListItem(new Date(2017, 2, 1)) === "1(水)")
  })
})

describe("formatMonth", () => {
  it("yyyy/M形式に変換する", () => {
    assert(target.formatMonth(new Date(2017, 2, 1)) === "2017/3")
  })
})

describe("ceil15Minutes", () => {
  const tests = [
    ["0859", "0900"],
    ["0900", "0900"],
    ["0901", "0915"],
    ["0915", "0915"],
    ["0916", "0930"],
    ["0930", "0930"],
    ["0931", "0945"],
    ["0945", "0945"],
    ["0946", "1000"],
  ]

  tests.forEach(([before, after]) => {
    it(`${before}->${after}`, () => {
      const beforeDate = moment(before, "HHmm").toDate()
      const actualDate = target.ceil15Minutes(beforeDate)
      assert(moment(actualDate).isSame(moment(after, "HHmm")))
    })
  })

  const testsOverDay = [
    ["201703082359", "201703090000"],
    ["201712312359", "201801010000"],
  ]
  testsOverDay.forEach(([before, after]) => {
    it(`${before}->${after}`, () => {
      const beforeDate = moment(before, "YYYYMMDDHHmm").toDate()
      const actualDate = target.ceil15Minutes(beforeDate)
      assert(moment(actualDate).isSame(moment(after, "YYYYMMDDHHmm")))
    })
  })

})
