// Memoized
const canConstruct = (target, wordBank) => {
	let table = new Array(target.length + 1).fill(false);
	table[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (table[i] === true) {
			for (let word of wordBank) {
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true;
				}
			}
		}
	}
	return table[target.length];
};

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
// space = O(m)
