Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

```js
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    if(s.length < 1) {
        return result;
    }

    for(let i=s.length-1; i >= 0; i--) {
        let charCode = s.charCodeAt(i) - 65 + 1;
        result += charCode * Math.pow(26, s.length - i - 1);
    }
    return result;
};
```
