# DAte: 2020-09-12 Sat 01:07
# 1st try: 27m 52s >> 통과
# Comment: 중복된 양수가 있을때의 처리가 부족했다. 1 1 이 있을 경우 1*1 보다 1+1이 더 크다는 걸 간과해버렸다.. 조심하자
# Best Answer: https://www.acmicpc.net/source/13552342 >> range  함수의 step 을 쓰면 깔끔하게 처리가 되는구나. 근데 1이 중복된 경우는 고려되지 않은듯

from sys import stdin

N, *num = map(int, stdin.readlines())

minus = sorted(filter(lambda x: x <= 0, num))
plus = sorted(filter(lambda x: x > 0, num), reverse=True)

# print(minus)
# print(plus)

ret = 0
tmp = 0
for i in range(len(minus)):
    if i % 2 == 0:
        tmp = minus[i]
    else:
        ret += tmp*minus[i]
if len(minus) % 2 == 1:
    ret += tmp


for i in range(len(plus)):
    if i % 2 == 0:
        tmp = plus[i]
    else:
        ret += max(tmp*plus[i], tmp+plus[i])

if len(plus) % 2 == 1:
    ret += tmp

print(ret)
