# <키패드 누르기>

## 1. 이해

    맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작.

    <규칙>
     - 엄지 손가락은 상하좌우 4가지 방향으로만 이동. 키패드 이동 한 칸은 거리로 1에 해당.
     - 왼쪽 열의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용.
     - 오른쪽 열의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용.
     - 가운데 2, 5, 8, 0을 입력할 때는 왼쪽, 오른쪽 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용.
       만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용.

    오른손잡이인지 왼손잡이인지는 문자열 hand가 매개변수로 주어짐.
    각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 리턴하기.

## 2. 계획

    번호가 담긴 배열의 number의 length 만큼 반복문을 돌리면서 if else 로 경우의 수를 작성을 해 본 후, 간단히 할 수 있는 부분은 수정

## 3. 실행

## 4. 회고

    if else 로 매번 경우의 수를 만들어주면 되지 않을까 생각했다가 2, 5, 8, 0 부분에서 이런 식으로 경우의 수를 찾아가는 건 너무 비효율적인 것 같아
    결국 풀이를 찾아봤는데, 접근 자체를 잘 못했었다. 2차원 배열 형태로 좌표를 미리 만들어두고 숫자별로 눌러야하는 위치와 거리를 계산해야하는 문제였다.
    풀이를 찾아 이해하는 데 더 중점을 두기로했다. 다음에 이런식의 2차원 배열이 나온다면 맞출 수 있겠지..

### 출처 : 2020 카카오 인턴십