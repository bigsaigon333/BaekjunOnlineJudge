let [N, ...board] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = parseInt(N, 10);

board = board.map((line) => line.split(" ").map((n) => parseInt(n, 10)));

// console.log(N);
// console.table(board);

const min = Math.min(...board.map((row) => Math.min(...row)));
const max = Math.max(...board.map((row) => Math.max(...row)));
// console.log(min);
// console.log(max);

let answer = 1;
for (let h = min; h < max; h++) {
	const vis = new Array(N).fill(0).map(() => new Array(N).fill(false));
	const q = [];
	const dx = [1, 0, -1, 0];
	const dy = [0, 1, 0, -1];
	let count = 0;

	// console.log(h);

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (vis[i][j] || board[i][j] <= h) continue;
			count++;

			q.push([i, j]);
			vis[i][j] = true;

			while (q.length > 0) {
				const [x, y] = q.pop();

				for (let k = 0; k < 4; k++) {
					const [nx, ny] = [x + dx[k], y + dy[k]];

					if (
						nx < 0 ||
						nx >= N ||
						ny < 0 ||
						ny >= N ||
						vis[nx][ny] ||
						board[nx][ny] <= h
					)
						continue;

					vis[nx][ny] = true;
					q.push([nx, ny]);
				}
			}
		}
	}
	// console.table(vis);
	// console.log(count);
	// console.log("");

	if (answer < count) answer = count;
}

console.log(answer);
