# Date: 2020-09-01 Tue

N, M = list(map(int, input().strip().split(" ")))

# print(N, M)

ret = [0 for _ in range(0, M)]


def rec(lev):
    if lev == M:
        print(*ret)
        return

    for i in range(1, N+1):
        ret[lev] = i
        rec(lev+1)


rec(0)
