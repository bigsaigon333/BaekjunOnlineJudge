# Date: 2020-09-12 Sat 00:30
# 1st try: 1h 06m 06s >> 통과
# Comment: 문제를 읽고 최소신장트리 문제라는건 깨달았다. 하지만 방법이 바로 떠오르지 않았다. 크루스칼 알고리즘과 프림 알고리즘..
# 프림 알고리즘으로 풀어보았다. 분명 잘 한것 같은데 계속 50%에서 통과가 안되어서 질문검색을 해보니, 
# 입력이 여럿 케이스로 구성되어 있던 것이다.. 하... 나름 문제를 꼼꼼히 읽었다고 생각했지만 절대 못보고 넘어간 것이었다..

# Best Answer: https://www.acmicpc.net/source/10978661 >> 깔끔한 크루스칼 알고리즘 구현

from sys import stdin
import heapq
from collections import deque


def sol():
    M, N = map(int, stdin.readline().strip().split())
    if M == 0 and N == 0 :
        return False

    adj = [[] for _ in range(M)]
    vis = [False for _ in range(M)]

    cost = 0
    for _ in range(N):
        x, y, z = map(int, stdin.readline().strip().split())

        adj[x].append((z, y))
        adj[y].append((z, x))

        cost += z

    h = []
    for z, nxt in adj[0]:
        heapq.heappush(h, (z, 0, nxt))

    vis[0] = True
    count = 0
    while count < M-1:

        z, curr, nxt = heapq.heappop(h)
        if vis[nxt]:
            continue

        count += 1
        cost -= z
        vis[nxt] = True
        # print(curr, nxt, z)
        # print(vis)

        for (nz, nnxt) in adj[nxt]:
            if not vis[nnxt]:
                heapq.heappush(h, (nz, nxt, nnxt))

    print(cost)
    return True

while True:
    if not sol():
        exit()
