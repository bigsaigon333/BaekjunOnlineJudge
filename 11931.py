# Date: 2020-09-09 Wed 11:58
# Comment: 문제의 의도는 뭐였을까? quicksort 구현이었을까? built-in function 인 sorted 로도 시간내에 정렬이 가능하여 간단하게 풀었다

from sys import stdin

N = int(stdin.readline().strip())
num = sorted(map(int, stdin.readlines()), reverse=True)
print('\n'.join(map(str, num)))
