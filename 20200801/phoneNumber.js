function solution(phone_number) {
  var answer = "";

  return (answer =
    "*".repeat(phone_number.length - 4) + phone_number.slice(-4));
}

module.exports = solution;
