/* Date: 2020-08-28 Fri 01:16
1st try: 11m 35s >> 통과
Comment: 조합을 생성하는 문제였다. 핵심은 앞 level에서 쓰여졌던 모든 숫자는 더이상 쓸 수 없다는 점을 고려하여,
재귀함수에 pos이후 숫자만 사용할 수 있게끔 수정하였다. 또한 순서가 없다보니 base condition에서 쉽게 프린트 할 수 있었다.
순열 같은 경우에는 순서가 중요하기 때문에, 이를 고려하여 값을 담는 별도의 배열을 마련하여야 한다 */

let [N, M] = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split(" ");

N = Number(N);
M = Number(M);

let isused = Array(N + 1).fill(false);

const print = () => {
	for (let i = 1; i <= N; i++) {
		if (isused[i]) {
			process.stdout.write(i + " ");
		}
	}

	console.log("");
};

const rec = (pos, lev) => {
	if (lev === M) {
		print();
		return;
	}

	for (let i = pos; i <= N; i++) {
		if (isused[i]) continue;
		isused[i] = true;
		rec(i + 1, lev + 1);
		isused[i] = false;
	}
};

rec(1, 0);
