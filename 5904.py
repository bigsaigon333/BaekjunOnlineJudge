# Date: 2020-09-02 Wed 21:29
# 1st try: 30m 00s >> 틀렸습니다!
# 해답 보고 정리
# 참고: https://gpfatp.blogspot.com/2019/07/boj-5904-moo.html
# 재귀로 구현하긴 하였으나, 핵심은 이분탐색? 의 개념인 것 같다. 아닌가 ? 재귀 인가?
# 재귀 + DP + 이분탐색의 개념 => 아주 훌륭한 문제!!


N = int(input().strip())

MX = 30
dp = [0 for _ in range(MX)]

lev = 0
i = 3
dp[0] = 3

while i <= N:
    lev += 1
    i = i * 2 + lev+3

    dp[lev] = i

# print(dp)


def rec(lev):
    global N
    if lev == 0:
        if N == 1:
            print("m")
        else:
            print("o")
        return

    if N <= dp[lev-1]:
        rec(lev-1)
    elif N <= dp[lev-1]+lev+3:
        if N == dp[lev-1]+1:
            print("m")
        else:
            print("o")
    else:
        N -= dp[lev-1]+lev+3
        rec(lev-1)
rec(lev)