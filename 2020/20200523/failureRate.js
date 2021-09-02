function solution(N, stages) {
  var answer = [];
  var rate = [];
  var temp = stages.length;

  for (let n = 1; n <= N; n++) {
    var count = 0;
    for (let i of stages) {
      if (i === n) {
        count++;
      }
    }
    const failure = count / temp;
    temp = temp - count;
    rate.push({ N: n, fRate: failure });
  }
 
  //다른 사람 풀이 참조
  return rate
    .sort((a, b) => {
      //      if (a.fRate > b.fRate) return -1;
      //      if (a.fRate < b.fRate) return 1;
      //      return a.N - b.N; //실패율이 같을 때

      //다른 사람 풀이 참조2(동직홍님)
      if (a.fRate === b.fRate) {
        return a.N - b.N;
      } else {
        return a.fRate - b.fRate;
      }
    })
    .map((el) => el.N);
}
