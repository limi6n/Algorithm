const solution = require("./collatz");

test("solution", () => {
  expect(solution(6)).toStrictEqual(8);
});
