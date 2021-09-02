const solution = require("./harshad");

test("solution", () => {
  expect(solution(10)).toStrictEqual(true);
  expect(solution(13)).toStrictEqual(false);
});
