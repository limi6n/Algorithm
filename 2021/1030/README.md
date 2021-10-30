# <Search Insert Position>

1. 이해

   Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

   You must write an algorithm with O(log n) runtime complexity.

2. 계획

   반복문을 통해 target 이 존재하면 index 값을 없으면 target을 push 한 뒤 다시 sort 한다.

3. 실행

4. 회고

   O(log n) 을 반드시 써라고 했기 때문에 사실 계획은 틀린 답변이다.. O(log n)은 시간 복잡도 중 이진 검색 알고리즘을 뜻하는 것이라고 한다.
   문제는 아래 코드와 같이 while 문 대신 함수를 따로 만들어서 재귀 형태로 했는데, 사실 아직 해당되지 않는 숫자가 추가되고 나서 index가 제대로 나오는 건 완전히 이해하지 못했다.

   ```javascript
   /* 이진 검색 알고리즘(binary search algorithm)은 오름차순으로 정렬된 리스트에서 특정한 값의 위치를 찾는 알고리즘이다. 처음 중간의 값을 임의의 값으로 선택하여, 그 값과 찾고자 하는 값의 크고 작음을 비교하는 방식을 채택하고 있다. 처음 선택한 중앙값이 만약 찾는 값보다 크면 그 값은 새로운 최댓값이 되며, 작으면 그 값은 새로운 최솟값이 된다. 검색 원리상 정렬된 리스트에만 사용할 수 있다는 단점이 있지만, 검색이 반복될 때마다 목표값을 찾을 확률은 두 배가 되므로 속도가 빠르다는 장점이 있다. */

   function binarySearch(target, dataArr) {
     let low = 0;
     let high = dataArr.length - 1;

     while (low <= high) {
       let mid = Math.floor((high + low) / 2);

       if (dataArr[mid] === target) {
         return dataArr[mid];
       } else if (dataArr[mid] > target) {
         high = mid - 1;
       } else {
         low = mid + 1;
       }
     }
     return undefined;
   }
   ```
