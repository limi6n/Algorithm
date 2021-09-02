const solution = require("./nextGrtEl");

test("solution", () => {
  expect(solution([4, 1, 2], [1, 3, 4, 2])).toStrictEqual([-1, 3, -1]);
});
