N = int(input())

board = [[0 for x in range(0, N)] for y in range(0, N)]

for i in range(N):
    board[i] = list(map(int, [c for c in input().strip()]))

# print(board)


def rec(x, y, lev):

    if lev == 0:
        return

    flag = False 
    tmp = board[x][y]

    for i in range(lev):
        for j in range(lev):
            if board[x+i][y+j] != tmp:
                flag = True
                break

        if flag:
            break

    if flag:
        print("(", end="")

        half = lev//2

        rec(x, y, half)
        rec(x, y+half, half)
        rec(x+half, y, half)
        rec(x+half, y+half, half)
        print(")", end="")
    else:
        print(tmp, end="")


rec(0, 0, N)
