# Date: 2020-09-10 Thu 15:20
# 1st try: 5m 35s >> 통과
# Comment: generator가 익숙하지 않으면 그냥 for문 돌리자


from itertools import permutations
from sys import stdin
from operator import itemgetter

N, M = map(int, stdin.readline().strip().split())
num = map(int, stdin.readline().strip().split())

for x in sorted(set(permutations(num, M)), key=itemgetter(*range(M))):
  print(' '.join(map(str, x)))
