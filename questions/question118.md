Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    let currentRow = [];

    for(let i=0; i < numRows; i++) {
        if (i == 0) {
           result[0] = [1];
        } else {
            currentRow = [];
            currentRow.push(1)
            for(let j=1; j < result[i-1].length; j++) {
                currentRow.push(result[i-1][j] + result[i-1][j-1]);
            }
            currentRow.push(1);
            result.push(currentRow.slice(0));
        }
    }
    return result;
};
```
