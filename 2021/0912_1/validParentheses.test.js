const solution = require("./validParentheses");

test("solution", () => {
  expect(solution("()[]{}")).toStrictEqual(true);
});
