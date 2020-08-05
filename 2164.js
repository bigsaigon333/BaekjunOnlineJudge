/* Date: 2020-08-05 Wed 16:20
1st try: 16m41s >> 통과
Comment: Javascript 기본 Array의 shift(), unshift() 는  O(N)이므로 이를 그대로 쓸 경우에는 N이 커질때 매우 느려지게 됨에 주의 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log(N);
const MX = 500000;
let head = 0;
let tail = N;

const q = new Array(2 * MX);
for (let i = 0; i < N; i++) {
	q[i] = i + 1;
}

while (tail - head > 1) {
	head++;
	q[tail++] = q[head++];
}
console.log(q[head]);
