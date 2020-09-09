/* 
Date: 2020-09-09 Wed 12:23
1st try: 23m 38s >> 통과
Comment: 거리를 구하는게 아니라, 최소 방 변환수만 구하면 되므로 dist를 구지 다 가져갈 필요가 없다.
Best Answer: https://www.acmicpc.net/source/13144295 

*/

"use strict";

let [N, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

N = Number(N);
const board = input.map((s) => s.split("").map((n) => Number(n)));
// console.table(board);

const dist = Array(N)
	.fill(0)
	.map(() =>
		Array(N)
			.fill(0)
			.map(() => Array(N ** 2).fill(-1))
	);

// const MX = N * 4 + 5;
// let head = 0;
// let tail = 0;
// const q_len = () => tail - head;
// const q_push = (val) => (q[tail++] = val);
// const q_shift = () => (q_len() > 0 ? q[head++] : undefined);

const q = [];
q.push({ x: 0, y: 0, numChanged: 0 });
vis[0][0][0] = true;
dist[0][0][0] = 0;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

while (q.length > 0) {
	const { x, y, numChanged } = q.shift();

	for (let i = 0; i < 4; i++) {
		const nx = x + dx[i];
		const ny = y + dy[i];

		if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

		if (board[nx][ny] === 1) {
			if (dist[nx][ny][numChanged] !== -1) continue;

			dist[nx][ny][numChanged] = dist[x][y][numChanged] + 1;
			q.push({ x: nx, y: ny, numChanged });
		} else {
			if (dist[nx][ny][numChanged + 1] !== -1) continue;

			dist[nx][ny][numChanged + 1] = dist[x][y][numChanged] + 1;
			q.push({ x: nx, y: ny, numChanged: numChanged + 1 });
		}
	}
}

for (let i = 0; i < N ** 2; i++) {
	if (dist[N - 1][N - 1][i] !== -1) {
		console.log(i);
		return;
	}
}
