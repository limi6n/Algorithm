const solution = require("./logestCommonPrefix");

test("solution", () => {
  expect(solution(["flower", "flow", "flight"])).toStrictEqual("fl");
});
