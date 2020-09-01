# Date: 2020-09-01 Tue
# 1st try: 6m 12s >> 통과
# Comment: 음??!!  library 찾아보자
# import math >> math.comb(n,k)


N, K = map(int, input().split())

# print (N, K)

ans = 1
for i in range(K):
    ans = (ans * (N-i)) // (i+1)

print(ans)
