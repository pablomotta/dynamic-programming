// Brute force
const allConstructBrute = (target, wordBank) => {
    if (target === "") return [[]];

    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const sufixWays = allConstructBrute(suffix, wordBank);
            const targetWays = sufixWays.map((way) => [word, ...way]);
            result.push(...targetWays);
        }
    }
    return result;
};
console.log("**************************");
console.log("************* Brute Force *************");
console.log(allConstructBrute("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    allConstructBrute("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
    allConstructBrute("skateboard", [
        "bo",
        "rd",
        "ate",
        "t",
        "ska",
        "sk",
        "boar",
    ])
);
// console.log(
//     allConstructBrute("aaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
//         "a",
//         "aa",
//         "aaa",
//         "aaaa",
//         "aaaaa",
//     ])
// ); //really slow...

// Memoized
const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    let result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const sufixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = sufixWays.map((way) => [word, ...way]);
            result.push(...targetWays);
        }
    }
    memo[target] = result;
    return result;
};
console.log("**************************");
console.log("************* Memoized *************");
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
    allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
    allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
        "a",
        "aa",
        "aaa",
        "aaaa",
        "aaaaa",
    ])
); //really slow...

//Big O

// O(n^m) time
// O(m) space
