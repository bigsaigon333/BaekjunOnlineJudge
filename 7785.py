# Date: 202-09-06 Sun 16:41
# 1st try : 9m 34s >> 통과
# Comment: dictionary, set 자료구조를 잘 익히자
# Best Answer: https://www.acmicpc.net/source/8219500 >> del . 깔끔하네욤


import sys

N = int(sys.stdin.readline().strip())
d = {}

for _ in range(N):
    name, behave = sys.stdin.readline().strip().split()
    try:
        d[name] += 1
    except:
        d[name] = 1


print('\n'.join(sorted(map(lambda x: x[0], filter(
    lambda item: item[1] % 2 == 1, d.items())), reverse=True)))
