function solution(n) {
  var answer = [];
  var sn = String(n);

  for (var i = sn.length - 1; i >= 0; i--) {
    answer.push(Number(sn[i]));
  }

  console.log(answer);
  return answer;
}

module.exports = solution;
