import { indigo700, red700 } from "material-ui/styles/colors"
import * as moment from "moment"
import * as assert from "power-assert"
import * as target from "../../src/utils/DateUtils"

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
  const fixtures = [
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

  fixtures.forEach(([time, expected]) => {
    it(`${time}->${expected}`, () => {
      const timeDate = moment(time, "HHmm").toDate()
      assert(moment(target.ceil15Minutes(timeDate)).isSame(moment(expected, "HHmm")))
    })
  })

  const fixturesOverDay = [
    ["201703082359", "201703090000"],
    ["201712312359", "201801010000"],
  ]
  fixturesOverDay.forEach(([time, expected]) => {
    it(`${time}->${expected}`, () => {
      const timeDate = moment(time, "YYYYMMDDHHmm").toDate()
      assert(moment(target.ceil15Minutes(timeDate)).isSame(moment(expected, "YYYYMMDDHHmm")))
    })
  })

})

describe("floor15Minutes", () => {
  const fixtures = [
    ["1745", "1745"],
    ["1759", "1745"],
    ["1800", "1800"],
    ["1814", "1800"],
    ["1815", "1815"],
    ["1829", "1815"],
    ["1830", "1830"],
    ["1844", "1830"],
  ]

  fixtures.forEach(([time, expected]) => {
    it(`${time}->${expected}`, () => {
      const timeDate = moment(time, "HHmm").toDate()
      assert(moment(target.floor15Minutes(timeDate)).isSame(moment(expected, "HHmm")))
    })
  })

})

describe("moveDates", () => {
  const fixtures = [
    { date: "20170301", amount: 1, expected: "20170302" },
    { date: "20170301", amount: 3, expected: "20170304" },
    { date: "20170301", amount: 31, expected: "20170401" },
    { date: "20170301", amount: -1, expected: "20170228" },
    { date: "20171231", amount: 1, expected: "20180101" },
    { date: "20180101", amount: -1, expected: "20171231" },
  ]

  fixtures.forEach((fixture) => {
    it(`${fixture.date} を ${fixture.amount} 日移動すると ${fixture.expected} になる`, () => {
      const date = moment(fixture.date, "YYYYMMDD").toDate()
      assert(moment(target.moveDates(date, fixture.amount)).isSame(moment(fixture.expected, "YYYYMMDD")))
    })
  })
})

describe("moveMonths", () => {
  const fixtures = [
    { date: "20170301", amount: 1, expected: "20170401" },
    { date: "20170315", amount: 1, expected: "20170401" },
    { date: "20170331", amount: 3, expected: "20170601" },
    { date: "20170315", amount: -1, expected: "20170201" },
    { date: "20171215", amount: 1, expected: "20180101" },
    { date: "20180115", amount: -1, expected: "20171201" },
  ]

  fixtures.forEach((fixture) => {
    it(`${fixture.date} を ${fixture.amount} 月移動すると ${fixture.expected} になる`, () => {
      const date = moment(fixture.date, "YYYYMMDD").toDate()
      assert(moment(target.moveMonths(date, fixture.amount)).isSame(moment(fixture.expected, "YYYYMMDD")))
    })
  })
})

describe("formatTime", () => {
  const fixtures = [
    ["1745", "17:45"],
    ["0900", "9:00"],
  ]

  fixtures.forEach(([time, expected]) => {
    it(`${time}->${expected}`, () => {
      const timeDate = moment(time, "HHmm").toDate()
      assert(target.formatTime(timeDate) === expected)
    })
  })

})

describe("getMonthDates", () => {
  const fixtures = [
    {year: 2017, month: 2, count: 28},
    {year: 2017, month: 3, count: 31},
    {year: 2017, month: 4, count: 30},
    {year: 2016, month: 2, count: 29},
  ]

  fixtures.forEach((fixture) => {
    it(`${fixture.month}年${fixture.month}月は${fixture.count}日まで`, () => {
      const date = new Date(fixture.year, fixture.month - 1, 15)
      const actual = target.getMonthDates(date)
      assert(actual.length === fixture.count)
      assert(actual[actual.length - 1].getDate() === fixture.count)
    })
  })
})

describe("getDayType", () => {
  const fixtures = [
    {date: "20170309", expected: target.DayType.WEEKDAY},
    {date: "20170311", expected: target.DayType.SATURDAY},
    {date: "20170312", expected: target.DayType.SUNDAY},
    {date: "20170101", expected: target.DayType.HOLIDAY},
    {date: "20170103", expected: target.DayType.HOLIDAY},
    {date: "20171230", expected: target.DayType.HOLIDAY},
    {date: "20171223", expected: target.DayType.HOLIDAY},
   ]

  fixtures.forEach((fixture) => {
    it(`${fixture.date}->${fixture.expected}`, () => {
      const date = moment(fixture.date, "YYYYMMDD").toDate()
      assert(target.getDayType(date) === fixture.expected)
    })
  })
})

describe("getDayColor", () => {
  const fixtures = [
    {date: "20170309", expected: undefined},
    {date: "20170311", expected: indigo700},
    {date: "20170312", expected: red700},
    {date: "20170101", expected: red700},
   ]

  fixtures.forEach((fixture) => {
    it(`${fixture.date}->${fixture.expected}`, () => {
      const date = moment(fixture.date, "YYYYMMDD").toDate()
      assert(target.getDayColor(date) === fixture.expected)
    })
  })
})
