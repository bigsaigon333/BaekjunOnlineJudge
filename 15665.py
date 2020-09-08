# Date: 2020-09-08 Tue 12:00
# 1st try: 7m 15s >> 통과
# Comment: N과 M 문제는 문제내용 파악이 쉽지 않다. 문제내용 파악 후 어떤 툴(product, permutation, combinations)을 쓸지만 정하면 끝!
# Best Answer: 정석: https://www.acmicpc.net/source/17457158
# library 없이 구현: https://www.acmicpc.net/source/17948883


from itertools import product
import sys
from operator import itemgetter

N, M = map(int, sys.stdin.readline().strip().split())

num = list(map(int, sys.stdin.readline().strip().split()))

S = sorted(set(product(num, repeat=M)), key=itemgetter(*range(M)))

for s in S:
    print(' '.join(map(str, s)))
