/*
Date: 2020-08-28 Fri 14:34
1st try: 13m 06s >>
Comment: 플로이드 알고리즘은 모든 정점을 쌍 사이의 최단거리를 구하는 알고리즘. 거리 배열을 선언하여야 하며, 시간복잡도는 O(V^3)이다.
*/

let [N, M, ...E] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
M = Number(M);

E = E.map((line) => line.split(" ").map((n) => Number(n)));
// console.table(E);

let dist = Array(N + 1)
	.fill(0)
	.map(() => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
	dist[i][i] = 0;
}

E.forEach(([v1, v2, c], i) => {
	dist[v1][v2] = Math.min(dist[v1][v2], c);
	// dist[v2][v1] = Math.min(dist[v2][v1], c);
});
// console.table(dist);

for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= N; j++) {
		for (let k = 1; k <= N; k++) {
			dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
		}
	}
}
// console.table(dist);

let answer = "";
for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= N; j++) {
		answer += dist[i][j] === Infinity ? 0 : dist[i][j];
		answer += " ";
	}
	answer += "\n";
}

console.log(answer);
