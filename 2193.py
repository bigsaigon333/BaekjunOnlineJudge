N = int(input().strip())


dp = [[0] * 2 for _ in range(N+2)]

dp[1][1] = 1;
dp[2][0] = 1;

# print(dp)

for i in range(3, N+1) :
  dp[i][0] = dp[i-1][0] + dp[i-1][1]
  dp[i][1] = dp[i-1][0]

# print(dp)
print(sum(dp[N]))