Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.


```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var total = 0;
    var bit = 0;
    if (num1 ===0 || num2 === 0) {
        return "0";
    }
    if (num1 === 1) {
        return num2.toString();
    }

    if (num1 % 2) {
        num1 = num1 + 1;
        bit = -num2;
    }
    num1 = num1 >> 1;

    function mul(a, b) {
        if(a === 1) {
            return (b << 1) + bit;  
        }
        let tmpB = b << 1;

        if (a % 2) {
            bit = bit + tmpB;
        }

        let tmpA = a >> 1;

        return mul(tmpA, tmpB);
    }

    total = mul(num1, num2);
    return total.toString();
};
```
