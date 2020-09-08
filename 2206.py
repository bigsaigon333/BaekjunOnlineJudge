# Date: 2020-09-08 Tue 13:53
# 1st try: 49m 16s >> 실패
# 2nd try: 구글링 후 통과
# Comments
# 1. 한 노드는 '벽을 부수고 온 경우' '벽을 부수지 않고 온 경우' 최대 2번 방문 가능하다
# 2. 따라서, vis 배열은 [N][M][flag]의 3차원 배열으로 구성한다. 2차원 배열으로 구성할 경우, 벽을 부수고 온 경우와 벽을 부수지 않고 온 경우의 구분이 되지 않는다.

import sys
from collections import deque

N, M = map(int, sys.stdin.readline().strip().split())
board = []
for _ in range(N):
    board.append(list(map(int, sys.stdin.readline().strip())))

vis = [[[False for _ in range(2)] for _ in range(M)] for _ in range(N)]
dist = [[[float('inf') for _ in range(2)] for _ in range(M)] for _ in range(N)]
# print(dist)
# print(board)
# print(vis)

q = deque()
q.append((0, 0, 0))

d = ((1, 0), (0, 1), (-1, 0), (0, -1))
dist[0][0][0] = 1
vis[0][0][0] = True

while q:
    x, y, flag = q.popleft()
    # print(x, y, flag)

    for dx, dy in d:
        nx = x + dx
        ny = y + dy

        if not((0 <= nx < N) and (0 <= ny < M)):
            continue

        if board[nx][ny] == 1:
            if flag == 0 and not vis[nx][ny][1]:
                vis[nx][ny][1] = True
                dist[nx][ny][1] = dist[x][y][0] + 1
                q.append((nx, ny, 1))

            else:
                continue

        elif not vis[nx][ny][flag]:
            vis[nx][ny][flag] = True
            dist[nx][ny][flag] = dist[x][y][flag] + 1
            q.append((nx, ny, flag))

    # print(q)


# print(*dist, sep="\n")
ans = -1 if min(dist[N-1][M-1]) == float('inf') else min(dist[N-1][M-1])
print(ans)
