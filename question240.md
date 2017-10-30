Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if(m < 1) {
        return false;
    }
    let n = matrix[0].length;

    let i = 0;
    let j = n-1;
    while(i < m && j >= 0) {
        if(matrix[i][j] == target) {
            return true;
        } else if (target < matrix[i][j]) {
            j--;
        } else {
            i++;
        }
    }
    return false;
};
```
