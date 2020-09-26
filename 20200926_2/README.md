# <Best Time to Buy and Sell Stock2>

## 1. 이해

    i 크기의 배열이 주어지고 index i는 날짜, i의 값은 i날짜에 살 수 있는 가격이 주어질 때, 가장 이득을 크게 취할 수 값 구하기.
    여러번 사고 팔기 가능. 하지만 사고 팔고는 한 세트가 되어야하고 한번 더 사려면 기존에 있던 주식을 팔아야 살 수 있다.

## 2. 계획

## 3. 실행

    산 인덱스와 값을 저장하고 나머지 날짜를 다 돌아보면서 뺀 값을 따로 저장해둔다.

## 4. 회고

    따로 저장해두면서 모든 경우의 수를 다 계산해보려고 했는데 코드가 너무 복잡해지고 갈 수록 알 수가 없게되었다.
    탐욕법으로 코딩하는게 이런 문제인 걸까..?
    결국 인터넷에 찾아서 소스를 넣긴 했는데 틀린 방법인 것 같다..다시 생각해봐야 할 것 같다.

    Runtime: 84 ms, faster than 48.27% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
    Memory Usage: 39.2 MB, less than 5.19% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
