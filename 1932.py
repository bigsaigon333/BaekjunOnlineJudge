# Date: 2020-09-11 Fri 23:21
# 1st try: 10m 56s >> 통과
# Comment: 전형적인 DP. deepcopy와 shallow copy 에 대한 좋은 공부가 되었다.
# copy.deepcopy 를 하더라도 모든 object가 완벽하게 deep copy 되는 것은 아니다.  
# https://stackoverflow.com/questions/17873384/how-to-deep-copy-a-list >> 원본의 두 요소가 동일한 object를 reference하고 있다면
# deepcopy 해도 새로운 하나의 object 생성후 두 요소가 동일한 object를 가리키게 된다

# Best Answer: https://www.acmicpc.net/source/15481495 >> zip 의 좋은 쓰임

from sys import stdin
import copy

N = int(stdin.readline().strip())

dp = [0] * N

for i in range(1, N+1):
    num = list(map(int, stdin.readline().strip().split()))

    for j in range(len(num)):
        if j == 0:
            num[j] += dp[j]
        elif j == len(num)-1:
            num[j] += dp[j-1]
        else:
            num[j] += max(dp[j-1], dp[j])
    dp = copy.deepcopy(num)
  

print(max(dp))
