let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const text = input[0].split("");
const N = parseInt(input[1]);
// console.log(text, N);

const MX = 100000 + 5;
const dat = new Array(MX).fill(0);
const pre = new Array(MX).fill(-1);
const nxt = new Array(MX).fill(-1);
let unused = 1;
nxt[0] = 1;

for (let i = 0; i < text.length; i++) {
	dat[i + 1] = text[i];
	pre[i + 1] = i;
	nxt[i + 1] = i + 2;
}
nxt[text.length] = -1;
unused = text.length + 1;

// console.log(dat.slice(0, text.length + 1));
// console.log(pre.slice(0, text.length + 1));
// console.log(nxt.slice(0, text.length + 1));

let cur = text.length;
for (let i = 0; i < N; i++) {
	let line = input[i + 2].split(" ");
	let operator = line[0];
	let operand = line[1];
	// console.log("operator operand", operator, operand);

	switch (operator) {
		case "L":
			if (pre[cur] !== -1) cur = pre[cur];
			break;
		case "D":
			if (nxt[cur] !== -1) cur = nxt[cur];
			break;
		case "B":
			erase(cur);
			if (pre[cur] !== -1) cur = pre[cur];
			break;
		case "P":
			insert(cur, operand);
			if (nxt[cur] !== -1) cur = nxt[cur];
			break;
	}
	// traverse();
}

traverse();

function traverse() {
	// process.stdout.write(cur + " ");
	for (let i = nxt[0]; i !== -1; i = nxt[i]) {
		process.stdout.write(dat[i]);
	}
	console.log("");
}

function erase(addr) {
	//앞의 원소
	nxt[pre[addr]] = nxt[addr];
	//뒤의 원소
	if (nxt[addr] === -1) pre[nxt[addr]] = pre[addr];
	return;
}

function insert(addr, val) {
	//새로운 원소 생성
	dat[unused] = val;
	pre[unused] = addr;
	nxt[unused] = nxt[addr];

	//뒤의 원소와 연결
	if (nxt[addr] === -1) {
		pre[nxt[addr]] = unused;
	}
	//앞의 원소와 연결
	nxt[addr] = unused;

	unused++;
}
