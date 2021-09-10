# <Longest Common Prefix>

1. 이해

   Write a function to find the longest common prefix string amongst an array of strings.
   If there is no common prefix, return an empty string "".

2. 계획

   1. 첫번째 문자를 반복문으로 돌리면서 다른 글자들과 하나씩 비교한다.
   2. 같으면 배열에 넣고 return 한다.

3. 실행

---

4. 회고

   같은 부분을 배열에 넣으면 되는 줄 알았는데 다른 부분을 slice 를 이용해 잘라내야 하는 것이었다.
   input 이 [""] 일 때, 제일 상단에 예외처리만 해주면 되는 줄 알았는데 마지막에 return strs[0] 을 넣어주어야 했다.
