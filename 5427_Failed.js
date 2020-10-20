/* Date: 2020-10-20 Tue 23:58
메모리 초과로 인해 Failed. 

어디서 메모리 초과 발생하는지 고민 필요
 */
const Deque = require("../../Deque.js");

let [T, ...input] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let c = 0;

while (T--) {
	let [h, w] = input[c++].split(" ").map((v) => parseInt(v, 10));

	const board = [];
	let fireBoard = new Array(w).fill(0).map(() => new Array(h).fill(-1));
	let pBoard = new Array(w).fill(0).map(() => new Array(h).fill(-1));

	let p = {};
	const fire = [];

	for (let i = 0; i < w; i++) {
		const arr = input[c++].split("").map((c, idx) => {
			switch (c) {
				case "#":
					return -1;
				case ".":
					return 0;
				case "@":
					p = { x: i, y: idx };
					return 0;
				case "*":
					fire.push({ x: i, y: idx });
					return -1;
			}
		});
		board.push(arr);
	}

	// console.log("person: ", p);
	// console.log("fire: ", fire);
	// console.log("board");
	// console.table(board);

	// Fire
	const fq = new Deque();
	for (const { x, y } of fire) {
		fireBoard[x][y] = 0;
		fq.push({ x, y, d: 0 });
	}

	const dx = [1, 0, -1, 0];
	const dy = [0, 1, 0, -1];

	while (fq.size() > 0) {
		const { x, y, d } = fq.shift();

		for (let k = 0; k < 4; k++) {
			const nx = x + dx[k];
			const ny = y + dy[k];

			if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
			if (board[nx][ny] === -1) continue; // 벽일때는 불이 전파 X
			if (fireBoard[nx][ny] !== -1) continue;

			fireBoard[nx][ny] = d + 1;
			fq.push({ x: nx, y: ny, d: d + 1 });
			// console.log("in fire BFS lopp ");
			// console.table(fireBoard);
		}
	}

	// console.table(fireBoard);

	// Escape
	const pq = new Deque();
	pq.push({ x: p.x, y: p.y, d: 0 });
	pBoard[p.x][p.y] = 0;

	let flag = false;
	while (pq.size() > 0) {
		const { x, y, d } = pq.shift();

		for (let k = 0; k < 4; k++) {
			const nx = x + dx[k];
			const ny = y + dy[k];
			const nd = d + 1;

			if (nx < 0 || nx >= w || ny < 0 || ny >= h) {
				console.log(nd);
				flag = true;
				break;
			}
			if (board[nx][ny] === -1) continue; // 벽일때는 이동X
			if (pBoard[nx][ny] !== -1) continue; // 이미 이동한 자리인 경우 이동X
			if (fireBoard[nx][ny] !== -1 && nd >= fireBoard[nx][ny]) continue; //  불이 붙어 있으며, 불 전파보다 이동이 같거나 늦은 경우 이동X

			pBoard[nx][ny] = nd;
			pq.push({ x: nx, y: ny, d: nd });
			// console.log("in BFS loop");
			// console.table(board);
		}

		if (flag) break;
	}

	// console.table(board);

	if (!flag) console.log("IMPOSSIBLE");
}
