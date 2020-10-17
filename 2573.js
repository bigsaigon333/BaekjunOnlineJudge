// Ref: https://www.acmicpc.net/source/16285834

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [N, M] = input[0].split(" ").map((v) => parseInt(v, 10));
let board = input
	.slice(1)
	.map((line) => line.split(" ").map((v) => parseInt(v, 10)));

// console.table(board);

for (let year = 0; true; year++) {
	// 1. 모두 0 인지 확인 : 모두 0? 0 출력 후 return
	let flag = false;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (board[i][j] > 0) {
				flag = true;
				break;
			}
		}
		if (flag) break;
	}

	if (!flag) {
		console.log(0);
		return;
	}
	// 2. 두 덩어리 이상인지 check: 이상? 최초의 시간 출력후 return

	const vis = new Array(N).fill(0).map(() => new Array(M).fill(false));

	const dx = [1, 0, -1, 0];
	const dy = [0, 1, 0, -1];

	let count = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			if (board[i][j] === 0 || vis[i][j]) continue;

			count++;
			if (count >= 2) {
				console.log(year);
				return;
			}

			const q = [[i, j]];
			vis[i][j] = true;

			while (q.length > 0) {
				const [cx, cy] = q.pop();

				for (let k = 0; k < 4; k++) {
					const nx = cx + dx[k];
					const ny = cy + dy[k];

					if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
					if (board[nx][ny] === 0 || vis[nx][ny]) continue;

					vis[nx][ny] = true;
					q.push([nx, ny]);
				}
			}
		}
	}

	// 3. 시간 증가 -> 빙산 감소 시킴
	const nboard = new Array(N).fill(0).map(() => new Array(M).fill(0));

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			let zcount = 0;
			if (board[i][j] > 0) {
				for (let k = 0; k < 4; k++) {
					const ni = i + dx[k];
					const nj = j + dy[k];
					if (ni < 0 || ni >= N || nj < 0 || nj >= M) continue;
					if (board[ni][nj] === 0) zcount++;
				}
			}
			nboard[i][j] = Math.max(0, board[i][j] - zcount);
		}
	}
	board = nboard;
}
