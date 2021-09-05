# <Roman to Integer>

1. 이해

   Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
   주어진 정수를 Roman symbols로 표현하기

   - Roman numerals are usually written largest to smallest from left to right.
   - There are six instances where subtraction is used(빼기가 사용되는 6가지 경우):
     - I can be placed before V (5) and X (10) to make 4 and 9.
     - X can be placed before L (50) and C (100) to make 40 and 90.
     - C can be placed before D (500) and M (1000) to make 400 and 900.

2. 계획

   1. 로마 숫자들을 정수와 매칭한 맵을 만든다.
   2. 입력받은 로마숫자를 한글자 씩 정수로 바꾼다.
   3. 정수의 합을 구한다.

3. 실행

---

4. 회고

   map으로 정수를 바꾸고, reduce를 이용하여 정수의 합을 구할 수 있었다. 하지만, 4또는 9가 들어가는 순간 치환한 숫자들을 모두 더하면 에러가 생겼다.
   결국 반복문으로 바로 뒤 로마숫자와 비교하여 더하거나 빼는 분기처리를 해주었고, 다른 사람들 방법 중 reduceRight() 이라는 메서드가 있다는 사실을 알게 되었다.

   ### reduceRight()

   - reduceRight() 메서드는 누적기에 대해 함수를 적용하고 배열의 각 값 (오른쪽에서 왼쪽으로)은 값을 단일 값으로 줄여야합니다.
   - 구문 : `arr.reduceRight(callback[, initialValue])`
   - 매개변수
     - callback : 4 개의 인수를 취하여 배열의 각 값에 대해 실행할 함수입니다.
       - previousValue : 콜백의 마지막 호출에서 이전에 리턴 된 값 또는 제공된 경우
       - currentValue : 배열에서 처리중인 현재 요소입니다.
       - index : 배열에서 처리중인 현재 요소의 인덱스입니다.
       - array : 배열 reduce가 호출되었습니다.
     - initialValue(옵션) : 콜백의 최초의 호출의 최초의 인수로서 사용하는 객체입니다.
   - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
