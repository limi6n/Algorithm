# <x만큼 간격이 있는 n개의 숫자>

## 1. 이해

    정수 x부터 시작해서 x씩 n번 증가하는 숫자를 지닌 리스트 리턴하기.

## 2. 계획

    입력 받은 정수 x를 임의의 변수에 선언한 뒤, n번 실행하는 반복문을 통해 x를 계산해준다.

## 3. 실행 

## 4. 회고

    처음에는 reduce를 생각했다가 시작이 배열이 아니라 정수이기 때문에 다른 방법을 생각해보기로했다.
    for문 대신 map을 사용해보고 싶었는데 아직 map은 사용하기 어려워서 일단 for문으로 진행했다.
    초기값이 x로 들어가야해서 반복문을 돌기 전에 첫번째로 x를 그대로 넣어주고 나중에 확인해보니 다들 곱하기로 계산했더라..
    배수라는 사실을 잊고 난 왜 더하기로 한 것일까..
