# <Valid Parentheses>

1. 이해

   Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

   An input string is valid if:

   1. Open brackets must be closed by the same type of brackets.
   2. Open brackets must be closed in the correct order.

2. 계획

   1. case 문으로 '(', '{', '[' 일 경우를 구분한다.
   2. 각각의 경우에 맞게 stack 에 push 한다.
   3. 하나씩 꺼내서 아닌 경우 false 를 반환한다.

3. 실행

---

4. 회고

   stack 문제인 것을 파악하지 못했다. 다음부터 이런 문제를 보면 stack 문제임을 빨리 알아채기로 하자.
