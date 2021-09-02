# <Matrix Cells in Distance Order>

## 1. 이해

    로우값, 컬럼값, 그리고 로우 시작값과 컬럼 시작값이 주어졌을 때, Manhattan 거리(|r1 - r2| + |c1 - c2|)를 이용한 행렬 리턴하기.

## 2. 계획

    오름차순으로 배열을 정렬한 뒤, 가장 긴 변이 나머지 두 변의 합보다 작은 경우를 차례로 찾는다.

## 3. 실행 

    주어진 로우값과 컬럼값으로 반복문을 두번돌려 행렬을 만든 후, 맨하튼거리를 계산해보는 쪽으로..

## 4. 회고

    맨하탄거리가 생소해서 찾아봤더니 문제에서 주어진 거리공식이 다가아니었다. 맨하탄거리의 최종공식으로 나온 모습이 d(A, B) 일 때,
    수열 i부터 n까지 |ai - bi| 를 구하는 식이었고, 수열 i부터 n까지를 반복하는 것이니까 sort를 통해 정렬해서 구하는 방법을 찾을 수 있었다.

    Runtime: 160 ms, faster than 35.11% of JavaScript online submissions for Matrix Cells in Distance Order.
    Memory Usage: 45.8 MB, less than 8.51% of JavaScript online submissions for Matrix Cells in Distance Order.
