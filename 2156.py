# Date: 2020-09-14 Mon 23:09
# 1st try: 45m 58s >> 통과
# Comment: DP를 잘 알고 있다고 생각했으나 전혀...  DP는 부분해를 구해가며 전체해를 찾아가는 것. 점화식을 잘 찾아야 하는데 쉽지 않네..
# Best Answer: https://www.acmicpc.net/source/16367968 >> 파이썬 DP 풀이를 보면 유달리 이러한 풀이가 많이 보인다. 아직 이해하기가 쉽진 않은데.. 깔끔해 보이긴 하네


import sys
from itertools import combinations

n = int(sys.stdin.readline().strip())

dp = [0 for _ in range(n)]

wine = list(map(int, sys.stdin.readlines()))

if n == 1 or n == 2:
    print(sum(wine))
    exit()

dp[0] = wine[0]
dp[1] = wine[0] + wine[1]
dp[2] = max(dp[1], wine[0]+wine[2], wine[1]+wine[2])


for i in range(3, n):
    dp[i] = max(dp[i-1], dp[i-2]+wine[i], dp[i-3] + wine[i-1] + wine[i])


# print(dp)
print(dp[n-1])
