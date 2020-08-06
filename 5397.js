/* Date: 2020-08-06 Thu 13:11
1st try:  1h 14m 13s
Comment: 
1. 야매리스트는 연결리스트 Node의 prevNode와 nextNode의 주소인 dat배열의 index를
각각 pre, nxt 배열에 기록해둔 것이다.
2. editor에서 커서의 위치(pos)는 그 글자를 가르킨다. 예외적으로 가장 앞에 있는 경우, 연결리스트의 head(index: 0)을 가르킨다고 생각하면 된다.
3. insert: 주어지는 parameter addr은 커서의 위치이다. 이를 잘 생각해보면, addr 뒤에 새로운 node를 붙여야 한다는 걸 깨달을 수 있다.
4. remove: pos위치의 글자를 삭제. 다만, pos가 0일때(head를 가르킬때)는 동작되지 않도록 하여야 한다. 왜나하면 pos0은(head는)}아무런 글자를 가지고 있지 않기 때문이다.
6. head: pos === 0 또는 pre[addr] === -1
tail: nxt[addr] === -1
*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");
let T = Number(input[0]);

const MX = 1000000 + 5;
let pre = new Array(MX).fill(-1);
let nxt = new Array(MX).fill(-1);
let dat = new Array(MX);

let unused = 1;
let pos = 0;

const insert = (val, addr) => {
	dat[unused] = val;
	pre[unused] = addr;
	nxt[unused] = nxt[addr];

	if (nxt[addr] !== -1) pre[nxt[addr]] = unused;
	nxt[addr] = unused;

	unused++;
};

const remove = (addr) => {
	// pos !== 0
	if (pre[addr] !== -1) {
		nxt[pre[addr]] = nxt[addr];
		if (nxt[addr] !== -1) pre[nxt[addr]] = pre[addr];
	}
};

const next = () => {
	if (nxt[pos] !== -1) pos = nxt[pos];
};
const prev = () => {
	if (pre[pos] !== -1) pos = pre[pos];
};

const print = () => {
	let ret = "";
	let curr = nxt[0];
	while (curr !== -1) {
		ret += dat[curr];
		curr = nxt[curr];
	}
	console.log(ret);
};

for (let t = 1; t <= T; t++) {
	let line = input[t];
	pre.fill(-1);
	nxt.fill(-1);
	dat.fill(-1);
	unused = 1;
	pos = 0;

	// console.log("line", line);

	for (let i = 0; i < line.length; i++) {
		// console.log("pos(before)", pos);
		// console.log(line[i]);
		if (line[i] === "<") {
			prev();
		} else if (line[i] === ">") {
			next();
		} else if (line[i] === "-") {
			if (pos !== 0) {
				remove(pos);
				prev(pos);
			}
		} else {
			insert(line[i], pos);
			next(pos);
		}
		// console.log("pos(after)", pos);
	}

	print();
}
