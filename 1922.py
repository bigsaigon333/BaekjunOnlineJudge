# Date: 2020-09-04 Fri 18:21
# 1st try: 24m 25s >> 통과
# Comment: 어떤 그래프 이론을 적용할지를 빨리 파악하는게 중요하다. 최소 신장 트리 문제여서, 크루스칼 알고리즘으로 품. 
# Best Answer: https://www.acmicpc.net/source/16261697  >> Union-find 알고리즘 공부하자

import heapq

N = int(input())
M = int(input())

h = []

for _ in range(M):
    a, b, c = map(int, input().split())
    if a == b:
        continue

    if a > b:
        a, b = b, a

    heapq.heappush(h, (c, a, b))

# print(h)

g = [i for i in range(N+1)]
total = 0

while True:
    tmp = g[1]
    for i in range(1, N+1):
        if tmp != g[i]:
            break
    else:
        break

    c, a, b = heapq.heappop(h)

    if g[a] != g[b]:
        total += c

        tmp = g[a]

        for i in range(1, N+1):
            if g[i] == tmp:
                g[i] = g[b]


print(total)
