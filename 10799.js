const { PassThrough } = require("stream");
/* 
Date: 2020-08-06 Thu
1st try: 9m 29s
Comment: 
 */
const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.replace(/(\(\))/g, "-");
// console.log(input);

let stack = 0;
let answer = 0;
for (let i = 0; i < input.length; i++) {
	if (input[i] === "(") stack++;
	else if (input[i] === ")") {
		stack--;
		answer++;
	} else if (input[i] === "-") answer += stack;
}
console.log(answer);
