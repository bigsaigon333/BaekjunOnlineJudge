# Date: 2020-08-31 Mon
#
# Comments
# 1. 그리디인걸 몰랐으면 절대 못풀었을 듯
# 2. 그리디인걸 알았어도 이게 왜 그리디? 라는 생각뿐
# 3. 인터넷 검색을 통해 얻은 정보들에는 전부다 코드 구현밖에 없었다. 왜 이게 그리디로 풀 수 있는지에 대한 내용이 부족했다.
# 단순히 구현이 중요한 게 아니라, 해당 알고리즘을 이해하는 것이 중요하다

import sys


def get_num_list(s):
    return list(map(int, (s.replace("+", ",").replace("-", ",").split(","))))


S = sys.stdin.readline().strip()

i = S.find("-")
if i != -1:
    print(sum(get_num_list(S[:i]))-sum(get_num_list(S[i+1:])))
else:
    print(sum(get_num_list(S)))
