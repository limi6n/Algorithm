function solution(x) {
  var a = 0;
  var s = (x + "").split("").map(Number);

  for (let i of s) {
    a += i;
  }

  return x % a == 0 ? true : false;
}

module.exports = solution;
