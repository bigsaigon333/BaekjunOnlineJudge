# Date: 2020-09-06 Sun 15:12
# 1st try : 26m 59s >> 통과
# Comment: 무엇을 묻고 있는 문제인지 파악하는게 제일 중요하다. \
# 문제에서 원소 간의 선후 관계가 주어지고 순서를 정해야 하는 상황 (답이 하나가 아니라고 말하는 경우가 많음)>> 위상정렬!!
# 시간복잡도는 O(V+E)
# Best Answer: https://www.acmicpc.net/source/13155853 // indegree가 0이 되는 순간은 1번 뿐이며, q에도 들어가는 경우도 1번뿐이므로 vis 체크 불필요

from collections import deque

import sys

N, M = map(int, sys.stdin.readline().split())

adj = [[] for _ in range(N+1)]
ind = [0 for _ in range(N+1)]


for _ in range(M):
    order = list(map(int, sys.stdin.readline().split()[1:]))

    curr = order[0]
    for nxt in order[1:]:
        adj[curr].append(nxt)
        ind[nxt] += 1
        curr = nxt

q = deque()

for i in range(1, N+1):
    if ind[i] == 0:
        q.append(i)


ans = []
while q:
    curr = q.popleft()
    ans.append(curr)

    while adj[curr]:
        nxt = adj[curr].pop()
        ind[nxt] -= 1
        if ind[nxt] == 0:
            q.append(nxt)

if len(ans) == N:
    print('\n'.join(map(str, ans)))
else:
    print(0)
