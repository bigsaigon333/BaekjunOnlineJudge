# 2012.py
# 참고: https://blog.encrypted.gg/308
# 재배열 부등식: 
# - 최소x최소 + ... + 최대x최대 => 최대
# - 최대x최소 + ... + 최소x최대 => 최소 
# Best Answer: https://www.acmicpc.net/source/19804728
"""
i r d
3 1 2 
4 7 3
    5

i r d
3 7 4
4 1 3
    7

"""

import sys

lines = sys.stdin.readlines()

N = int(lines[0])
lscore = [i+1 for i in range(N)]
rscore = sorted([int(x) for x in lines[1:]])

ret = 0
for (a,b) in zip(sorted(lscore), sorted(rscore)):
  ret += abs(a-b)

print(ret)
