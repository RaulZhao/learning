Given an input string, reverse the string word by word.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Update (2015-02-12):
For C programmers: Try to solve it in-place in O(1) space.

```js
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();
    let strArr = str.split(' ');
    const result = [];

    strArr.forEach((val) => {
        if(val != "") {
            result.unshift(val);
        }
    });
    return result.join(' ');
};
```
