Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".


```js
var findAnagrams = function(s, p) {
    const n = p.length;
    const result = [];
    if (s.length < n) {
        return result;
    }
    const map = {};
    for(let k=0; k<n; k++) {
        if (map[p[k]]) {
            map[p[k]]++;
        } else {
            map[p[k]] = 1;
        }
    }
    
    function checkAnagrams(offset) {
        let target = Object.assign({}, map);
        for(let j=0; j<n; j++) {
            if (target[s[offset + j]]) {
                target[s[offset + j]]--;
            } else {
                return false;
            }
        }
        return true;
    }
    for(let i=0; i <= s.length - n; i++) {
        if (checkAnagrams(i)) {
            result.push(i);
        }
    }
    return result;
};
```
