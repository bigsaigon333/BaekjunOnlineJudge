NODE_OPTIONS = "--stack-size=100000000";
// console.log(process.env);

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let t = 0;
let T = parseInt(input[t++], 10);
let ret = [];

while (T--) {
	let n = parseInt(input[t++], 0);
	let adj = [0, ...input[t++].split(" ").map((v, i) => parseInt(v, 10))];
	// console.log(adj);
	let vis = new Array(n + 1).fill(false);
	let fin = new Array(n + 1).fill(false);
	let count = 0;

	function DFS(idx) {
		console.log(idx);
		if (vis[idx]) {
			if (fin[idx]) return;

			count++;
			let j = adj[idx];
			while (j !== idx) {
				count++;
				j = adj[j];
			}
			return;
		}

		vis[idx] = true;
		DFS(adj[idx]);

		fin[idx] = true;
	}

	let sum = n;
	for (let i = 1; i <= n; i++) {
		if (vis[i]) continue;

		DFS(i);
	}
	ret.push(sum - count);
}

ret.forEach((v) => console.log(v));
