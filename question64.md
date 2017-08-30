Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length < 1) {
        return 0;
    }

    const m = grid.length;
    const n = grid[0].length;
    const result = [];
    result.push([grid[0][0]]);

    for(let i=1; i<m; i++) {
        result.push([]);
        result[i][0] = result[i-1][0] + grid[i][0];
    }
    for(let j=1; j<n; j++) {
        result[0][j] = result[0][j-1] + grid[0][j];
    }
    
    for(let i=1; i<m; i++) {
        for(let j=1; j<n; j++) {
            result[i][j] = grid[i][j] + Math.min(result[i-1][j], result[i][j-1]);
        }
    }
    return result[m-1][n-1];
};
```
