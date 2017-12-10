Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".

# DP
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const res = [];
    const wordLen = s.length;

    if (wordDict.indexOf(s[0]) >= 0) {
        res[0] = 1;
    } else {
        res[0] = 0;
    }

    for(let i=1; i < wordLen; i++) {
        res[i] = 0;
        if(wordDict.indexOf(s.slice(0, i+1)) >= 0) {
            res[i] = 1;
        } else {
            for(let j=0; j < i; j++) {
                if(res[j] && wordDict.indexOf(s.slice(j+1, i+1)) >= 0) {
                    res[i] = 1;
                }
            }
        }
    }
    return Boolean(res[wordLen-1]);
};
```

# greedy
```js
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
  let len = s.length;
 	let result = false;

 	checkWord(s, 0);
  return result;

 	function checkWord(str, start) {
 		if (start >= len) {
 			result = true;
 			return true;
 		}
 		for(let i=start; i < len; i++) {
 			if (wordDict.indexOf(str.substring(start, i+1)) > -1) {
 				if (checkWord(str, i+1)) {
 					return true;
 				}
 			}
 		}
 		return false;
 	}
 };
```
