Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let preRow = [1];
    let currRow = [];

    for(let i=1; i <= rowIndex; i++) {
        currRow = [];
        currRow.push(1);
        for(let j=1; j < preRow.length; j++) {
            currRow.push(preRow[j] + preRow[j-1]);
        }
        currRow.push(1);
        preRow = currRow;
    }

    return preRow;
};
```
