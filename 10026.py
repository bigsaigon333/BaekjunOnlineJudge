# Date: 2020-09-06 Sun 16:56
# 1st try: 13m 28s >> 통과
# Comment: 전형적인 BFS 


import sys
from collections import deque

N = int(sys.stdin.readline())

bh = []
bc = []

for _ in range(N) :
  line = [c for c in sys.stdin.readline().strip()]

  bh.append(line)
  bc.append(list(map(lambda c : "R" if c == "G" else c, line)))

# print(bh)
# print(bc)

def bfs(board) :
  vis = [[False for _ in range(N)] for _ in range(N)]
  count = 0

  q = deque()
  d = [(1,0), (0,1), (-1,0), (0,-1)]

  for i in range(N) :
    for j in range(N) :
      if vis[i][j] : 
        continue

      count+= 1
      vis[i][j] = True
      color = board[i][j]
      q.append((i,j))
          

      while q :
        x, y = q.popleft()

        for dx, dy in d :
          nx = x + dx
          ny = y + dy

          if nx < 0 or nx >= N or ny < 0 or ny >= N :
            continue

          if vis[nx][ny] or board[nx][ny] != color:
            continue

          vis[nx][ny] = True
          q.append((nx,ny))

  return count

print(bfs(bh), bfs(bc))

