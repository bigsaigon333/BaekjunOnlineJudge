/* Date: 2020-08-29 Sat 02:08
1st try: 19m 34s >> 통과
Comment: 전형적인 BFS문제. DFS로 풀어도 똑같은 결과를 내는 문제이다. q.shift() 가 O(N) 이므로, 효율성을 생각한다면
가능한한 DFS로 푸는게 나을듯(q.pop()은 O(1))
의외로 입력 제어에 애를 좀 먹었다. */

let [T, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((line) => line.split(" ").map((n) => Number(n)));

// console.log(input);
let i = 0;

while (T-- > 0) {
	let [M, N, K] = input[i++];

	let board = Array(M)
		.fill(0)
		.map(() => Array(N).fill(0));

	for (let j = 0; j < K; j++) {
		let [X, Y] = input[i++];
		board[X][Y] = 1;
	}
	// console.table(board);

	console.log(calc(M, N, board));
}

function calc(M, N, board) {
	let vis = Array(M)
		.fill(0)
		.map(() => Array(N).fill(false));

	// console.table(board);

	let q = [];
	let di = [1, 0, -1, 0];
	let dj = [0, 1, 0, -1];
	let count = 0;
	for (let i = 0; i < M; i++) {
		for (let j = 0; j < N; j++) {
			if (board[i][j] === 0 || vis[i][j]) continue;
			q.push({ i, j });
			vis[i][j] = true;
			count++;

			while (q.length > 0) {
				let pos = q.shift();
				// console.log(pos);

				for (let k = 0; k < 4; k++) {
					let ni = pos.i + di[k];
					let nj = pos.j + dj[k];

					if (ni < 0 || ni >= M || nj < 0 || nj >= N) continue;
					if (vis[ni][nj]) continue;

					if (board[ni][nj] === 1) {
						vis[ni][nj] = true;
						q.push({ i: ni, j: nj });
					}
				}
				// console.table(q);
			}
		}
	}
	return count;
}
