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
    // wordDict.sort((a, b) => a.length < b.length);
    let res = false;

    function findWord(dictArr, word, wordLen) {
        let dicts = dictArr.slice(0);
        if(wordLen < 1) {
            res = true;
            return true;
        }
        if(dicts.length < 1) {
            return false;
        }
        let dictLen = dicts.length;

        for(let i=0; i < dictLen; i++) {
            let currentDict = dicts.shift();
            let currentWord = word;
            let currentWordLen = wordLen;
            if (currentWord.length >= currentDict.length) {
                for(let i=0; i <= currentWord.length - currentDict.length; i++) {
                    let splitStr = currentWord.slice(i, i + currentDict.length);
                    if(currentDict === splitStr) {
                        currentWord = currentWord.slice(0,i) + ','
                            + currentWord.slice(i + currentDict.length, currentWord.length);
                        currentWordLen = currentWordLen - currentDict.length;
                    }
                }
            }

            if(findWord(dicts, currentWord, currentWordLen)) {
                return true;
            }
            dicts.push(currentDict);
        }
    }
    findWord(wordDict, s, s.length);
    return res;
};
```
