/* Date: 2020-08-27 Thu 02:03
1st try: 15m 56s >>
Comment: 
1. 돌다리도 두들겨보고 건너자. 구현을 바로 하지말고, 시간복잡도와 공간복잡도를 따진 다음에 구현에 나서자. 
2. 그나마 자신 있다고 생각한게 수학이었는데... 자만하지 말자
*/

let N = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";
let i = 2;
while (N > 1) {
	while (N % i === 0) {
		answer += i + "\n";
		N /= i;
	}
	i++;
}
console.log(answer);
