# <Climbing Stairs>

1. 이해

   You are climbing a staircase. It takes n steps to reach the top.
   Each time you can either climb 1 or 2 steps. In _how many distinct ways_ can you climb to the top?

   - Constraints : 1<= n <= 45

2. 계획

   경우의 수를 손으로 풀어보면서 규칙을 구한다.
   f(n) = f(n-1) + f(n-2) , n >= 3 일 때라는 규칙이 나오므로 반복문을 이용하여 구할 수 있도록 한다.

3. 실행

4. 회고

   규칙은 알겠는데, 다들 어떻게 그렇게 간단하게 짤 수 있지..?
