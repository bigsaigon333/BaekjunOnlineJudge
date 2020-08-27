/* Date: 2020-08-27 Thu 10:42
1st try: 18m 32s >> 통과
Comment: 나 자신을 믿자. 그래프 자료구조를 알았다고 하여 모든 걸 안 건 아니지만, 자신있게 구현!
 */
let [first, ...edges] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = first.split(" ").map((n) => Number(n));
edges = edges.map((line) => line.split(" ").map((n) => Number(n)));

const adj = Array(N + 1)
	.fill(0)
	.map(() => Array(N + 1).fill(false));

for (let i = 0; i < edges.length; i++) {
	let [v1, v2] = edges[i];
	adj[v1][v2] = true;
	adj[v2][v1] = true;
}
// console.table(c);

const isused = Array(N + 1).fill(false);

let count = 0;
for (let i = 1; i <= N; i++) {
	if (isused[i]) continue;
	else count++;

	let stack = [i];
	while (stack.length > 0) {
		let curr = stack.pop();
		for (let j = 1; j <= N; j++) {
			if (isused[j]) continue;
			if (!adj[curr][j]) continue;

			stack.push(j);
			isused[j] = true;
		}
	}
}

console.log(count);
