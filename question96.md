Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

```js
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const C = [];
    let temp;
    C[0] = 1;
    C[1] = 1;
    if(n < 2) {
        return 1;
    }

    for(let num=2; num <= n; num++) {
        temp = 0;
        for(let i=0; i < num; i++) {
            temp = temp + C[i]*C[num-i-1];
        }
        C[num] = temp;
    }
    return C[n];
};
```
