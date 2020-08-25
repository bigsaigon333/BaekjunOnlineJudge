/* Date: 2020-08-25 Tue 00:31
1st try: 10m 33s
Comment: DP라는걸 알고 풀어서 쉽게 풀었는데, 이걸 처음 보았을때 DP라는걸 바로 알아챌 수 있을까?
 */

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const count = Array(N + 1).fill(0);
count[1] = 0;

for (let i = 2; i <= N; i++) {
	/*  My Original Code
	if (i * 3 <= N) count[i * 3] = Math.min(count[i * 3], count[i] + 1);
	if (i * 2 <= N) count[i * 2] = Math.min(count[i * 2], count[i] + 1);
	if (i + 1 <= N) count[i + 1] = Math.min(count[i + 1], count[i] + 1);
	 */

	count[i] = count[i - 1] + 1;
	if (i % 2 === 0) count[i] = Math.min(count[i], count[i / 2] + 1);
	if (i % 3 === 0) count[i] = Math.min(count[i], count[i / 3] + 1);
}

console.log(count[N]);
