// Brute Force
const countConstructBrute = (target, wordBank) => {
	if (target === '') return 1;

	let totalCount = 0;
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const numWaysForRest = countConstructBrute(
				target.slice(word.length),
				wordBank
			);
			totalCount += numWaysForRest;
		}
	}
	return totalCount;
};

console.log('*******************************************************');
console.log('********************* BRUTE FORCE ************************');
console.log(countConstructBrute('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstructBrute('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	countConstructBrute('skateboard', [
		'bo',
		'rd',
		'ate',
		't',
		'ska',
		'sk',
		'boar',
	])
);
console.log(
	countConstructBrute('enterapotentpot', [
		'a',
		'p',
		'ent',
		'enter',
		'ot',
		'o',
		't',
	])
);

// console.log(
// 	countConstructBrute('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
// 		'e',
// 		'ee',
// 		'eee',
// 		'eeee',
// 		'eeeee',
// 		'eeeeee',
// 	])
// );

///////////  Big O  //////////
// m = target.length
// n = wordBank.length

// time = O(n^m *m)
// space = O(m^2)

// Memoized
const countConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return 1;

	let totalCount = 0;
	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const numWaysForRest = countConstruct(
				target.slice(word.length),
				wordBank,
				memo
			);
			totalCount += numWaysForRest;
		}
	}
	memo[target] = totalCount;
	return totalCount;
};

console.log('*******************************************************');
console.log('********************* MEMOIZED ************************');
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
	countConstruct('enterapotentpot', [
		'a',
		'p',
		'ent',
		'enter',
		'ot',
		'o',
		't',
	])
);

console.log(
	countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
		'e',
		'ee',
		'eee',
		'eeee',
		'eeeee',
		'eeeeee',
	])
);

///////////  Big O  //////////
// m = target.length
// n = wordBank.length

// time = O(n * m^2)
// space = O(m^2)
