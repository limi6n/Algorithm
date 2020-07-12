const solution = require("./gcdLcm");

test("solution", () => {
  expect(solution(3, 12)).toStrictEqual([3, 12]);
  expect(solution(2, 5)).toStrictEqual([1, 10]);
});
