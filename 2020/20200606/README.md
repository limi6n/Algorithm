# <기능개발>

## 1. 이해

    - 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때
    각 배포마다 몇 개의 기능이 배포되는지

    - 제한사항
     * 배포는 하루에 한번만

## 2. 계획 

    progresses 와 speeds 의 인덱스로 100%가 될 때를 계산해서 배열에 넣어둔다.
    계산된 배열들에서 첫번째 값보다 작으면 함께 묶어서 카운트하여 answer에 넣고, 크면 다음으로 넘어간다.

## 3. 실행

## 4. 회고

    100%가 될 때를 계산해서 새로운 배열에 넣는 부분은 생각한대로 구현이 되어서 쉽게 했는데,
    계산된 배열들을 카운트해서 answer 배열에 넣는 부분을 좀 헤맸다.
    인터넷을 참고하여 shift 와 findIndex, splice 함수들을 통해 구현할 수 있었다. 해당 함수에 대한 공부가 필요할 것 같다.
    다른 사람들 풀이를 봤는데 math를 이용해서 해결한 사람들이 많았다. 그 소스도 분석해봐야할 듯..
