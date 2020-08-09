/* 
Date: 2020-08-09 Sun 13:47
1st try: 8m 02s
Comments:
1. N개의 원반을 1->3 으로 옮기려면, N-1개의 원반을 1->2로 옮기고, N번원반을 1->3 으로 옮기고, N-1개의 원반을 2->3으로 옮기면 된다. 
이를 귀납적으로 잘 구현하면 됨.
2. 최소이동횟수는 등비수열의 합으로 구해도 되고, 아래와 같이 옮길때마다 count++ 해서 구해도 됨.
 */

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = "";
let count = 0;

const rec = (n, from, to) => {
	if (n === 0) return;

	rec(n - 1, from, 6 - (from + to));

	count++;
	answer += from + " " + to + "\n";

	rec(n - 1, 6 - (from + to), to);
};

rec(N, 1, 3);
console.log(count);
console.log(answer);
