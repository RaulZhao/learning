Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

a) Insert a character
b) Delete a character
c) Replace a character

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const arr = [];
    const m = word1.length;
    const n = word2.length;
    let result = Number.MAX_VALUE;

    for(let i=0; i <= m; i++) {
        arr.push([]);
        arr[i][0] = i;
    }
    for(let i=0; i <=n; i++) {
        arr[0][i] = i;
    }

    for(let i=1; i <= m; i++) {
        for(let j=1; j <=n; j++) {
            let diagonalVal = word1[i-1] === word2[j-1] ? arr[i-1][j-1] : arr[i-1][j-1] + 1;
            arr[i][j] = Math.min(diagonalVal, arr[i-1][j] + 1, arr[i][j-1] + 1);
        }
    }
    return arr[m][n];
};
```
