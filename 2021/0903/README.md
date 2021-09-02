# <Reverse Integer> 

1. 이해

---

    Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

2. 계획

---

    1. 정수를 한글자씩 쪼개서 배열에 넣는다.
    2. reverse() 함수를 이용하여 뒤집는다.
    3. 다시 붙인다.

3. 실행

---

4. 회고

---

    오랜만에 풀어서 간단한 문제인데도 버벅였다. 
    - 일단 파라미터를 정수로 받아오는데, 정수를 그냥 자를 수 있다고 생각한 것 부터 오류였고 toString()을 통해 문자열로 변환해주었다.
    - 2^31 - 1과 2^31은 Math.pow()를 쓰는 것보다 실제 숫자를 쓰는 것이 훨씬 빠르다고 해서 숫자로 직접 썼다.
    - 파라미터로 받은 정수만 체크하면 된다고 생각했는데, 자꾸 에러가 떴고 문제를 다시 읽고 생각해보니 뒤바뀐 숫자도 범위 32bit 체크를 해주어야 했다. 
