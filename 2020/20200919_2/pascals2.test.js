const solution = require("./pascalsTriangle2");

test("solution", () => {
  expect(solution(3)).toStrictEqual([1, 3, 3, 1]);
});
