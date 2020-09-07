# Date:2020-09-07 Mon 15:27
# 1st try: 18m 54s >> 통과
# Comment: python 문법 익힌다고 시간이 많이 가버린다... 


import sys
from itertools import combinations
from operator import itemgetter

read = sys.stdin.readline

N, M = map(int, read().split(" "))

nums = sorted(map(int, read().split(" ")))

ans = sorted(set(combinations(nums, M)), key=itemgetter(*range(M)))

print('\n'.join(' '.join(map(str, item)) for item in ans))

