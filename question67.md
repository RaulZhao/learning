Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let bit = 0;
    const first = a.split('').map(function(item) {return parseInt(item)});
    const second = b.split('').map(function(item) {return parseInt(item)});
    let left = first.pop();
    let right = second.pop();
    const result = [];

    while(left !== undefined || right !== undefined) {
        left = left || 0;
        right = right || 0;
        let temp = left + right + bit;
        if(temp <= 1) {
            bit = 0;
        } else {
            temp = temp - 2;
            bit = 1;
        }
        result.unshift(temp);
        left = first.pop();
        right = second.pop();
    }

    if(bit > 0) {
        result.unshift(bit);
    }

    return result.join("");
};
```
