const solution = require("./devFunction");

test("solution", () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toStrictEqual([2, 1]);
});
