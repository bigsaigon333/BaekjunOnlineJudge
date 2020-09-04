# Date: 2020-09-04 Fri 17:50
# 1st try: 15m 00s >> 통과
# Comment: 메모리 제한이 8MB 인걸 보고 너무 당황했다.. 당황하지 말자

import sys

N = int(sys.stdin.readline())
MX = 10000

num = [0] * (MX+5)

for _ in range(N):
  num[int(sys.stdin.readline())] += 1

for n in range(1, MX+1) :
  while num[n] :
    sys.stdout.write(str(n) + "\n")
    num[n] -= 1

