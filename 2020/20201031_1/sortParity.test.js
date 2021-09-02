const solution = require("./sortParity");

test("solution", () => {
  expect(solution([4, 2, 5, 7])).toStrictEqual([4, 5, 2, 7]);
});
