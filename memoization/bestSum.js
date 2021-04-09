const bestSumBrute = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumBrute(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (
                shortestCombination === null ||
                combination.length < shortestCombination.length
            ) {
                shortestCombination = combination;
            }
        }
    }
    return shortestCombination;
};

// m = target sum
// n numbers.length

// Brute Force
// time: O(n^m*m)
// space: O(m^2)

console.log(bestSumBrute(7, [5, 3, 4, 7]));
console.log(bestSumBrute(8, [2, 3, 5]));
console.log(bestSumBrute(8, [1, 4, 5]));
// console.log(bestSumBrute(100, [1, 2, 5, 25]));

console.log("********************** MEMOZIED ***********************");

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (
                shortestCombination === null ||
                combination.length < shortestCombination.length
            ) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

// Memoized

// m = target sum
// n numbers.length

// Brute Force
// time: O(m^2 * n)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
