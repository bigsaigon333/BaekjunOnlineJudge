# Date: 2020-09-14 Mon 22:22
# 1st try: 19m 04s >> 통과
# Comment: isPrime 함수를 복잡하게 만들지 말고 간단하게 하자. 어차피 O(sqrt(N))이니까.

import sys
import math

N = int(sys.stdin.readline().strip())


def isPrime(n):
    if n == 1:
        return False

    i = 2

    while i * i <= n:
        if n % i == 0:
            return False
        i += 1

    return True


count = 0
for n in map(int, sys.stdin.readline().strip().split()):
    if isPrime(n):
        count += 1

print(count)
