const rec = (n) => {
	if (n === 0) return;
	rec(n - 1);
};

rec(100000);
console.log("done");
