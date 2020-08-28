BaekjunOnlineJudge
==================

Baaaarking dog 실전 알고리즘
-----------------------------

# 0x01강 기초 코드 작성 요령 I

- 시간복잡도
  O(1) < O(N) < O(Nlog(N)) < O(N^2) < O(2^N) < O(N!)

- 공간복잡도
  512MB = 1.2억개의 int

- 실수 자료형
  1. 실수 자료형은 필연적으로 오차가 있으므로 실수 자료형이 필요한 문제면 보통 문제에서 절대/상대 오차를 허용한다는 단서를 준다. 만약 이런 표현이 없다면 열에 아홉은 실수를 안쓰고 모든 연산을 정수에서 해결할 수 있는 문제
  2. 실수를 비교할 때는 등호를 사용하면 안된다. abs(a-b) < 1e-12

# 0x02강 기초 코드 작성 요령 II

Tip1 개발과 코딩테스트는 다르다
코딩테스트에서는 내가 헷갈리는 않는 범위 안에서 어떻게든 타이핑을 아끼는게 최고.
코딩테스트의 목표는 남이 알아볼 수 있는 클린코드를 작성하는게 아님.
어떻게든 제한된 시간 안에 정답을 받아야함. 그렇기 때문에 코드를 거의 책에 예제로 실어도 될 정도로 깔끔하게 만들기 위해 노력하기 보다는, 좀 더럽더라도 내가 빠르게 짤 수 있는 방식으로 빠르게 구현하는게 훨씬 더 중요.

Tip2 디버거는 굳이 사용할 필요가 없다
코딩테스트의 코드는 끽해야 100줄 전후 길이일 것.
그럴 때 디버거를 켜면 뭔가 꼬이고 늪에 빠져드는 것과 같은 느낌을 받을 때가 있어서 차라리 중간 변수를 보고 싶으면 cout이나 printf로 출력을 찍어서 확인하고 디버거는 굳이 사용을 안하는 것을 권장.

Tip3 출력 맨 마지막에 공백 혹은 줄바꿈이 추가로 있어도 상관이 없음.
공백이랑 비슷하게 줄바꿈 또한 출력 맨 마지막에 추가로 있어도 정답 처리가 됩니다. 그래서 이 부분을 별도로 예외처리를 할 필요가 없습니다.

Tip 4 풀다가 잘 모르겠는게 있으면 검색하셔서 풀이를 적극적으로 찾아보는 것을 추천.
적어도 알고리즘 공부에서만큼은 어떻게 푸는건지 잘 모르겠다고 할 때 풀이를 찾아보는게 나쁘지 않음.
한 30분 정도 고민했는데도 전혀 실마리가 잡히지 않으면 네이버나 구글 같은 곳에 문제 번호로 검색해서 다른 사람의 코드를 보고 배워가시면 됨

# 0x03 배열

1. 배열의 기능

- 임의의 위치에 있는 원소를 확인/변경: O(1)
- 원소를 끝에 추가: O(1)
- 마지막 원소를 제거: O(1)
- 임의의 위치에 원소를 추가/임의 위치의 원소 제거: O(N)

  splice(index, deletednumbers, items1 [, items2]): O(N)
  push(), pop(): O(1)
  shift(), unshift(): O(N)


## Array.prototype.sort()

- callback함수를 인자로 기재하지 않으면, 배열의 각 요소들을 string으로 변환하여 UTF-16 code로 비교하여 오름차순으로 정렬
- The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. 
- If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. 
- If compareFunction(a, b) returns less than 0, sort a to an index lower than b (i.e. a comes first).
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) returns greater than 0, sort b to an index lower than a (i.e. b comes first).
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned, then the sort order is undefined.

## 그래프
![완전 그래프・연결 그래프 예시 그림](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXYpw9%2FbtqAEsgnzpJ%2FWrjU4v3nwJfFPX4nwoHn50%2Fimg.png)
1. 완전 그래프(Complete Graph): 모든 서로 다른 두 정점 쌍이 간선으로 연결된 그래프
2. 연결 그래프(Connected Graph): 임의의 두 정점 사이에 경로가 존재하는 그래프
3. 단순 그래프(Simple Graph): 두 정점 사이의 간선이 1개 이하이고 루프가 존재하지 않는 그래프

## 그래프의 표현법 - 비교
![그래프의 표현법](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcdIHWV%2FbtqADIxert1%2F6zOIBkzRx5kXgneu3sxLMK%2Fimg.png)

## BFS
- BFS와 DFS는 그래프 자료구조에서 모든 정점을 순회하기 위한 알고리즘으로, 다차원 배열이 그래프 자료구조의 특수한 형태이기 때문에 다차원 배열에서도 BFS, DFS를 사용할 수 있는 것
- 시간복잡도
  - 인접행렬: O(V^2)
  - 인접리스트: O(V+E)
  
# 문자열
  ## 문자열 기초
  ![문자열 기초 용어](https://t1.daumcdn.net/cfile/tistory/99DE9E505D18D40F24)
  
  
# 트리
  ## 트리의 정의
  ![트리의 정의](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBfHIy%2FbtqAM31T5Z6%2F9AlwK5RjwbDsbQkvwaRyb0%2Fimg.png)
  
  ![트리의 다양한 예시](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbciYQq%2FbtqAM31T5US%2F50HRMmKPGKapAqkiuDWwj1%2Fimg.png)
  - 트리의 정의 상으로는 계층과 관계된 것이 없으며, 또 정점이 1개이고 간선이 없는 그래프도 트리임에 유의.
  
  ## 트리의 성질
  - V개의 정점을 가진 트리는 V-1V−1개의 간선을 가지고 있다
  - 임의의 두 점을 연결하는 simple path가 유일하다
  
  ## 트리에서의 BFS
  ![트리에서의 BFS 예시](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLj8N4%2FbtqAKwdjTdi%2FDkTbf63UHkyAkY2rqAU8UK%2Fimg.png)
  - 트리의 BFS에서는 살짝 독특한 점이 있는데, 루트가 아닌 아무 정점이나 잡고 생각을 해보면 인접한 정점들 중에 자신의 부모를 제외하고는 전부 자신의 자식이라 아직 방문하지 않았음이 보장됨
  - 예를 들어 6번 정점을 볼 때를 생각해보면, 6번 정점은 4, 7, 8번 정점과 연결되어 있음. 4번 정점은 부모이고 또 6번 정점보다 위에 있으니 이미 이전에 방문했을 것이고 7, 8번 정점은 큐에 넣으면 됨.
  - 즉 트리에서는 BFS의 과정 속에서 자신의 자식들을 전부 큐에 넣어주기만 하면 됨. 이 말은 곧 자신과 이웃한 정점들에 대해 부모만 빼고 나머지는 전부 큐에 넣으면 됨을 의미하고, 그렇기 때문에 vis 배열을 들고갈 필요가 없이 그냥 부모가 누구인지만 저장하고 있으면 됨.
  - 부모의 정보는 BFS를 돌리면서 자식 정점을 큐에 집어넣을 때 채워줄 수 있습니다.
 
 
# 위상 정렬(Topological Sort)

## 정의: 방향 그래프에서 간선으로 주어진 정점 간 선후관계를 위배하지 않도록 나열하는 정렬
![위상 정렬의 정의](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzvvBJ%2FbtqBkp4fhQu%2F23yVksLRU7ZkMUQ9yt9Ib1%2Fimg.png)
- 그림에서 ABCDEF, ACEDBF, BADCEF, BADFCE 등이 전부 올바른 위상 정렬

## 구현: 매 순간마다 들어오는 간선이 없는 정점을 제거함으로서 위상 정렬을 구현할 수 있음
![위상 정렬 구현의 편의를 위한 성질](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcwH4kM%2FbtqBj6DSvEa%2FwN5QMxfr9nTeORXFy9h0k1%2Fimg.png)

![위상 정렬 구현 알고리즘](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqHPRm%2FbtqBg8wAsEj%2FczDMOxfFCpM5KnyxJOvO8K%2Fimg.png)

### 사이클이 존재하지 않는 방향 그래프에서 해당 알고리즘이 늘 올바른 위상 정렬 결과를 내어준다
 - 소개한 알고리즘으로 진행을 한다면 사이클에 포함된 정점은 절대 큐에 들어갈 수가 없게 됨.
 - 이 말은 큐가 비어 알고리즘이 종료되었을 때 위상 정렬 결과에 모든 정점이 있지 않다는 얘기
 - 그러므로 주어진 방향 그래프에 사이클이 있는지 혹은 없는지 여부를 모르더라도 일단 이 알고리즘을 돌리고 나면 
 위상 정렬 결과에 모든 정점이 포함되어있는지 여부를 확인함으로서 사이클이 있는지 없는지를 확인할 수 있고, 사이클이 없다면 위상 정렬의 결과까지 얻을 수 있음.

### 시간복잡도: O(V+E)
 - 각 정점은 큐에 최대 1번 들어가고 indegree를 감소시키는 연산은 각 간선에 대해 딱 1번씩만 발생하기 때문에 시간복잡도는 O(V+E)
 - 그래프에서의 BFS/DFS가 O(V+E)O(V+E)인 것과 비슷한 맥락
 
## 문제에서 원소 간의 선후 관계가 주어지고 순서를 정해야 하는 상황: 상 정렬을 떠올려 해결해보자.
- 코딩테스트에서 그다지 많이 나오지 않는 유형이지만 구현이 그다지 어렵지 않은 편임(だそうです)

 
 
# 최소 신장 트리(Minimum Spanning Tree)

## 신장 트리의 정의
![신장 트리의 예시](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJeAtu%2FbtqBujKS14h%2FFFpRYHaiWxrMPpn5ErHfm0%2Fimg.png)
* 오른쪽 그래프는 왼쪽 그래프의 신장 트리"
- 신장 트리: 주어진 방향성이 없는 그래프의 서브그래프(Subgraph)들 중에서 모든 정점을 포함하는 트리
  - 서브그래프: 주어진 그래프에서 일부 정점과 간선만을 택해서 구성한 새로운 그래프를 의미
- 주어진 그래프의 정점이 V개일 때 신장 트리는 V-1개의 간선을 가지고 있음
- 주어진 그래프가 연결 그래프일 때만 신장 트리가 존재함

![신장 트리의 반례](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOLeXQ%2FbtqByGERsck%2FDUSXrOYBdtkVU4ZkvKEgMk%2Fimg.png)
  * "오른쪽 그래프는 모두 왼쪽 그래프의 신장 트리에 해당하지 않는다"
  * 첫 번째 그래프는 가운데 정점이 연결되지 않아 연결그래프여야 한다는 트리의 조건이 위배되어 신장 트리가 아님
  * 두, 세 번째 그래프는 사이클이 존재하기 때문에 신장 트리가 아님 
  * 네 번째 그래프는 원래 그래프에 없던 간선이 등장해서 아예 서브그래프가 아니기 때문에 신장 트리가 아님

## 최소 신장 트리의 정의:  신장 트리 중에서 간선의 합이 최소인 트리
![최소 신장 트리 예시](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbyx4fp%2FbtqBuQVLng1%2FHUDDmuvShZC2ku0RCaCDKk%2Fimg.png)

- 최소 신장 트리는 동일한 그래프에서 딱 한 개로 정해지지 않고 여러 개일 수 있음.(첫번째 그래프, 세번째 그래프)


## 크루스칼 알고리즘
![크루스칼 알고리즘](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGNVjT%2FbtqBuatQI2j%2F0dkAdsv4AcbGIm26wmwLdK%2Fimg.png)
 
- 크루스칼 알고리즘은 그냥 사이클을 만들어내지 않는 선에서 비용이 작은 간선부터 최소 신장 트리에 편입시키는 그리디 알고리즘임
  (알고리즘의 정당성이 직관적으로 와닿지 않지만 증명은 생략)
 
## 프림 알고리즘
![프림 알고리즘](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fw70gD%2FbtqBukwgIkg%2FYLDZ1JN6LrZjqKdHWkyQx1%2Fimg.png)
- 크루스칼 알고리즘이 가장 비용이 낮은 간선부터 시작해 서로 떨어져 있던 정점들을 합쳐나가며 총 V-1개의 간선을 택하는 알고리즘이었다면, 
프림 알고리즘은 한 정점에서 시작해 확장해나가는 알고리즘.


### 프림 알고리즘 구현
![프림 알고리즘 구현 방법](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbamPPO%2FbtqBt99zmmq%2Fmi98XPzt4Owcg4rjRwTsc0%2Fimg.png)


## 코딩테스트에서 최소 신장 트리 관련 문제가 나온다면 구현도 문제지만 "이 문제에서 요구하는 것이 최소 신장 트리이구나"를 잘 캐치하는 것이 더 중요!!


# 플로이드 알고리즘

## 정의: 주어진 그래프에서 모든 정점 쌍 사이의 최단 거리를 구해주는 알고리즘
![플로이드 알고리즘 개념](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuuoUT%2FbtqBziED44Q%2Fkwc0xsvAKsUJVl7gHsxKV1%2Fimg.png)
- 주어진 그래프가 방향 그래프이건, 무방향 그래프이건 상관 없음
- 간선의 합이 음수인 사이클이 있다면 문제가 생기는데 애초에 간선의 값이 음수인 상황이 딱히 일반적이지 않으니 당장은 고민하지 맙시다!

## 시간복잡도: O(V^3)
 정점이 V개라고 할 때 총 V단계에 걸쳐 갱신이 이루어지고 각 k=1,2,3,…,V단계마다 총 V^2 개의 모든 D[s][t]값을 D[s][k]+D[k][t]값과 비교하므로 
 플로이드 알고리즘의 시간복잡도는 O(V^3)
 
## 경로 복원 방법
플로이드 알고리즘에서는 두 정점간의 최단거리는 알 수 있으나, 최단거리로 가기 위해서 실제 어떠한 경로로 가야하는지는 전혀 알지 못함
 
## 요약
- 플로이드 알고리즘은 무방향 혹은 방향 그래프에서 모든 정점 쌍 사이의 최단 거리와 그 경로를 O(V^3)에 알아낼 수 있는 알고리즘
- 만약 주어진 문제가 모든 정점 쌍 사이의 최단 경로를 구하도록 요구하는 문제이면 플로이드 알고리즘이 정해일 확률이 높음
- O(V^3)이라는 시간복잡도가 굉장히 크게 느껴질 수 있지만 간선이 매우 적을 때에만(=간선은 최대 V^2개 정도인데 V개에 가까울 때만) 
다음 강에서 배울 다익스트라를 V번 돌리거나 Johnson's algorithm을 사용해 O(V^2logV + VE)에 모든 정점 쌍 사이의 최단 거리를 구할 수 있음.
- 간선이 V^2 개에 가까울 경우 플로이드보다 더 효율적인 알고리즘은 존재하지 않습니다.
- 또한, 플로이드 알고리즘은 단순 덧셈 계산 후 비교와 대입만으로 이루어져있기 때문에 V가 1000정도 되어 V^3이 10억 가까이 되는 상황이라고 하더라도 
1초 내외에 알고리즘이 종료될 정도로 아주 빠르게 동작하니 이를 감안해 풀이를 생각해보면 됨
- 간선의 갯수와는 크게 상관없이 한 정점에서 모든 정점으로의 거리를 구해야하면 다익스트라, 모든 정점간의 거리를 구할 때에는 플로이드


# 다익스트라 알고리즘

## 정의
- 방향 그래프 혹은 무방향 그래프에서 하나의 시작점로부터 다른 모든 정점 까지의 최단 거리를 구해주는 알고리즘
- 음수의 가중치를 가지는 간선이 포함되어 있을 때에는 사용할 수 없음

## 구현
- 매 단계마다 남아있는 정점 중에서 시작점으로부터의 거리가 가장 가까운 정점을 구하고, 시작점으로부터 해당 정점까지의 거리를 확정하는 방식
- 매 단계마다 최단 거리 테이블을 확인해 가장 가까운 것을 찾고, 그 것과 인접한 정점들에 대해 최단 거리 값을 갱신해주는 작업을 반복
- 인접 리스트 상황을 가정했을 때 곧이곧대로 구현한 다익스트라 알고리즘의 시간복잡도는 O(V^2+E).
  - 그런데 힙을 사용하면 시간복잡도를 O(ElgE)로 만들 수 있습니다. 만약 E가 V^2 에 가깝다면 오히려 O(V^2+E)가 더 효율적일 수 있음.
  - 다만, 다익스트라 알고리즘을 요구하는 문제의 경우에는 V는 3만, E는 10만 정도와 같이 힙을 이용해 구현해야 통과할 수 있고 
  그렇지 않을 경우 시간 초과가 발생하게끔 설계한 경우가 많음
 
 ![다익스트라 알고리즘 구현 코드](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb0YBmG%2FbtqBAWaqTQH%2FaKRP2FZZcV06DRYeEzDvCK%2Fimg.png)
 
  




