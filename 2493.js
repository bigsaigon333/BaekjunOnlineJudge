/* 2020-08-04 Tue 14:28
1st try : 40m22s  >> 시간초과
2nd try: 30m22s >> 통과!
입출력이 가장 시간이 많이 소요된다는 기본적인 사실을 잊으면 안된다.
매번 출력하지 않고,  string에 저장해 두었다가 한번에 출력함으로써 시간초과 해결
*/
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input[0]);
const MX = 500000 + 5;
const nums = input[1].split(" ");
const stack = new Array(MX);
let pos = 0;

// console.log(nums);

let answer = "";
for (let i = 0; i < N; i++) {
	// console.log("stack", stack);
	let height = parseInt(nums[i]);

	while (pos > 0 && stack[pos - 1].h < height) {
		pos--;
	}
	if (pos === 0) answer += "0 ";
	else answer += stack[pos - 1].i + " ";

	stack[pos++] = { h: height, i: i + 1 };
	// console.log("");
}
process.stdout.write(answer);
