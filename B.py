import sys

N, M = map(int, sys.stdin.readline().strip().split())

d = {}
for _ in range(N) :
  value, key = sys.stdin.readline().strip().split()
  key = int(key)

  if not key in d :
    d[key] = value
# print(d)

MX = 10**9+5
nums = [0]  * MX

for _ in range(M) :
  nums[int(sys.stdin.readline().strip())] += 1
# print(nums)

idx = 0
rank = list(d.items());
# print(rank[1][0])
for i in range(1,MX+1) :
  if nums[i] > rank[idx][0] :
    idx += 1

  print(rank[idx][1])



  
