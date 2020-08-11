/* 
Date: 2020-08-10 Mon 21:55
1st try & 2nd try: 26m 43s
Comments
1. Javascript Array shift function의 시간복잡도는 O(N)이다. 
이번 문제에서 최대 N이 1,000이었음에도 불구하고 계속해서 shift()를 하였더니, 시간초과가 발생하였다.
이럴때는 arr, head, tail 을 가지고 직접 q를 구현하여서 문제를 풀면 된다.

Date: 2020-08-11 Tue 21:57
3rd try >> 통과
Comments
1. BFS 좌표 문제 풀때는 dist로 생각해라. 즉 거리라고 생각해라. 그러면 초기값은 -1이 되어야 논리적이다.
2/ board를 충분히 활용해라. dist 배열 하나로 모든걸 해결하려고 하지말고 특정 board값에 해당되면 continue 하게끔 해라
 */

const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let line = input[0].split(" ");
const M = Number(line[0]);
const N = Number(line[1]);

const MX = 1000 + 5;
const board = [];
const date = new Array(N).fill(0).map(() => new Array(M).fill(-1));
const q = new Array(MX).fill(0);
let head = 0;
let tail = 0;

const q_push = (dat) => {
	q[tail++] = dat;
};

const q_shift = () => {
	return q[head++];
};

const q_print = () => {
	for (let i = head; i < tail; i++) {
		console.log("i v", i - head, q[i]);
	}
	console.log("");
};

const q_size = () => tail - head;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 1; i <= N; i++) {
	line = input[i].split(" ").map((v) => Number(v));
	board.push(line);
}

for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (board[i][j] === 1) {
			q_push({ x: i, y: j });
			date[i][j] = 0;
		}
	}
}
// console.table(board);
// console.table(date);
// q_print();

while (q_size() > 0) {
	// console.table(date);
	// q_print();
	let cor = q_shift();
	for (let i = 0; i < 4; i++) {
		const nx = cor.x + dx[i];
		const ny = cor.y + dy[i];

		if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
		if (board[nx][ny] === -1 || date[nx][ny] >= 0) continue;

		date[nx][ny] = date[cor.x][cor.y] + 1;
		q_push({ x: nx, y: ny });
	}
}
// console.table(date);

let max = 0;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < M; j++) {
		if (board[i][j] !== -1 && date[i][j] === -1) {
			console.log(-1);
			return;
		}
		if (date[i][j] > max) max = date[i][j];
	}
}
console.log(max);
