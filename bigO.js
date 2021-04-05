// O(n) time
// O(n) space
const foo = (n) => {
	if (n <= 1) return;
	foo(n - 1);
};

// O(n) time
// O(n) space
const bar = (n) => {
	if (n <= 1) return;
	bar(n - 2);
};
