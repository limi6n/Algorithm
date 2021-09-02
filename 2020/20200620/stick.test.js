const solution = require("./stick");

test("solution", () => {
  expect(solution("()(((()())(())()))(())")).toStrictEqual(17);
});
