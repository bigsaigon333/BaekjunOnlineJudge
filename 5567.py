# Date: 2020-09-07 Mon 15:44
# 1st try: 14m 38s >> 통과
# Comment: 친구의 친구까지만 ok. BFS 로 dist가 2인것 까지만 찾게끔 구현하였음
# Best Answer: https://www.acmicpc.net/source/17300635 << 문제를 있는 그대로 구현함. 매우 간단하지만 깔끔

import sys
from collections import deque

read = sys.stdin.readline

N = int(read())
M = int(read())

adj = [[] for _ in range(N+1)]

for _ in range(M):
    a, b = map(int, read().split())
    adj[a].append(b)
    adj[b].append(a)

# print(adj)

q = deque()
q.append(1)
vis = [False for _ in range(N+1)]
dist = [-1 for _ in range(N+1)]
vis[1] = True
dist[1] = 0
count = 0

while q:
    curr = q.popleft()

    for nxt in adj[curr]:
        if vis[nxt]:
            continue

        dist[nxt] = dist[curr] + 1
        vis[nxt] = True
        count += 1

        if dist[nxt] < 2:
            q.append(nxt)

    # print(dist)

print(count)
