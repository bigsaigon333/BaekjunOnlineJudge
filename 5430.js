/* 
Date: 2020-08-05 Wed 17:27
1st try: 1h05m
Comment: 수많은 에러들 발생으로 중도포기.. 

Date: 2020-08-06 Thu 00:52
2nd try: 19m06s
Comment: 양끝에서 입력이 이루어지지 않고 출력만 이루어진다는 사실을 고려하여 단순하게 생각.
하나의 수식으로 다 해결하려 하지말고, 정방향, 역방향일때 나눠서 각각 if문을 쓰게끔 수정.
q가 비어있을 경우, error가 아니라면 []을 출력해야 하게끔 조정
*/

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

let N = Number(input[0]);
let MX = 100000;
let t = 1;
let dq = new Array(2 * MX + 5).fill(0);
let head = MX;
let tail = MX - 1;
while (N--) {
	let commands = input[t++];
	// console.log("commands", commands);
	let n = Number(input[t++]);
	// console.log("original", input[t]);
	let list = input[t++].match(/(\d+)/g);
	// console.log("converted", list);
	head = MX;
	tail = MX - 1;

	let one = 1;
	if (list !== null) {
		for (i = 0; i < list.length; i++) {
			dq[++tail] = list[i];
		}
	}

	const print = () => {
		let ret = "[";
		if (one === 1) {
			for (let i = head; i <= tail; i++) {
				ret += dq[i];
				if (i !== tail) ret += ",";
			}
		} else if (one === -1) {
			for (let i = tail; i >= head; i--) {
				ret += dq[i];
				if (i !== head) ret += ",";
			}
		}
		ret += "]";
		return ret;
	};
	let ret = "";
	for (let i = 0; i < commands.length; i++) {
		let op = commands[i];
		if (op === "R") {
			one *= -1;
		} else if (op === "D") {
			if (tail < head) {
				ret = "error";
				break;
			} else {
				if (one === 1) {
					head++;
				} else if (one === -1) {
					tail--;
				}
			}
		}
	}

	if (ret === "") ret = print();
	console.log(ret);
}
