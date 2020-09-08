import sys
from collections import deque

N, M = map(int, sys.stdin.readline().strip().split())
board = []
for _ in range(N):
    board.append(list(map(int, sys.stdin.readline().strip())))

vis = [[False for _ in range(M)] for _ in range(N)]
dist = [[float('inf') for _ in range(M)] for _ in range(N)]
# print(board)
# print(vis)

q = deque()
q.append((0, 0, True))

d = ((1, 0), (0, 1), (-1, 0), (0, -1))
dist[0][0] = 1
vis[0][0] = True

while q:
    x, y, flag = q.popleft()
    print(x,y)

    for dx, dy in d:
        nx = x + dx
        ny = y + dy
        nflag = flag

        if not((0 <= nx < N) and (0 <= ny < M)) or vis[nx][ny]:
            continue

        if board[nx][ny] == 1:
            if nflag == True:
                nflag = False
            else:
                continue

        vis[nx][ny] = True
        dist[nx][ny] = dist[x][y] + 1
        q.append((nx, ny, nflag))

    print(q)


# print(vis)
ans = -1 if dist[N-1][M-1] == float('inf') else dist[N-1][M-1]
print(ans)
