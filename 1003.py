# Date: 2020-09-01 Tue 21:12
# 1st try: 20m 30s >> 통과
# Comments
# 1. n = 0, n = MX 등 edge한 입력에 대한 출력은 항상 테스트시에 확인하자. 안그러면 runtime error가 발생할 확률이 높아진다
# 2. DP는 점화식이라는 걸 잊지말자! dp[i] = f(dp[i-1]) ...

import sys

T = int(sys.stdin.readline().strip())
nums = list(map(int, sys.stdin.readlines()))

MX = max(nums)+ 2
dp = [[0 for _ in range(2)] for _ in range(MX)]
dp[0][0] = 1
dp[1][1] = 1

# print(dp)

for i in range(2, MX):
    dp[i][0] = dp[i-1][0] + dp[i-2][0]
    dp[i][1] = dp[i-1][1] + dp[i-2][1]

for num in nums:
    print(dp[num][0], dp[num][1])
