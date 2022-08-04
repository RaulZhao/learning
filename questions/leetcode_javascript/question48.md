You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    const copy = [];

    for(let k=0; k < n; k++) {
        copy[k] = matrix[k].slice(0);
    }

    for(let i=0; i < n; i++) {
        for(let j = n - 1; j >=0; j--) {
            matrix[i][n - 1 -j] = copy[j][i];
        }
    }
};
```
