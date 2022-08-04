Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.

```js
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) {
        return false;
    }
    let stringArr1 = s1.split('');
    let stringArr2 = s2.split('');

    function dfs(arr1, arr2, str, index) {
        if(index >= str.length) {
            return arr1.length == 0 && arr2.length == 0;
        }
        if(arr1[0] === str[index]) {
            let curr1 = arr1.shift();
            if(dfs(arr1, arr2, str, index+1)) {
                return true;
            }
            arr1.unshift(curr1);
        }
        if(arr2[0] === str[index]) {
            let curr2 = arr2.shift();
            if(dfs(arr1, arr2, str, index+1)) {
                return true;
            }
            arr2.unshift(curr2);
        }
        return false;
    }

    return dfs(stringArr1, stringArr2, s3, 0);
};


//DP: f(i,j) = (f(i-1,j) && s1(i) == s3(i+j)) || (f(i,j-1) && s2(j) == s3(i+j))
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) {
        return false;
    }
    const dp = [[]];
    dp[0][0] = true;

    for(let j=1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j-1] && (s3[j-1] === s2[j-1]);
    }
    for(let i=1; i <= s1.length; i++) {
        dp.push([]);
        dp[i][0] = dp[i-1][0] && (s3[i-1] === s1[i-1]);
    }

    for(let i=1; i <= s1.length; i++) {
        for(let j=1; j <= s2.length; j++) {
            let subResult1 = dp[i-1][j] && (s1[i-1] === s3[i+j-1]);
            let subResult2 = dp[i][j-1] && (s2[j-1] === s3[i+j-1]);
            dp[i][j] = subResult1 || subResult2;
        }
    }
    return dp[s1.length][s2.length];
};
```
