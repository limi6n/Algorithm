const solution = require("./maxSubarray");

test("solution", () => {
  expect(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
});
