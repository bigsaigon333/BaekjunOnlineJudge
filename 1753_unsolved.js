// 23m 51s
// 30m 00s >> 힙구현 필요

let [[V, E], [K], ...Edges] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map((n) => Number(n)));

// console.table(Edges);
// console.log(V, E, K);

let adj = Array(V + 1)
	.fill(0)
	.map(() => []);
let dist = Array(V + 1).fill(Infinity);
dist[K] = 0;

for (let i = 0; i < E; i++) {
	let [u, v, w] = Edges[i];
	// console.log(`(u,v,w): (${u}, ${v}, ${w})`);
	adj[u].push({ node: v, cost: w });
	// adj[v].push({ node: u, cost: w });
	// console.log(adj[u]);
}
// console.table(adj);

const q = [{ node: K, cost: 0 }];
while (q.length > 0) {
	let curr = q.shift();

	if (curr.cost !== dist[curr.node]) continue;
	// console.log(curr, dist[curr.node]);
	// console.log(adj[curr.node]);

	for (let i = 0; i < adj[curr.node].length; i++) {
		let nxt = adj[curr.node][i];
		// console.log("nxt", nxt);

		if (dist[nxt.node] > dist[curr.node] + nxt.cost) {
			dist[nxt.node] = dist[curr.node] + nxt.cost;
			q.push({ node: nxt.node, cost: dist[nxt.node] });
		}
	}
	q.sort((a, b) => a.cost - b.cost);
	// console.table(q);
}

// console.table(dist);

for (let i = 1; i <= V; i++) {
	if (dist[i] === Infinity) console.log("INF");
	else console.log(dist[i]);
}
