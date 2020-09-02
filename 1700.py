
# Date: 2020-09-02 Wed
# Comment: 그리디인걸 알면 뭐하나? 뭐가 최선의 방법인지 제대로 생각을 못해내면 말짱 꽝인 것을..

import sys

N, K = map(int, sys.stdin.readline().strip().split(" "))

nums = [int(n) for n in sys.stdin.readline().strip().split(" ")]
# print(nums)


occupied = []
count = 0

for i in range(len(nums)):
    num = nums[i]

    if num in occupied:
        continue

    if len(occupied) < N:
        occupied.append(num)
        # print(occupied)
        continue

    def cmp(x):
        try:
            return nums[i:].index(x)
        except:
            return len(nums)

    mx = max(occupied, key=cmp)
    idx = occupied.index(mx)
    # print(occupied, idx, mx)
    # print(f"{idx}: {mx}")
    occupied[idx] = num
    count += 1
    # print(occupied)

print(count)
