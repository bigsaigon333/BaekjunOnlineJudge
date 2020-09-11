# Date: 2020-09-11 Fri
# 1st try : 2m 50s >> 통과
# Comment: M이 50 이하를 보고 뭐지? 그냥 brute force로 하면 되겠는데? 싶었는데 역시. ㅋㅋㅋㅋ 젤 쉬운 거였다

import sys

M = int(sys.stdin.readline().strip())

ball = 1

for _ in range(M):
    X, Y = map(int, sys.stdin.readline().strip().split())

    if ball == X:
        ball = Y
    elif ball == Y:
        ball = X

print(ball)
