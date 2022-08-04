Write a function to find the longest common prefix string amongst an array of strings.

Subscribe to see which companies asked this question.

```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0];
    let common = "";
    let currentChar = "";

    if (first === undefined) {
        return common;
    }

    for(let i = 0; i < first.length; i++) {
        currentChar = first[i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].charAt(i) !== currentChar) {
                return common;
            }
        }
        common = common + currentChar;
    }
    return common;
};
```
