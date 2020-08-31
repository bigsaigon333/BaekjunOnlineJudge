# Date: 2020-08-31 Mon 21:47
# 1st try: 1h 8m 31s
# Comment: 언어에 대한 확신이 없으니까, 사소한 문법이 틀린게 아닌지 계속 찾게 된다
# runtime-error가 발생하였는데, 이는 group 개수가 N개가 넘을때를 고려하지 않고 배열을 선언하여서이다.
# intput, output을 잘 확인하자. 이번 문제에서는 각 그룹에 번호를 부여할 필요가 전혀 없었다. 그냥 갯수만 세면 되는 문제였다
# 필요한 것만 구현하자

import sys
from collections import deque


def print_table(nums):
    for _ in range(N):
        print(nums[_])
    print()


N = int(sys.stdin.readline())
board = [[0 for _ in range(N)] for _ in range(N)]
vis = [[False for _ in range(N)] for _ in range(N)]
group = []
q = deque()


for i in range(N):
    board[i] = list(map(int, (c for c in sys.stdin.readline().strip())))


dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
count = 0


for i in range(N):
    for j in range(N):
        if board[i][j] == 1 and not vis[i][j]:
            q.append((i, j))
            # print(f"{i} {j} is added")
            vis[i][j] = True
            count = 1

            while(q):
                x, y = q.popleft()
                # print(f"{x} {y}")

                for k in range(4):
                    nx = x + dx[k]
                    ny = y + dy[k]
                    # print(f"nx: {nx} ny: {ny}")

                    if nx < 0 or nx >= N or ny < 0 or ny >= N:
                        continue

                    if vis[nx][ny] or board[nx][ny] == 0:
                        continue

                    vis[nx][ny] = True
                    q.append((nx, ny))
                    count += 1
                    # print(f"{nx} {ny} is added")

                # print(q)

            # print_table(group)
            group.append(count)


# print(num_group)

print(len(group))

print(*sorted(group), sep="\n")
