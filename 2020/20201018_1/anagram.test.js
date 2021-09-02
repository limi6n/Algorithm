const solution = require("./validAnagram");

test("solution", () => {
  expect(solution("anagram", "nagaram")).toStrictEqual(true);
});

test("solution", () => {
  expect(solution("acca", "accc")).toStrictEqual(false);
});
