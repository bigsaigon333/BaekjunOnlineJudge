const N = 100000;

console.log(1);
console.log(N);

for (let i = 1; i <= N; i++) {
	process.stdout.write((i % N) + 1 + " ");
}
