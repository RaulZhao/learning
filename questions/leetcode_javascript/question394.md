Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const decode = function(str, times) {
        let res = "";
        let number = "";
        let subStr = "";
        let numOfLeftBracket = 0;
        let isRecording = false;

        for(let i=0; i < str.length; i++) {
            let char = str[i];
            if(isRecording) {
                if(char === ']') {
                    numOfLeftBracket--;
                    if(numOfLeftBracket === 0) {
                        res += decode(subStr, parseInt(number));
                        isRecording = false;
                        number = "";
                        subStr = "";
                    } else {
                        subStr += char;
                    }
                } else if(char === '[') {
                    numOfLeftBracket++;
                    subStr += char;
                } else {
                    subStr += char;
                }
            } else {
                if(char === '[') {
                    isRecording = true;
                    numOfLeftBracket++;
                } else if(!Number.isNaN(parseInt(char))) {
                    number += char;
                } else {
                    res += char;
                }
            }
        }
        let rrr = "";
        for(let k=0; k < times; k++) {
            rrr += res;
        }
        return rrr;
    }

    return decode(s, 1);
};
```
