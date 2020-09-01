# Date: 2020-09-01 Tue
# 1st try: 30m 03s >> 통과
# Comment: 기본에 충실한 구현. DFS는 stack으로 구현할때와 재귀일때 살짝 다르다.
# 비재귀 방식 DFS에서 스택에 넣을때가 아닌, 스택에서 뽑았을때 isused = True로 두면, 재귀DFS와 같아진다(고 한다)
# https://blog.encrypted.gg/908?category=773649 56,57,58번 슬라이드 참조
# Best Answer: https://www.acmicpc.net/source/12580200     구현 방법 말고 구현 스타일을 참고하자
# Second Best Answer: https://www.acmicpc.net/source/14674615

import sys
from collections import deque

N, M, V = list(map(int, sys.stdin.readline().split()))

adj = [[] for _ in range(N+1)]

for line in sys.stdin.readlines():
    v1, v2 = list(map(int, line.split()))
    adj[v1].append(v2)
    adj[v2].append(v1)

for i in range(1, N+1):
    adj[i].sort()


# print(adj)
isused = [False for _ in range(N+1)]
isused[V] = True
dfs_ans = []


def dfs(pos):
    dfs_ans.append(pos)

    for nxt in adj[pos]:
        if isused[nxt]:
            continue
        isused[nxt] = True
        dfs(nxt)


dfs(V)
print(*dfs_ans)

# BFS

q = deque()
q.append(V)
isused = [False for _ in range(N+1)]
isused[V] = True
bfs_ans = []

while(q) :
  curr = q.popleft()
  bfs_ans.append(curr)

  for nxt in adj[curr] :
    if isused[nxt] :
      continue

    isused[nxt] = True
    q.append(nxt)

print(*bfs_ans)
    

