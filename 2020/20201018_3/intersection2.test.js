const solution = require("./intersection");

test("solution", () => {
  expect(solution([1, 2, 2, 1], [2, 2])).toStrictEqual([2, 2]);
});
 