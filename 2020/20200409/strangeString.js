function solution(s) {
  var answer = "";
  var changeWorld = "";
  var changeArr = [];

  var world = s.split(" ");

  for (var j in world) {
    for (var k in world[j]) { 
      k % 2 === 0
        ? (changeWorld += world[j][k].toUpperCase())
        : (changeWorld += world[j][k].toLowerCase());
    }
    changeArr.push(changeWorld);
    changeWorld = "";

    answer = changeArr.join(" ");
  }
  return answer;
}

module.exports = solution;
