# Date: 2020-09-03 Thu 21:27
# 3rd try: 38m 51s >> 통과
# Comments
# 1. 처음에는 아무 생각없이 플로이드 알고리즘으로 풀었는데, 메모리 초과가 발생하였다. V가 2만이니 V^2 가 메모리 한도를 넘어선 것이었다.
# 2. 문제를 보니 하나의 시작점에서의 거리만 묻고 있으니, 이는 다익스트라 알고리즘으로 푸는 것이 효율적일 것이다!
# 3. python에서는 heap 사용하려면 heapq library를 사용하면 된다


import sys
import heapq

V, E = map(int, sys.stdin.readline().strip().split())
K = int(sys.stdin.readline().strip())
adj = [[] for _ in range(V+1)]

for line in map(str.split, sys.stdin.readlines()):
    u, v, w = map(int, line)
    adj[u].append((v, w))
    # adj[v].append((u,w))

# print(*enumerate(adj), sep="\n")

dist = [float('inf') for _ in range(V+1)]
# print(dist)
dist[K] = 0

h = []
heapq.heappush(h, (0, K))

while h:
    w, v = heapq.heappop(h)

    if dist[v] == w:
        for nv, nw in adj[v]:
            if dist[nv] > nw+w:
                dist[nv] = nw+w
                heapq.heappush(h, (nw+w, nv))


print('\n'.join(map(lambda x : str(x) if x != float('inf') else "INF", dist[1:])))
