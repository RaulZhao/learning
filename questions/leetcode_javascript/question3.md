Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Subscribe to see which companies asked this question.

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let resultObj = [];
    let maxLength = 0;
    if (s.length < 2) {
        return s.length;
    }

    for (let i = 0; i < s.length - 1; i++) {
        resultObj.push(s[i]);
        for (var j = i+1; j < s.length; j++) {
            if (resultObj.indexOf(s[j]) > -1) {
                break;
            } else {
                resultObj.push(s[j]);
            }
        }
        maxLength = Math.max(maxLength, j - i);
        resultObj.length = 0;
    }
    return maxLength;
};
```

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left_traverse = 0;
    let right_traverse = 0;
    let charObj = {};
    let maxLength = 0;

    while (right_traverse < s.length) {
        let currentRightChar = s[right_traverse];
        if (charObj[currentRightChar]) {
            maxLength = Math.max(maxLength, right_traverse - left_traverse);
            while (s[left_traverse] !== currentRightChar) {
                delete charObj[s[left_traverse]];
                left_traverse++;
            }

            left_traverse++;
        } else {
            charObj[currentRightChar] = 1;
        }
        right_traverse++;
    }

    maxLength = Math.max(maxLength, Object.keys(charObj).length);
    return maxLength;
};
```
