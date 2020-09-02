# Date: 2020-09-02 Wed 18:52
# Comment: 의잉?!  Best Solution을 보고 든 생각. python의 built-in function은 어마어마하구나..
# Best Solution: https://www.acmicpc.net/source/4380386

import sys

S, T = [s.strip() for s in sys.stdin.readlines()]

# print(S, T)


def match(S, T):
    count = 0

    while True:
        i = S.find(T)
        if (i == -1):
            break
        else:
            count += 1
            S = S[i+len(T):]

    return count


print(match(S, T))
