/*
Date: 2020-08-28 Fri 12:15
1st try: 15m 03s >> 통과
Comment: 개념을 알면 구현은 간단! union 알고리즘은 좀더 공부하자
*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [V, E] = input[0].split(" ").map((n) => Number(n));

const groups = Array(V + 1)
	.fill(0)
	.map((v, i) => i);

const edges = [];

for (let i = 1; i < input.length; i++) {
	let [A, B, C] = input[i].split(" ").map((n) => Number(n));
	edges.push([A, B, C]);
}
edges.sort((a, b) => a[2] - b[2]);

// console.table(edges);

let count = 0;
let sum = 0;

for (let i = 0; i < edges.length; i++) {
	let [A, B, C] = edges[i];

	if (!isDiffGroup(A, B)) continue;

	union(A, B);
	sum += C;
	count++;

	if (count === V - 1) break;
}

console.log(sum);

function isDiffGroup(a, b) {
	return groups[a] !== groups[b];
}

function union(a, b) {
	let tmp = groups[b];

	for (let i = 1; i <= V; i++) {
		if (groups[i] === tmp) groups[i] = groups[a];
	}
}
