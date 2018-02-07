You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9]

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const len = words.length;
    const step = words[0].length;
    if(s.length < len*step) {
        return [];
    }
    const result = [];
    
    for(let k=0; k < s.length - len*step + 1; k++) {
        if(compare(s, k, words.slice())) {
            result.push(k);
        }
    }
    return result;
    
    function compare(str, index, dict) {
        let endIndex = index+len*step;
        for(let i=index; i < endIndex; i += step) {
            let num = dict.indexOf(str.substring(i, i+step));
            if(num < 0) {
                return false;
            }
            dict[num] = "";
        }
        return true;
    }
};
```