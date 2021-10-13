# <Remove Element>

1. 이해

   Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

   Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

   Return k after placing the final result in the first k slots of nums.

   Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

   => nums 배열에서 val에 해당하는 숫자를 '\_' 로 처리하고, '\_'이 시작하는 인덱스 시작 값 리턴하기

2. 계획

   배열을 순회하면서 val 에 해당하는 숫자를 _ 로 치환한다.
   sort 하여 _ 이 시작되는 인덱스 값을 반환한다.

3. 실행

4. 회고

   예시가 `Output: 2, nums = [2,2,_,_]` 이런식으로 나와있어서 인덱스 값을 리턴해야 하는 줄 알았는데 아직 왜 nums.length 를 반환해야 하는지 이해하지 못했다.. 배열 요소를 삭제하는 방법에는 splice(i, 1) 과 같은 방법이나 filter 를 써도 된다고 해서 filter 를 써봤는데 splice(i, 1) 과 다른 결과값이 나와서 왜 그런지도 사실 이해하지 못했다..
   알고리즘 사이트에서는 return 이 [2,2] 가 맞았는데, 역시나 자체 테스트에서는 length 이기 때문에 2가 반환되어야 test가 맞다고 뜬다. 사이트에서는 어떤식으로 반환되는거지..?
