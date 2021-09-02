# <Implement Stack using Queues>

## 1. 이해

    Implement a last in first out (LIFO) stack using only two queues.
    The implemented stack should support all the functions of a normal queue (push, top, pop, and empty).

## 2. 계획

    push가 실행 될 때마다 기존 큐에서 임시 큐로 모든 데이터를 옮긴 후 push 가 실행되고 다시 임시 큐에서 기존 큐로 데이터를 옮긴다.
    pop 이나 top은 기존 큐에서 실행되도록 한다.

## 3. 실행 

## 4. 회고

    2개의 스택으로 큐 구현하기를 바탕으로 이번 코드도 구현해보았다.
    큐는 스택보다 더 생소해서 마지막에 shift 를 써야하는 부분에서 혼자 pop을 쓰고 에러난다고 안된다고 하고있었다..
    마지막에 top을 위해 제일 첫번째 인자를 불러오기를 했는데 더 좋은 방법이 뭐가 있을까?

    Runtime: 76 ms, faster than 55.04% of JavaScript online submissions for Implement Stack using Queues.
    Memory Usage: 38.9 MB, less than 8.63% of JavaScript online submissions for Implement Stack using Queues.
