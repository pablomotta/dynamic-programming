## Memoization Recipe

1. Make it work. Come up with a brute-force solution using recursion. The focus here is correctness. Here are some steps for a brute force solution:

    - Visualize the problem as a tree. The gist is to break down larger problems into smaller instance of the same problem. The nodes of the tree should represent a problem
      when you draw an edge between nodes that should be shrinking the size of the problem.
    - Implement the tree using recursion. Think about the laves of the tree as your base cases. Once you have the baseline recursion, that's your brute-force solution.
    - Test it.

2. Make it efficient
    - Add a memo object. The memo object needs to keys that represent the arguments to our function and the value of those keys represent the return value of the function calls. Make sure that this object is shared among all the recursive calls. You can do that by having a default empty object as a parameter (argument) of the function.
    - Add a base case to return memo values
    - store return values into the memo.
