# Date: 2020-09-01 Tue
# Comment: ' '.join 을 쓰려니, nums 의 요소가 str이어야 한다. 그냥 for문 돌릴까?

import sys
from itertools import permutations, product

N, M = list(map(int, sys.stdin.readline().strip().split(" ")))

nums = sorted(map(int, sys.stdin.readline().strip().split(" ")))
nums = map(str, nums)


print(*map(' '.join, product(nums, repeat=M)), sep="\n")


