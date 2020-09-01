# Date: 2020-09-01 Tue 21:43
# 1st try: 19m 54s
# Comment: 처음부터 시간 복잡도를 잘 고려해서 문제를 풀자. 자료구조를 잘 알아야 적절한 자료구조를 선택해서 구현할 수 있다. 문제에서 요구하는 출력 사양을 잘 이해하자
# Best Answer: https://www.acmicpc.net/source/10832460

N, M = list(map(int, input().split(" ")))

d = {}
for _ in range(N):
    d[input()] = True

# print(l)

answer = set()
for _ in range(M):
    name = input()
    if d.get(name):
        answer.add(name)

print(len(answer))
print(*sorted(answer), sep="\n")
