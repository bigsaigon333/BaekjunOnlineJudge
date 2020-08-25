/* 
Date: 2020-08-25 Tue 21:16
1st try: 4m 43s >> 통과
Comment: 본질을 꿰뚫는 건 언제나 어렵구나. 이게 사실은 피보나치 수열과 똑같다는 걸 어떻게 바로 깨달을까...
 */

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const d = Array(N + 1).fill(0);

d[0] = 1;
d[1] = 1;

for (let i = 2; i <= N; i++) {
	d[i] = (d[i - 1] + d[i - 2]) % 10007;
}

console.log(d[N]);
