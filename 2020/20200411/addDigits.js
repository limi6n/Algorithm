function solution(n) {
  let answer = 0;
  const sn = String(n);

  for (let i of sn) {
    answer += Number(i);
  }

  return answer;
}

module.exports = solution; 
