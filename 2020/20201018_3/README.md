# <Intersection of Two Arrays 2>

## 1. 이해

    두개의 배열이 주어지면 겹치는 숫자 반환하기.

## 2. 계획

    indexOf 를 통해 해당되는 숫자가 있으면 배열에 넣어주고 반환한다.

## 3. 실행

## 4. 회고

    앞에 풀었던 intersection.js 와 별 다르지 않았지만 이번에는 중복제거가 아니라 중복되는 숫자가 다 표시되어야해서
    Set 대신 splice 를 사용했다.

    Runtime: 76 ms, faster than 90.24% of JavaScript online submissions for Intersection of Two Arrays II.
    Memory Usage: 39 MB, less than 6.06% of JavaScript online submissions for Intersection of Two Arrays II.
