# <Plus One>

1. 이해

   You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

   Increment the large integer by one and return the resulting array of digits.

2. 계획

   1. 배열로 입력된 각 숫자들을 합쳐 숫자로 변환한다.
   2. 1을 더한다.
   3. 다시 string 으로 변환하면서 배열에 하나씩 넣는다.

3. 실행

4. 회고

   그냥 단순하게 숫자들을 문자로 변환해서 합친 뒤 1을 더하면 된다고 생각했는데, 문자로 변환이 됐음에도 불구하고 1,2,3일 때 내가 원했던 123대신 33이라는 덧셈 결과가 나왔다. 문자열을 뒤집어서 제일 마지막에 1만 더하고 올림 같은 경우를 예외로 두고 코딩하면 된다는데..너무 단순하게 생각했던 것 같다.
