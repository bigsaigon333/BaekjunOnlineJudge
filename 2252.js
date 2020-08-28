/*
Date: 2020-08-28 Fri 11:16
1st try: 14m 58s >> 통과
Comment: 구현방법만 알면 손쉽게 통과!
그래프는 인접리스트에 저장하는 것이 일반적!

*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = input[0].split(" ").map((n) => Number(n));
const adj = Array(N + 1)
	.fill(0)
	.map(() => []);
const ind = Array(N + 1).fill(0);

for (let i = 1; i < input.length; i++) {
	const [A, B] = input[i].split(" ").map((n) => Number(n));
	adj[A].push(B);
}
// console.table(adj);

const q = [];

for (let i = 1; i <= N; i++) {
	for (let j = 0; j < adj[i].length; j++) {
		let nxt = adj[i][j];
		ind[nxt]++;
	}
}
// console.table(ind);

for (let i = 1; i <= N; i++) {
	if (ind[i] === 0) q.push(i);
}

let result = [];

while (q.length > 0) {
	let curr = q.pop();
	result.push(curr);

	for (let i = 0; i < adj[curr].length; i++) {
		let nxt = adj[curr][i];
		ind[nxt]--;
		if (ind[nxt] === 0) q.push(nxt);
	}
}

result.forEach((n) => process.stdout.write(n + " "));
