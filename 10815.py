# Date: 2020-09-03 Thu
# 1st try: 14m 43s >> 통과
# Comment: Best Answer를 보니 Set으로 처리했네. Set의 x in s 연산은 average time complexity는 O(1) 이라고 한다.

# Best Answer: https://www.acmicpc.net/source/11588883
# ptyhon data structure time complexity: https://wiki.python.org/moin/TimeComplexity


import sys

N = int(sys.stdin.readline().strip())

MX = 10000000

C = [False  for _ in range(2*MX+5)]

for n in map(int,sys.stdin.readline().strip().split()):
  C[n+MX] = True

M = int(sys.stdin.readline().strip())


for c in sys.stdin.readline().strip().split():
    c = int(c)
    print(1 if C[c+MX] else 0, end=" ")
