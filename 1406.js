let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const text = input[0].split("");
const N = parseInt(input[1]);
// console.log(text, N);

const MX = 100000 + 5;
const dat = new Array(MX).fill(0);
const pre = new Array(MX).fill(-1);
const nxt = new Array(MX).fill(-1);
let unused = 1;

let cur = 0;
for (let i = 0; i < text.length; i++) {
	insert(cur, text[i]);
	cur++;
}

// console.log(dat.slice(0, text.length + 1));
// console.log(pre.slice(0, text.length + 1));
// console.log(nxt.slice(0, text.length + 1));

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
			if (pre[cur] !== -1) {
				erase(cur);
				cur = pre[cur];
			}
			break;
		case "P":
			insert(cur, operand);
			cur = nxt[cur];
			break;
	}
	// traverse();
}

traverse();

function traverse() {
	// process.stdout.write(cur + " ");
	let ret = "";
	for (let i = nxt[0]; i !== -1; i = nxt[i]) {
		ret += dat[i];
		// process.stdout.write(dat[i]);
	}
	console.log(ret);
}

function erase(addr) {
	//앞의 원소
	nxt[pre[addr]] = nxt[addr];
	//뒤의 원소
	if (nxt[addr] !== -1) {
		pre[nxt[addr]] = pre[addr];
	}
}

function insert(addr, val) {
	//새로운 원소 생성
	dat[unused] = val;
	pre[unused] = addr;
	nxt[unused] = nxt[addr];

	//뒤의 원소와 연결
	if (nxt[addr] !== -1) {
		pre[nxt[addr]] = unused;
	}
	//앞의 원소와 연결
	nxt[addr] = unused;

	unused++;
}
