# Date: 2020-09-02 Wed 20:00
# 1st try: 33m 55s >> 통과
# Comment: 어떻게 문제를 풀지는 금방 감을 잡았다. 다만, python3 구현이 익숙하지 않아 시간이 오래 걸렸다

from itertools import permutations,combinations, product

import sys

L, C = map(int, sys.stdin.readline().strip().split())

ch = sys.stdin.readline().strip().split()

v = sorted(filter(lambda c: c in "aeiou", ch))

c = sorted(filter(lambda c: c not in v, ch))

# print(v)
# print(c)
ans = []
for nv in range(1, L-1):
  nc = L - nv
  # print(nv, nc)

  cv = combinations(v, r=nv)
  cc = combinations(c, r=nc)
  # print(*cv)
  # print(*cc)
  # print(*product(cv,cc))
  

  ans += [''.join(sorted(a+b)) for a,b in product(cv, cc)]
  # print(ans)
  # print()
    

print (*sorted(ans), sep="\n")
  
# print(*sorted(ans, key=str), sep="\n")