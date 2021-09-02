function solution(n) {
  var answer = 0;
  var arr = [];

  var s = n.toString();

  for (let i of s) {
    arr.push(i);
  }

  var result = arr
    .sort((a, b) => b - a)
    .map(Number)
    .join("");
  answer = parseInt(result);

  return answer;
}

module.exports = solution;
