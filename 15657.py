# 15657.py
# Date: 2020-09-04 Fri 
# Best Answer: https://www.acmicpc.net/source/18163361

from itertools import product

N, M = map(int, input().split())
S = sorted(map(int, input().split()))

def check (l) :
  tmp = 0
  for a in l :
    if (tmp > a) :
      return False
    tmp = a
  return True

print("\n".join([' '.join(map(str, s)) for s in filter(check,product(S, repeat=M))]))