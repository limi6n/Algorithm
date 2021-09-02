function solution(n, m) {
  var answer = [];

  function u(n, m) {
    return m % n == 0 ? n : u(m % n, n);
  }

  var gcd = u(n, m);
  var lcm = (n * m) / gcd;

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

module.exports = solution;
