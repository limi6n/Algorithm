# <Sort Array By Parity II>

## 1. 이해

    배열이 주어졌을 때 배열 index가 홀수이면 배열값 중 홀수를 배치, index가 짝수이면 배열값 중 짝수를 배치하는 배열을 리턴하기.

## 2. 계획

    반복문을 돌려 index 마다 하나씩 체크한다.

## 3. 실행

## 4. 회고

    처음에 단순하게 생각했다가 배열을 아예 짝수배열과 홀수 배열로 나눈 뒤, result라는 새로운 배열에 순서대로 돌아가면서 짝수일 때 짝수배열로,
    홀수일 때 홀수배열에서 값을 가져오는 방식으로 바꾸었다. 반복문을 저렇게 말고 더 깔끔하게 쓰고싶다..

    Runtime: 112 ms, faster than 59.67% of JavaScript online submissions for Sort Array By Parity II.
    Memory Usage: 49.3 MB, less than 9.39% of JavaScript online submissions for Sort Array By Parity II.
