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

DP
```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const n = s.length;
    const dp = [];
    for(let k=0; k < n; k++) {
        dp[k] = [];
    };
    dp[0][0] = 1;
    const res = [1, 0, 0];

    for (let j=1; j < n; j++) {
        for (let i=j; i >= 0; i--) {
            if(i === j) {
                dp[i][j] = 1;
            } else if ((i+1) === j) {
                if(s[i] === s[j]) {
                    dp[i][j] = 2;
                    if(res[0] < 2) {
                        res[0] = 2
                        res[1] = i;
                        res[2] = j;
                    }
                } else {
                    dp[i][j] = 1;
                }
            } else if ((i+2) === j) {
                if(s[i] === s[j]) {
                    dp[i][j] = 3;
                    if(res[0] < 3) {
                        res[0] = 3
                        res[1] = i;
                        res[2] = j;
                    }
                } else {
                    dp[i][j] = 1;
                }
            } else {
                if(s[i] === s[j] && (dp[i+1][j-1] > 1)) {
                    dp[i][j] = dp[i+1][j-1] + 2;
                    if(res[0] < dp[i][j]) {
                        res[0] = dp[i][j]
                        res[1] = i;
                        res[2] = j;
                    }
                } else {
                    dp[i][j] = 1;
                }
            }
        }
    }
    return s.substring(res[1], res[2] + 1)
};
```
