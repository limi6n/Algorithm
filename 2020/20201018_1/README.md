# <Valid Anagram>

## 1. 이해

    문자 s와 t가 주어질 때, t가 s의 anagram 인지 판단하기
    anagram : 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이

## 2. 계획

    s와 t를 둘다 오름차순 또는 내림차순으로 정렬하여 같은 지 판단

## 3. 실행 

## 4. 회고

    비교하는 과정에서 filter, includes 나 splice 를 사용해서 해보려고 했는데 문자가 겹친 경우에 생각처럼 되지 않아서
    for문을 이용해서 하나하나 비교하는 방식으로 결국 바꿨다. 그래서 속도가 잘 안나온건가 싶기도하고..

    Runtime: 108 ms, faster than 42.82% of JavaScript online submissions for Valid Anagram.
    Memory Usage: 46.5 MB, less than 12.65% of JavaScript online submissions for Valid Anagram.
