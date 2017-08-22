Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.

```js
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result = 0;
    let temp = [];

    function solve(row) {
        if (row === n) {
            result++;
            return;
        }
        for(let column = 0; column < n; column++) {
            let isOK = true;

            for(let i=0; i < row; i++) {
                let isSameColumn = temp[i] === column;
                let isSameDiagonal = Math.abs(row - i) === Math.abs(temp[i] - column);

                if (isSameColumn || isSameDiagonal) {
                    isOK = false;
                    break;
                }
            }
            if (isOK) {
                temp.push(column);
                solve(row + 1);
                temp.pop();
            }
        }
    }

    solve(0);
    return result;

};
```
