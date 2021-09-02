function solution(priorities, location) {
  let answer = 0;
  const list = priorities.map((value, index) => ({
    value,
    index,
  }));

  while (true) {
    //const current = list.splice(0, 1)[0];
    const current = list.shift();

    //some : 하나라도 참이면 true 리턴, 아니면 false return
    if (list.some((item) => item.value > current.value)) {
      list.push(current);
    } else {
      answer++;
      if (current.index === location) {
        return answer;
      }
    }
  }
}

module.exports = solution; 
