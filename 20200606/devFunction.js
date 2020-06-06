function solution(progresses, speeds) {
  var answer = [];
  var days = [];

  for (var i = 0; i < progresses.length; i++) {
    var day = 0;
    var progress = progresses[i];

    while (progress < 100) {
      progress += speeds[i];
      day++;
    }
    days.push(day);
  }

  while (days.length > 0) {
    var first = days.shift();
    var count = days.findIndex((el) => el > first);

    if (count === -1) {
      answer.push(days.length + 1);
      days = [];
    } else {
      answer.push(count + 1);
      days.splice(0, count);
    }
  }
  return answer;
}
