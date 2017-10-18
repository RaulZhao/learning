Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 4.

```js
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const dp = [];
    dp[0] = [];
    const m = matrix.length;
    if (m == 0) {
        return 0;
    }
    const n = matrix[0].length;
    let maxVal = 0;

    for(let j=0; j < n; j++) {
        dp[0][j] = matrix[0][j] == 1 ? 1 : 0;
        maxVal = Math.max(dp[0][j], maxVal);
    }

    for(let i=1; i < m; i++) {
        dp[i] = [];
        for(let j=0; j < n; j++) {
            if(j == 0) {
                dp[i][j] = matrix[i][j] == 1 ? 1 : 0;
            } else {
                if(matrix[i][j] == 1) {
                    dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1;
                } else {
                    dp[i][j] = 0;
                }
            }
            maxVal = Math.max(dp[i][j], maxVal);
        }
    }
    return Math.pow(maxVal, 2);
};
```
