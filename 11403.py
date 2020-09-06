# Date: 2020-09-06 Sun 15:49
# 1st try: 15m 13s >> 통과
# Comment: DFS, BFS 를 통하여 한 node에서 갈 수 있는 모든 node를 파악할 수 있다.
# 최소경로를 찾기 위해서는 플로이드 알고리즘을 사용하면 된다. 시간복잡도는 뭐가 더 나은걸까? 고민 필요

from collections import deque
import sys


N = int(sys.stdin.readline().strip())
adj = [[] for _ in range(N)]
vis = [[0 for _ in range(N)] for _ in range(N)]

for i in range(N):
    adj[i] = list(map(int, sys.stdin.readline().strip().split()))

# print(adj)

s = deque()

for i in range(N):
    s.append(i)
    # vis[i][i] = 1

    while s:
        curr = s.pop()

        for j in range(N):
            if vis[i][j] == 1:
                continue

            if adj[curr][j] == 1:
                vis[i][j] = 1
                s.append(j)


print('\n'.join(' '.join(map(str, line)) for line in vis))
