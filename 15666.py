# Date: 2020-09-09 Wed 11:48
# 1st try: 15m 51s >> 통과
# Comments
# 1. 언제 어떻게 무엇을 sort할지 잘 판단하고 현명하게 접근해라.
# 2. 무조건 generator를 쓰려고 하지 말자. 일단은 나에게 익숙한 것 위주로
# Best Answer: https://www.acmicpc.net/source/18166712  중복이 가능하다는 점을 이용해서 중복된 num은 입력시에 삭제해버림


from sys import stdin
from itertools import combinations_with_replacement
from operator import itemgetter

N, M = map(int, stdin.readline().strip().split())

num = list(sorted(map(int, stdin.readline().strip().split())))

for s in sorted(set(combinations_with_replacement(num, M)), key=itemgetter(*range(M))):
    print(' '.join(map(str, s)))
