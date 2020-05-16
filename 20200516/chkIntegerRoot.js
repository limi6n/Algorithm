function solution(n) {
  var answer = 0;
  var i = Math.sqrt(n);

  if (Number.isInteger(i)) {
    answer = Math.pow(i + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = solution;
