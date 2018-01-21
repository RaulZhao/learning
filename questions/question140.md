Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.

Return all such possible sentences.

For example, given
s = "catsanddog",
dict = ["cat", "cats", "and", "sand", "dog"].

A solution is ["cats and dog", "cat sand dog"].

```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const dp = [];

    for(let i=0; i<s.length; i++) {
        dp[i] = [];
        if(wordDict.indexOf(s.slice(0,i+1)) >= 0) {
            dp[i].push(s.slice(0,i+1));
        }
        let j = 0;

        while(j < i) {
            if(dp[j].length > 0 && wordDict.indexOf(s.slice(j+1,i+1)) >= 0) {
                dp[j].forEach((val) => {
                    dp[i].push(val + " " + s.slice(j+1,i+1));
                });
            }
            j++;
        }
    }

    return dp[s.length-1];
};
```
