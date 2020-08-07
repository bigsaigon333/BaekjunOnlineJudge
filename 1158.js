/* 
Date: 2020-08-07 Fri 15:48
1st try: 22m 44s >> 통과
Comments: 1. insert(val, addr): addr 뒤에 새로운 노드가 추가된다. 뒤의 Node에 먼저 새로운 노드를 추가한 다음에, 앞의 Node에 새로운 노드를 추가하자. 그러지 않으면, 앞 Node의 nxt값이 이미 새로운 노드로 변형되어 뒷 Node를 찾을 수 없게 된다.
2. 원형리스트 구현시 마지막 Node가 처음 Node를 가르키게끔 최초에 설정하고 나면, 나머지는 insert, remove에 의해 자동으로 이어지게 되어 있다.
 */

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");
const N = Number(input[0]);
const K = Number(input[1]);

const MX = 5000 + 5;
// const MX = N + 1;
const dat = new Array(MX).fill(0);
const pre = new Array(MX).fill(-1);
const nxt = new Array(MX).fill(1);
let unused = 1;
let pos = 0;

const insert = (val, addr) => {
	// console.log("val addr", val, addr);
	dat[unused] = val;
	pre[unused] = addr;
	nxt[unused] = nxt[addr];

	if (nxt[addr] !== -1) pre[nxt[addr]] = unused;
	nxt[addr] = unused;

	unused++;
};

const remove = (addr) => {
	nxt[pre[addr]] = nxt[addr];
	pre[nxt[addr]] = pre[addr];

	pos = pre[addr];
};

const next = () => {
	pos = nxt[pos];
};

// console.log("Before");
// console.table(dat);
// console.table(pre);
// console.table(nxt);
for (let i = 0; i < N; i++) {
	insert(i + 1, i);
	// console.log(i);
	// console.table(dat);
	// console.table(pre);
	// console.table(nxt);
}

let answer = "<";
for (let n = 0; n < N; n++) {
	for (let i = 0; i < K; i++) next();
	// console.log("pos", pos);

	if (answer === "<") answer += dat[pos];
	else answer += ", " + dat[pos];
	remove(pos);
}
answer += ">";
console.log(answer);
