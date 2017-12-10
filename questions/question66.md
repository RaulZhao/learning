Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

```js
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let bit = 1;
    let current = digits.pop();
    const result = [];

    while(current !== undefined) {
        if((bit + current) < 10) {
            result.unshift(bit + current);
            bit = 0;
        } else {
            result.unshift(bit + current - 10);
            bit = 1;
        }
        current = digits.pop();
    }
    if (bit) {
        result.unshift(bit);
    }
    return result;
};
```
