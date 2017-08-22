Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    } else if (needle.length > haystack.length) {
        return -1;
    }
    let startStr = needle[0];

    for(let i = 0; i < haystack.length; i++) {
        let j = 0;
        if (haystack[i] === startStr && haystack.length - i >= needle.length) {
            for(j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    break;
                }
            }
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};
```
