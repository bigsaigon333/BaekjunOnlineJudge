const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let t = 0;
const [M, N, K] = input[t++].split(" ").map((v) => parseInt(v, 10));
const board = new Array(N).fill(0).map((v) => new Array(M).fill(false));
const vis = new Array(N).fill(0).map((v) => new Array(M).fill(false));
const answer = [];

while (t <= K) {
	let [x1, y1, x2, y2] = input[t++].split(" ").map((v) => parseInt(v, 10));
	if (x1 > x2) {
		[x1, y1, x2, y2] = [x2, y1, x1, y2];
	}

	for (let i = x1; i < x2; i++) {
		for (let j = y1; j < y2; j++) {
			board[i][j] = true;
		}
	}
}

// console.table(board);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (board[i][j] || vis[i][j]) continue;
		vis[i][j] = true;
		const q = [{ i, j }];
		let d = 1;

		while (q.length > 0) {
			const { i, j } = q.pop();

			for (let k = 0; k < 4; k++) {
				const ni = i + dx[k];
				const nj = j + dy[k];

				if (ni < 0 || ni >= N || nj < 0 || nj >= M) continue;
				if (board[ni][nj] || vis[ni][nj]) continue;
				vis[ni][nj] = true;
				d++;
				q.push({ i: ni, j: nj });
			}
		}
		answer.push(d);
	}
}
answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join(" "));
