# <Remove Duplicates from Sorted Array>

1. 이해

   Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

   Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

   Return k after placing the final result in the first k slots of nums.

   Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

2. 계획

   Set을 이용하여 중복제거한다.

3. 실행

4. 회고

   처음에 Set 만 사용하면 되는 줄 알았는데, 결국 또 저번 문제와 비슷한 에러가 떴다. 해결방법을 찾아보다가 나와 비슷한 이유로 질문을 한 글을 보았는데,
   "Path should be same as before, so you should change array but do not change the path." 라는 대답이 있었다.
   메모리와 경로 문제라는 건데..
   Set 을 쓴다는 거 자체가 문제의 의도와 다르다는 얘기들이 많았다. 다시 공부해볼 것!
