Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.


Example:

Input: "cbbd"
Output: "bb"

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const scannedList = {};
    let start = 0;
    let end = 0;

    for(let i = 1; i < s.length; i++ ) {
        for (let j = i; j > -1; j--) {
            if (s[i] === s[j] && (i-j <3 || scannedList[(j+1)+","+(i-1)])) {
                if (end - start <= i - j) {
                    start = j;
                    end = i;
                }
                scannedList[(j)+","+(i)] = 1;
            }
        }
    }
    return s.substring(start, end + 1);
};
```
