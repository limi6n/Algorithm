const solution = require("./evenOdd");

test("solution", () => {
  expect(solution(3)).toStrictEqual("Odd");
  expect(solution(4)).toStrictEqual("Even");
});
