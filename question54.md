Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5]

```js
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) {
        return matrix;
    }
    const result = [];
    const m = matrix.length;
    const n = matrix[0].length;
    const level = Math.floor((Math.min(m, n) + 1) / 2);

    for(let l = 0; l < level; l++) {
        if (l === n-l-1) {
            for(let i=l; i <= m-l-1; i++) {
                result.push(matrix[i][l]);
            }
            break;
        } else if(l === m-l-1) {
            for(let i=l; i <= n-l-1; i++) {
                result.push(matrix[l][i]);
            }
            break;
        } else {
            for(let i=l; i < n-l-1; i++) {
                result.push(matrix[l][i]);
            }
            for(let i=l; i < m-l-1; i++) {
                result.push(matrix[i][n-l-1]);
            }
            for(let i=n-l-1; i > l; i--) {
                result.push(matrix[m-l-1][i]);
            }
            for(let i=m-l-1; i > l; i--) {
                result.push(matrix[i][l]);
            }
        }
    }

    return result;
};
```
