# <Lemonade Change>

## 1. 이해

    레몬에이드가 한잔에 5$ 이고, 배열이 주어질 때 판매가 다 가능한지 true/false 로 반환하기.
    처음에는 거스름돈이 없기 때문에 처음 받는 돈이 5$ 초과이면 거슬러 줄 돈이 없기 때문에 false를 반환한다.

## 2. 계획

    문제 조건에서 지불하는 돈이 5, 10, 20으로 정해놨기 때문에 경우의 수를 구해본다.

## 3. 실행 

## 4. 회고

    단순 돈계산인 줄 알았더니..돈이 정해져있던게 단위를 깰 수가 없는 거였다..참..
    다시 생각해서 거스름돈을 하나로 정하지 않고, 5와 10으로 나눠서 경우의 수로 계산했다.

    Runtime: 88 ms, faster than 48.04% of JavaScript online submissions for Lemonade Change.
    Memory Usage: 40.9 MB, less than 5.39% of JavaScript online submissions for Lemonade Change.
