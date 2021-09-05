/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanNumeral = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const arr = s.split("").map((x) => romanNumeral[x]);

  //reduceRight 사용 시
  //return sVal.reduceRight((a, c, i, arr) => (c < arr[i + 1]) ? a - c : a + c);

  //내가 푼 방법
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) sum -= arr[i];
    else sum += arr[i];
  }
  return sum;
};

module.exports = romanToInt;
