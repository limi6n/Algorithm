function solution(arr) {
  var answer = [];
  var min = Math.min.apply(null, arr);

  if (arr.length <= 1) {
    answer[0] = -1;
  }

  for (var a of arr) {
    if (a != min) {
      answer.push(a);
    }
  } 

  //   if (arr.length > 1) {
  //     arr.sort(function (a, b) {
  //       a > b;
  //     });
  //     arr.pop();
  //     answer = arr;
  //   } else {
  //     answer.push(-1);
  //   }
  return answer;
}

module.exports = solution;
