Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.

```js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1) {
        return 0;
    }
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = [];

    for(let i=0; i < m; i++) {
        dp.push([]);
        if(i === 0) {
            dp[i][0] = 1;
        } else {
            if(obstacleGrid[i][0] === 1) {
                dp[i][0] = 0;
            } else {
                dp[i][0] = dp[i-1][0];
            }
        }
    }

    for(let j=0; j < n; j++) {
        if(j === 0) {
            dp[0][j] = 1;
        } else {
            if(obstacleGrid[0][j] === 1) {
                dp[0][j] = 0;
            } else {
                dp[0][j] = dp[0][j-1];
            }
        }
    }

    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};
```
