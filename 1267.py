# Date: 2020-09-07 Mon 15:51
# 1st try: 4m 39s >> 통과
# Comment: Easy Peasy~!

import sys
read = sys.stdin.readline

N = int(read())

nums = map(int, read().split())

M = 0
Y = 0
for num in nums:
    M += ((num//60)+1)*15
    Y += ((num//30)+1)*10

if M == Y:
    print("Y", "M", Y)
elif M < Y:
    print("M", M)
else:
    print("Y", Y)
