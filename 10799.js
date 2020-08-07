/* 
Date: 2020-08-06 Thu
1st try: 9m 29s >> 통과
Comment:  프로그래머스에서 풀었던 문제 응용하여 해결. ()이 절단이라는 걸 명시적으로 표현하기 위해 regex 사용하여 '-'로 치환
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
