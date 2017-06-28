import { RestNumber } from "../../src/constants/KintaiConstants"
import * as target from "../../src/utils/KintaiUtils"
import * as assert from "power-assert"


describe("isRestAvailable", () => {
  const fixtures: Array<[string, RestNumber, boolean]> = [
    ["", 2, false],
    ["", 3, false],
    ["", 4, false],
    ["", 5, false],
    ["", 6, false],
    ["17:45", 2, false],
    ["17:45", 3, false],
    ["17:45", 4, false],
    ["17:45", 5, false],
    ["17:45", 6, false],
    ["18:00", 2, true],
    ["18:00", 3, false],
    ["18:00", 4, false],
    ["18:00", 5, false],
    ["18:00", 6, false],
    ["18:15", 2, true],
    ["18:15", 3, false],
    ["18:15", 4, false],
    ["18:15", 5, false],
    ["18:15", 6, false],
  ]

  fixtures.forEach(([outTime, restNumber, expected]) => {
    it(`退出時刻が${outTime}の場合、${restNumber}は${expected}`, () => {
      assert(target.isRestAvailable(outTime, restNumber) === expected)
    })
  })

})
