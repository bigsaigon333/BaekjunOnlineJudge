function BFS(I, c, t) {
	const Deque = require("../../Deque.js");
	const q = new Deque();

	const dx = [1, 1, 2, 2, -1, -1, -2, -2];
	const dy = [2, -2, 1, -1, 2, -2, 1, -1];

	const vis = new Array(I).fill(0).map(() => new Array(I).fill(false));
	q.push([...c, 0]);
	vis[c[0]][c[1]] = true;
	while (q.size() > 0) {
		const [cx, cy, d] = q.shift();
		if (cx === t[0] && cy === t[1]) {
			return d;
		}
		for (let i = 0; i < 8; i++) {
			const nx = cx + dx[i];
			const ny = cy + dy[i];
			if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
			if (vis[nx][ny]) continue;
			vis[nx][ny] = true;
			q.push([nx, ny, d + 1]);
		}
	}
	return -1;
}

let [T, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

T = parseInt(T, 10);
let t = 0;

while (T--) {
	const I = parseInt(input[t++], 10);
	const curr = input[t++].split(" ").map((v) => parseInt(v, 10));
	const target = input[t++].split(" ").map((v) => parseInt(v, 10));

	console.log(BFS(I, curr, target));
}
