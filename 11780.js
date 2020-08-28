/*
Date: 2020-08-28 Fri 15:17
1st try: 29m 26s >>통과
Comment: 구현은 어렵지 않다. 플로이드 알고리즘이라는 걸 캐치해내는게 어렵겠지..
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
let nxt = Array(N + 1)
	.fill(0)
	.map(() => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) dist[i][i] = 0;

for (let i = 0; i < M; i++) {
	const [v1, v2, c] = E[i];

	dist[v1][v2] = Math.min(dist[v1][v2], c);
	nxt[v1][v2] = v2;
}
// console.table(dist);
// console.table(nxt);

for (let k = 1; k <= N; k++) {
	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= N; j++) {
			if (dist[i][j] > dist[i][k] + dist[k][j]) {
				dist[i][j] = dist[i][k] + dist[k][j];
				nxt[i][j] = nxt[i][k];
			}
		}
	}
}
// console.table(nxt);

for (let i = 1; i <= N; i++) {
	console.log(
		dist[i].reduce((acc, curr) => {
			if (curr === Infinity) return "";
			else return acc + curr + " ";
		}, "")
	);
}

for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= N; j++) {
		if (i === j) {
			console.log("0");
			continue;
		}
		let route = getRoute(i, j);

		console.log(
			`${route.length} ${route.reduce((acc, curr) => acc + curr + " ", "")}`
		);
	}
}

function getRoute(s, t) {
	let ret = [s];

	while (s !== t) {
		s = nxt[s][t];
		if (s === 0 || s === Infinity) return [];
		ret.push(s);
	}

	return ret;
}
