import sys


V, E = map(int, sys.stdin.readline().strip().split())

K = int(sys.stdin.readline().strip())

adj = [[] for _ in range(V+1)]

for line in map(str.split, sys.stdin.readlines()):
    u,v,w = map(int, line)
    adj[u].append((v,w))
    # adj[v].append((u,w))

# print(*enumerate(adj), sep="\n")

dist = [[float('inf') for _ in range(V+1)] for _ in range(V+1)]

for i in range(1, len(adj)) :
  dist[i][i] = 0

for i in range(1, len(adj)) :
  for v, w in adj[i] :
    dist[i][v] = min(dist[i][v], w)


for k in range(1, len(adj)):
  for i in range(1, len(adj)):
    for j in range(1, len(adj)):
      if i == j:
        continue
      dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])


# print(*dist, sep="\n")


print('\n'.join(map(lambda x : "INF" if x == float('inf') else str(x), dist[K][1:])))
  
