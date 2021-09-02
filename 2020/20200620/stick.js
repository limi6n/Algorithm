function solution(arrangement) {
  var answer = 0;
  var stack = [];

  for (var i = 0; i < arrangement.length; i++) {
    if (arrangement[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (arrangement[i - 1] === "(") answer += stack.length;
      else answer += 1;
    }
  }
  return answer;
}

module.exports = solution;
