function solution(a, b) {
  var answer = 0;

  var maxNum = Math.max(a, b);
  var minNum = Math.min(a, b);

  if (a == b) {
    answer = a;
  } else {
    for (minNum; minNum <= maxNum; minNum++) {
      answer += minNum;
    }
  }

  return answer;
}

module.exports = solution;
