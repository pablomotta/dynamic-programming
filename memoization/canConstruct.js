// Brute Forced
const canConstructBrute = (target, wordBank) => {
	if (target === '') return true;

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstructBrute(suffix, wordBank) === true) return true;
		}
	}

	return false;
};

console.log('**********************************************************');
console.log('********************* BRUTE FORCE ************************');
console.log(canConstructBrute('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	canConstructBrute('skateboard', [
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
	canConstructBrute('enterapotentpot', [
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
// 	canConstructBrute('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
// 		'e',
// 		'ee',
// 		'eee',
// 		'eeee',
// 		'eeeee',
// 		'eeeeee',
// 	])
// ); ... very slow

///////////  Big O  //////////
// m = target.length
// n = wordBank.length

// time = O(n^m *m)
// space = O(m^2)

// Memoized
const canConstruct = (target, wordBank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target === '') return true;

	for (let word of wordBank) {
		if (target.indexOf(word) === 0) {
			const suffix = target.slice(word.length);
			if (canConstruct(suffix, wordBank, memo) === true) {
				memo[target] = true;
				return true;
			}
		}
	}
	memo[target] = false;
	return false;
};

console.log('*******************************************************');
console.log('********************* MEMOIZED ************************');
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(
	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
);
console.log(
	canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
);
console.log(
	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
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
// space = O(m^2)///////////  Big O  //////////
// m = target.length
// n = wordBank.length

// time = O(n^m *m)
// space = O(m^2)
