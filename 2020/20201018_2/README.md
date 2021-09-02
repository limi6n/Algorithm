# <Intersection of Two Arrays>

## 1. 이해

    두개의 배열이 주어지면 겹치는 숫자 반환하기.

## 2. 계획

    indexOf 를 통해 해당되는 숫자가 있으면 배열에 넣어주고 반환한다.

## 3. 실행 

## 4. 회고

    indexOf를 통해 겹치는 숫자를 배열에 담았을 때 배열 안에서 겹치는 숫자들을 제거하기 위한 방법을 찾아보다가 ES6에서 새롭게 나온 data Object Set을 이용하면 된다하여 써보았다. Set은 Unique 값만 저장할 수 있어 중복되는 값이 사라지게 된다고한다.

    Runtime: 80 ms, faster than 66.05% of JavaScript online submissions for Intersection of Two Arrays.
    Memory Usage: 39 MB, less than 14.23% of JavaScript online submissions for Intersection of Two Arrays.
