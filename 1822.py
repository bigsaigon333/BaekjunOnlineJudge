# Date: 2020-09-10 Thu 15:43
# 1st try: 21m 16s >> 통과
# Comment: 문제를 정확하게 읽자. 단순히 set으로 풀 수 있는 문제였는데, 출력에서 len 때문에 틀리는걸 set 순서때문이라고 지레짐작해서 엉뚱한데서 시간을 많이 쏟아버렸다.

from sys import stdin

nA, nB = map(int, stdin.readline().strip().split())
sA = set(map(int, stdin.readline().strip().split()))
sB = set(map(int, stdin.readline().strip().split()))
sAB = sA-sB

print(len(sAB))
print(' '.join(map(str, sorted(sAB))))
