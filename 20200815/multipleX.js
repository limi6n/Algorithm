function solution(x, n) {
  var answer = [];
  var v = x;

  answer.push(x);
  for (var i = 1; i < n; i++) {
    x += v;
    answer.push(x);
  }
  return answer;
}

module.exports = solution;
