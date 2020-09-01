# Date: 2020-09-01 Tue

import sys

N, M = list(map(int, sys.stdin.readline().strip().split(" ")))
nums = sorted(list(map(int, sys.stdin.readline().strip().split(" "))))

# print(nums)

isused = [False] * N
answer = [0] * M


def rec(prev, lev):
    if lev == M:
        print(*answer)
        return

    for i in range(prev+1, N):
        if isused[i]:
            continue

        isused[i] = True
        answer[lev] = nums[i]
        rec(i, lev+1)
        isused[i] = False


rec(-1, 0)
