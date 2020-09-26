# <Best Time to Buy and Sell Stock>

## 1. 이해

    i 크기의 배열이 주어지고 index i는 날짜, i의 값은 i날짜에 살 수 있는 가격이 주어질 때,
    가장 이득을 크게 취할 수 값 구하기.
    단, 주식을 먼저 산 뒤 주식을 팔 수 있다.

## 2. 계획

    반복문을 통해 배열의 가장 작은 수와 큰 수를 인덱스와 함께 구해서 저장해 놓은 뒤,
    인덱스를 비교해 보고 가장 큰 수의 인덱스가 가장 작은 수의 인덱스보다 더 크면 사고 팔고를 할 수 있으므로 빼고
    적으면 0을 리턴한다.

## 3. 실행

## 4. 회고

    가장 적은 수와 가장 큰 수를 생각했다가 인덱스 때문에 되는 경우도 있고 안되는 경우가 있어 더 헷갈리게 되어버리고 꼬여버렸다..

    Runtime: 268 ms, faster than 15.08% of JavaScript online submissions for Best Time to Buy and Sell Stock.
    Memory Usage: 39.6 MB, less than 5.31% of JavaScript online submissions for Best Time to Buy and Sell Stock.
