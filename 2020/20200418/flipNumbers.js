function solution(n) {
  var answer = [];
  // var sn = String(n);

  // for (var i = sn.length - 1; i >= 0; i--) {
  //   answer.push(Number(sn[i]));
  // }

  answer = (n + "")
    .split("")
    .reverse()
    .map((i) => parseInt(i));

  return answer; 
}

module.exports = solution;
