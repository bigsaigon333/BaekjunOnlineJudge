# Date: 2020-09-01 Tue 21:20
# 1st try: 6m 26s >> 통과
# Comment: 처음에 시간복잡도를 생각해봤던게 주요했다. 1초에 3억번 정도의 연산을 수행하니, 이를 넘어가는 연산수가 나오면
# 시간 초과가 나올거라는 걸 짐작하고, 방향을 바로 틀었다. 굿!
# ※참고 from collections import Counter

N = int(input().strip())
BASE = 10000000
MX = BASE*2+5

arr = [0 for _ in range(MX)]

for n in list(map(int, input().strip().split(" "))):
  arr[n+BASE] += 1

M = int(input().strip())

answer = []
for m in list(map(int, input().strip().split(" "))):
  answer.append(arr[m+BASE])

print (*answer)
