# Date: 2020-09-04 Fri 18:44
# 1st try: 16m 30s  >> 통과
# Comment: Best Answer 와 문제풀이가 동일함에도 python3 으로 제출하였을때 시간초과가 발생한 이유는 입출력때문인 것 같다.
# 입력: sys.stdin.readlin, 출력: sys.stdout.write 를 이용하자
# Best Answer: https://www.acmicpc.net/source/22205104

from collections import deque

N = int(input())

q = deque()

adj = [[] for _ in range(N+1)]
parent = [0] * (N+1)

# print(adj)

for _ in range(N-1) :
  v1,v2 = map(int, input().split())

  adj[v1].append(v2)
  adj[v2].append(v1)

# print(adj)
q.append(1)

while q :
  curr = q.popleft()

  for v in adj[curr] :
    if parent[v] != 0 or v == parent[curr] :
      continue

    parent[v] = curr
    q.append(v)
  

print('\n'.join(map(str, parent[2:])))

