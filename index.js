const canConstruct = (target, wordBank) => {
    return false;
};

console.log("*******************************************************");
console.log("********************* MEMOIZED ************************");
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
    canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
    canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
    ])
);

///////////  Big O  //////////
// m = target.length
// n = wordBank.length

// time = O(n * m^2)
// space = O(m^2)
