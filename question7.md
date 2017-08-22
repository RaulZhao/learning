Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let input = x + "";
    let isNegative = false;
    if (x < 0) {
        input = input.substr(1);
        isNegative = true;
    }
    let arr = input.split('');
    let tmp;
    let result;

    if (arr.length % 2 === 0) {
        for (let i = 0; i < arr.length/2; i++) {
           tmp = arr[i];
           arr[i] = arr[arr.length - i -1];
           arr[arr.length - i -1] = tmp;
        }
    } else {
        for (let i = 0; i < Math.floor(arr.length/2); i++) {
           tmp = arr[i];
           arr[i] = arr[arr.length - i -1];
           arr[arr.length - i -1] = tmp;
        }
    }

    result = parseInt(isNegative ? "-" + arr.join("") : arr.join(""));
    if (result > 2147483648 || result < -2147483648) {
        return 0;
    }
    return result;
};
```
