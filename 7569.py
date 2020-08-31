""" 
Date: 2020-08-30 Sun
1st try: 1h 30m 18s >> 통과
Comment: 런타임 에러, 시간 초과 등으로 당황했다.
런타임 에러는 Z가 들어가야 할 곳에 X를 넣어서 발생한 것이었다. 휴
시간 초과는 input() 사용때문이었던 것 같다. pypy3 로 통과하긴 하였다.
아래와 같이 주의점 기재

- Python에서 시간초과가 나지 않기 위해 주의해야 할 점- 
1. input() 말고 sys.stdin.readline() 으로 한 줄의 문자열을 받아오자 (import sys 필수)
2. queue, stack, deque 는 deque 를 사용하자. deque 사용시 O(1) 으로, 입출력 가능. (list 사용 금지: https://wiki.python.org/moin/TimeComplexity
) 
3. 재귀함수의 경우, 최대 깊이를 설정하자(파이썬의 재귀 깊이는 기본적으로 최대 1,000)
    import sys 
    sys.setrecursionlimit(10**8) # 10^8 까지 늘림.
4. int(a/b) 보다 a//b 를 사용하자.
5. BFS에서는 큐에 넣을때 방문체크를 하자(큐에서 뺀 다음에 방문체크X)
5. 이렇게 해도 정답이 안뜨는 경우, 언어를 pypy3 로 변경
※ PyPy에서는 sys.setrecursionlimit(10**8) 이 안먹는다. 즉 임의로 재귀 호출 깊이를 설정할 수 없다는 것에 주의

6. 파이썬(Python) Tips and Tricks
https://deepwelloper.tistory.com/69
https://deepwelloper.tistory.com/87

 """
from collections import deque

Z, Y, X = map(int, input().split())

board = [[[0 for x in range(Z)] for x in range(Y)] for x in range(X)]
for i in range(X):
    for j in range(Y):
        board[i][j] = list(map(int, input().split()))


vis = [[[False for x in range(Z)] for x in range(Y)] for x in range(X)]
dist = [[[-1 for x in range(Z)] for x in range(Y)] for x in range(X)]
q = deque()

dx = [1, 0, 0, -1, 0, 0]
dy = [0, 1, 0, 0, -1, 0]
dz = [0, 0, 1, 0, 0, -1]


for i in range(X):
    for j in range(Y):
        for k in range(Z):
            if board[i][j][k] == 1:
                q.append((i, j, k))
                vis[i][j][k] = True
                dist[i][j][k] = 0

# print(dist)

while len(q) > 0:
    x, y, z = q.popleft()
    # print(curr)

    for i in range(len(dx)):
        nx = x + dx[i]
        ny = y + dy[i]
        nz = z + dz[i]
        if nx < 0 or nx >= X or ny < 0 or ny >= Y or nz < 0 or nz >= Z:
            continue

        if vis[nx][ny][nz] or board[nx][ny][nz] == -1:
            continue

        vis[nx][ny][nz] = True
        dist[nx][ny][nz] = dist[x][y][z] + 1
        q.append((nx, ny, nz))


max = -1
for i in range(X):
    for j in range(Y):
        for k in range(Z):
            if board[i][j][k] == -1:
                continue

            if dist[i][j][k] == -1:
                print(-1)
                exit()

            if dist[i][j][k] > max:
                max = dist[i][j][k]
print(max)
