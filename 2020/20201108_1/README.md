# <Is Subsequence>

## 1. 이해

    String s와 t가 주어질 때, s가 t의 하위 시퀀스일 경우 true 반환, 아닐 경우 false 반환

## 2. 계획

    s와 t를 배열로 바꾼 후, sorting한다. 비교해서 있을 경우 s의 값을 하나씩 지워주고 s의 길이가 0이면 true를 반환한다.

## 3. 실행 

## 4. 회고

    처음에는 계획한대로 배열로 바꾼 후 sorting 까진 했다가, filter 와 includes 를 사용하면 교집합을 구할 수 있어서 교집합을 구한 뒤
    기존 s와 비교하는 형식으로 했다. 그런데 순서가 바뀌면 틀렸다는 사실을 알고 어떻게 해야할 지 고민하다가 결국 평소와 다름없이 반복문을 통해
    하나하나 비교하는 방법으로 해결했다. sort를 이용해서 하는 게 있을 것 같은데..흠

    Runtime: 108 ms, faster than 5.76% of JavaScript online submissions for Is Subsequence.
    Memory Usage: 38.6 MB, less than 6.88% of JavaScript online submissions for Is Subsequence.
