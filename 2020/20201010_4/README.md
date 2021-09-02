# <Next Greater Element I>

## 1. 이해

    두 배열(num1, num2)이 주어질 때, num1 요소보다 더 큰 num2 요소들 찾기.
    오른쪽에서 가장 첫번째로 있는 큰 수를 반환해야 하며, 없을 경우 -1 반환하기.

## 2. 계획

    num1로 반복문을 돌리면서 num2 의 요소들을 함께 순회하면서 숫자를 찾는 방식으로 진행

## 3. 실행

## 4. 회고

    nums1 요소보다 더 큰 숫자가 nums2에 있으면 순간 break 하고 nums2.shift를 통해 nums2 배열을 하나씩 줄이는 형식으로 갔는데,
    예시가 자꾸 틀렸다고 하는데 문제 자체를 잘 못 이해한것 같다. 분명히 오른쪽보다 더 큰 요소가 있으면 나오는 건데 있는데 왜 -1인가..

    Runtime: 84 ms, faster than 63.18% of JavaScript online submissions for Next Greater Element I.
    Memory Usage: 40.9 MB, less than 8.60% of JavaScript online submissions for Next Greater Element I.
