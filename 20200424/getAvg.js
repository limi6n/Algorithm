function solution(arr) {
  var answer = 0;

  answer = arr.reduce((acc, a) => acc + a, 0);
  answer = answer / arr.length;

  return answer;
}

module.exports = solution;
