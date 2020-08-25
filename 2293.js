/* 
Date: 2020-08-25 Tue 22:49
1st try: 55m 32s >> 메모리 초과
Comment: 
1. 바킹독 알고리즘을 보고 풀었으나, 메모리 초과. 이때까지 NodeJS로 푼 모든 코딩의 메모리 사용이 7MB 이상임을 파악하였다.
아무리 줄여도 어쩔 수 없는 언어적 한계라는 것이 존재하는 걸까? 4MB의 벽은 높다.

2. DP는 뒤를 돌아봐서 만들어 가는 것
재귀는 앞으로 뻗쳐 나가는 것.


 */

"use strict";

let [first, ...A] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, K] = first.split(" ").map((v) => Number(v));
for (let i = 0; i < N; i++) {
	A[i] = Number(A[i]);
}
// console.table(A);

let currD = Array(K + 1).fill(0);
let prevD = Array(K + 1).fill(0);

for (let i = 0; i <= K; i++) {
	prevD[i * A[0]] = 1;
}

for (let i = 1; i < N; i++) {
	for (let j = 0; j <= K; j++) {
		currD[j] = prevD[j] + (j - A[i] >= 0 ? currD[j - A[i]] : 0);
	}
	// [...prevD] = [...currD];
	for (let i = 0; i <= K; i++) {
		prevD[i] = currD[i];
	}
}

console.log(currD[K]);
