# Date: 2020-09-01 Tue
# Comment: from itertools import permutations
# 위의 툴을 알면 순열, 조합 등을 편하게 생성할 수 있다


import sys

N, M = list(map(int, sys.stdin.readline().strip().split(" ")))
nums = list(sorted(map(int, sys.stdin.readline().strip().split(" "))))

# print(N, M)
# print(nums)

answer = [0] * M
isused = [False] * N
# print(answer)


def rec(lev):
    if lev == M:
        print(*answer)
        return

    for i in range(0, N):
        if isused[i]:
            continue

        answer[lev] = nums[i]
        isused[i] = True
        rec(lev+1)
        isused[i] = False


rec(0)
