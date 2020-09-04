# 11051.py
# Date: 2020-09-04 Fri 14:06
# Comments:
# 1. (N, K) = (N-1, K-1) + (N-1, K)
# 2. Best Answer: https://www.acmicpc.net/source/16246704
#  이게 되는거였어??


N, K = map(int, input().strip().split())
MOD = 10007
K = min(N-K, K)

dp = [[0 for _ in range(K+5)] for _ in range(N+5)]
dp[1][0] = 1
dp[1][1] = 1

for n in range(2, N+1):
  for k in range(0, K+1):
    if k-1 < 0 : # k == 0
      dp[n][k] = dp[n-1][k]  
    else :
      dp[n][k] = (dp[n-1][k-1] + dp[n-1][k]) % MOD


print(dp[N][K])

