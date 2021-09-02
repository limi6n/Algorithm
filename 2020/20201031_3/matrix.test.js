const solution = require("./matrix");

test("solution", () => {
  expect(solution(2, 3, 1, 2)).toStrictEqual([
    [1, 2],
    [0, 2],
    [1, 1],
    [0, 1],
    [1, 0],
    [0, 0],
  ]);
});
