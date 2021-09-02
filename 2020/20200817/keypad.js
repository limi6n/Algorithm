//인터넷에서 보고 제출한 코드
function calDist(num, leftNow, rightNow, pos, handed) {
  const X = 0,
    Y = 1;
  const leftDist =
    Math.abs(pos[leftNow][X] - pos[num][X]) +
    Math.abs(pos[leftNow][Y] - pos[num][Y]);
  const rightDist =
    Math.abs(pos[rightNow][X] - pos[num][X]) +
    Math.abs(pos[rightNow][Y] - pos[num][Y]);
  // 거리가 같으면
  if (leftDist === rightDist) return handed === "right" ? "R" : "L";
  return leftDist > rightDist ? "R" : "L";
}
 
function solution(numbers, hand) {
  // 왼손잡이인지 오른손잡이인지
  const HANDED = hand;
  // 번호 좌표화
  const position = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  // 손 위치 초기화
  let rightNow = "#",
    leftNow = "*";
  // solution
  let result = "";
  for (const num of numbers) {
    // 왼쪽 키라인
    if (num % 3 === 1) {
      result += "L";
      leftNow = num;
    }
    // 오른쪽 키라인
    else if (num !== 0 && num % 3 === 0) {
      result += "R";
      rightNow = num;
    }
    // 중간 키라인
    else {
      result += calDist(num, leftNow, rightNow, position, HANDED);
      result[result.length - 1] === "L" ? (leftNow = num) : (rightNow = num);
    }
  }

  return result;
}

//내가 좀 더 이해하기 쉬운 코드
function solution(numbers, hand) {
  const hands = new Map();
  let answer = "";
  hands.set("left", "*");
  hands.set("right", "#");

  numbers.forEach((number) => {
    if ([1, 4, 7].includes(number)) {
      answer += "L";
      hands.set("left", number);
    } else if ([3, 6, 9].includes(number)) {
      answer += "R";
      hands.set("right", number);
    } else {
      answer += findNearest(hands, number, hand);
    }
  });

  return answer;
}

function findNearest(hands, number, hand) {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const left = hands.get("left");
  const right = hands.get("right");
  let numIndex;
  let leftIndex;
  let rightIndex;

  keypad.forEach((arr, index) => {
    if (arr.includes(number)) numIndex = [index, arr.indexOf(number)];
    if (arr.includes(left)) leftIndex = [index, arr.indexOf(left)];
    if (arr.includes(right)) rightIndex = [index, arr.indexOf(right)];
  });

  const leftDistance = checkDistance(numIndex, leftIndex);
  const rightDistance = checkDistance(numIndex, rightIndex);

  if (leftDistance === rightDistance) {
    if (hand === "left") {
      hands.set("left", number);
      return "L";
    } else {
      hands.set("right", number);
      return "R";
    }
  } else {
    if (leftDistance < rightDistance) {
      hands.set("left", number);
      return "L";
    } else {
      hands.set("right", number);
      return "R";
    }
  }
}

function checkDistance(numIndex, hand) {
  if (numIndex[0] === hand[0]) {
    return Math.abs(numIndex[1] - hand[1]);
  }

  return Math.abs(numIndex[0] - hand[0]) + Math.abs(numIndex[1] - hand[1]);
}
