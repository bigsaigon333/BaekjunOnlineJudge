/* 
Date: 2020-08-06 Thu 14:38
1st try: 41m 10s >> X
Comment: [] => 3. () => 2 로 치환하고 시작하는게 편한듯. ] 또는 ) 이 왔을때 pop을 두번 해도 되는게 맞는가? 조금 의문이 든다.

2nd try: 12m 45s >> 통과
Comment: Validation과 계산을 동시에 하려니 복잡해지는 것 같아서  validation 먼저 하고 valid한 경우에 숫자계산을 하도록 로직 추가
 */

let input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	// .replace(/(\[\])/g, 3)
	// .replace(/(\(\))/g, 2)
	.split("");
// console.log(input);
const stack = [];
let answer = 0;

//validation check
for (let i = 0; i < input.length; i++) {
	const c = input[i];
	if (c === "(" || c === "[") stack.push(c);
	else if (c === "]" && stack.pop() !== "[") {
		console.log(0);
		return;
	} else if (c === ")" && stack.pop() !== "(") {
		console.log(0);
		return;
	}
}
if (stack.length !== 0) {
	console.log(0);
	return;
}

input = input
	.join("")
	.replace(/(\[\])/g, 3)
	.replace(/(\(\))/g, 2)
	.split("");
// console.log(input);

for (let i = 0; i < input.length; i++) {
	const c = input[i];

	if (c === "(" || c === "[") stack.push(c);
	else if (c === ")") {
		let val = stack.pop() * 2;
		stack.pop();
		stack.push(val);
	} else if (c === "]") {
		let val = stack.pop() * 3;
		stack.pop();
		stack.push(val);
	} else {
		stack.push(Number(c));
	}
	if (stack.length > 0) {
		let sum = 0;
		while (stack.length > 0 && Number.isInteger(stack[stack.length - 1])) {
			sum += stack.pop();
		}
		if (sum !== 0) stack.push(sum);
	}
	// console.log(stack);
}

console.log(stack.pop());
