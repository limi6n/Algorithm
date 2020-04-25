const solution = require("./kolatz");

test("solution", () => {
  expect(solution(6)).toStrictEqual(8);
});
