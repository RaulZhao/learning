Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

```js
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = [];

    dp[0] = 0;
    for(let i=1; i <= n; i++) {
        dp[i] = Number.MAX_VALUE;
    }
    for(let i=1; i*i <= n; i++) {
        dp[i*i] = 1;
    }

    for(let sub=1; sub < n; sub++) {
        for(let j=1; sub+j*j <=n; j++) {
            dp[sub + j * j] = Math.min(dp[sub + j * j], dp[sub] + 1);
        }
    }
    return dp[n];
};
```
