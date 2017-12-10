Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example,
Given s = "Hello World",
return 5.


```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const strArr = s.split(' ');

    for (let i = strArr.length-1; i >= 0; i--) {
        if (strArr[i].length > 0) {
            return strArr[i].length;
        }
    }
    return 0;
};
```
