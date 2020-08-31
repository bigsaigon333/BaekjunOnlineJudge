
# Date: 2020-08-30 Sun 23: 19
# 1st try: 10m 07s >> 통과
# Comments
# 1. *: unpack
# 2. sorted는 iterable을 다 정렬가능. function map() 의 return type은 map이며, iterator임


import sys

l = list(map(int, sys.stdin.readline().split()))
l.sort()

print(*l)

# print(sorted(map(int, input().split())))
