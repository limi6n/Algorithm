const solution = require("./top");

test("solution", () => {
  expect(solution([3, 9, 9, 3, 5, 7, 2])).toStrictEqual([0, 0, 0, 3, 3, 3, 6]);
});
 