// Brute force
const gridTravelerBrute = (m, n) => {
	if (m === 1 || n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	return gridTravelerBrute(m - 1, n) + gridTravelerBrute(m, n - 1);
};

console.log('brute-  ', gridTravelerBrute(1, 1));
console.log('brute-  ', gridTravelerBrute(2, 3));
console.log('brute-  ', gridTravelerBrute(3, 2));

// console.log(gridTravelerBrute(18, 18));

console.log('**************************************');

// Optimized via memoization

const gridTraveler = (m, n, memo = {}) => {
	// are the arguments in the memo?
	const key = m + ',' + n;
	if (key in memo) return memo[key];
	if (m === 1 || n === 1) return 1;
	if (m === 0 || n === 0) return 0;

	memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
	return memo[key];
};

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(18, 18));
