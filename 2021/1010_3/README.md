# <Maximum Subarray>

1. 이해

   Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

   A subarray is a contiguous part of an array.

2. 계획

   Math.max 를 이용하여 순회를 돌면서 가장 큰 값을 찾는다.

3. 실행

4. 회고

   스프레드 연산자를 사용하면 배열의 최대값을 찾을 때 간단하게 구할 수 있지만 배열의 요소가 너무 많은 경우 잘못된 결과를 반환할 수 있다고 한다. 그럴 때는 reduce를 사용하면 배열의 모든 함수요소를 통과하지 않기 때문에 방지할 수 있다고 함!
