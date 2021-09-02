function solution(heights) {
  var answer = [];
  var temp = [];

  for (let i = 0; i < heights.length; i++) {
    while (temp.length > 0 && heights[temp[temp.length - 1]] <= heights[i]) {
      temp.pop();
    }

    if (temp.length > 0) {
      answer.push(temp[temp.length - 1] + 1);
    } else {
      answer.push(0);
    }
 
    temp.push(i);
  }

  return answer;
}

module.exports = solution;
