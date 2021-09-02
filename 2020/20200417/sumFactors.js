function solution(n) {
  var answer = 0;
  var arr = [];

  for (var i = 1; i <= n; i++) {
    if (n % i == 0) arr.push(i);
  }

  answer = arr.reduce((acc, a) => acc + a, 0);

  return answer;
} 

module.exports = solution;
