const solution = require("./flipNumbers");

test("solution", () => {
  expect(solution(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});
 