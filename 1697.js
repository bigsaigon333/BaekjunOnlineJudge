/*
 Date: 2020-08-18 Tue 18:04
1st try: 35m 04s >> 성공
Comment: BFS, DFS는 항상 board, dist, q가 있어야 한다는 걸 잊지 말자
 */

const [N, K] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ")
	.map((v) => Number(v));

const MX = 100000;
// const line = new Array(2 * MX + 5).fill(0);
const line = new Array(MX + 5).fill(0);
// const isVisited = new Array(2 * MX + 5).fill(false);
const isVisited = new Array(MX + 5).fill(false);
const q = [];
let head = 0;
let tail = 0;
const q_push = (dat) => (q[tail++] = dat);
const q_shift = () => q[head++];
const q_size = () => tail - head;
const q_print = () => {
	for (let i = head; i < tail; i++) console.log(i - head, q[i]);
	console.log("");
};

// q.push(N);
q_push(N);
isVisited[N] = true;

while (q_size() > 0) {
	let pos = q_shift();
	if (pos === K) break;

	if (pos - 1 >= 0 && !isVisited[pos - 1]) {
		q_push(pos - 1);
		isVisited[pos - 1] = true;
		line[pos - 1] = line[pos] + 1;
	}
	if (pos + 1 < isVisited.length && !isVisited[pos + 1]) {
		q_push(pos + 1);
		isVisited[pos + 1] = true;
		line[pos + 1] = line[pos] + 1;
	}
	if (pos * 2 < isVisited.length && !isVisited[pos * 2]) {
		q_push(pos * 2);
		isVisited[2 * pos] = true;
		line[2 * pos] = line[pos] + 1;
	}
	// q_print();
}

console.log(line[K]);
