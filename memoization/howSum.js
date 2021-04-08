const howSumBrute = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSumBrute(remainder, numbers);
		if (remainderResult !== null) {
			return [...remainderResult, num];
		}
	}
	return null;
};

/* 

m = targetSum
n = numbers.length

time= O(n^m * m)
space= 0(m)

*/

console.log(howSumBrute(7, [2, 3]));
console.log(howSumBrute(7, [5, 3, 4, 7]));
console.log(howSumBrute(7, [2, 4]));
console.log(howSumBrute(8, [2, 3, 5]));
// console.log(howSumBrute(300, [7, 14])); // really slow..
console.log('********************** MEMOIZED ***********************');

// Memoized
const howSum = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum(remainder, numbers, memo);
		if (remainderResult !== null) {
			memo[targetSum] = [...remainderResult, num];
			return memo[targetSum];
		}
	}
	memo[targetSum] = null;
	return memo[targetSum];
};

/* 

m = targetSum
n = numbers.length

time= O(n * m^2)
space= 0(m2)

*/

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14])); // really slow..
