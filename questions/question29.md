

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = 0;
    let isNegative = false;
    let shift = 0;
    if (dividend < 0 && divisor > 0) {
        isNegative = true;
        dividend = -dividend;
    } else if (dividend > 0 && divisor < 0) {
        isNegative = true;
        divisor = -divisor;
    } else if (dividend < 0 && divisor < 0) {
        dividend = -dividend;
        divisor = -divisor;
    }

    let b = divisor;

    while (dividend >= divisor) {
        shift = 0;
        b = divisor;
        while (dividend >= b) {
            shift++;
            b = divisor << shift;
        }
        dividend = dividend - (divisor << (shift - 1));
        result += 1 << (shift - 1);
    }

    if (isNegative) {
        result = -result;
    }
    return result;
};
```

```js
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let result = 0;
    let isNegative = false;
    let shift = 0;
    if (dividend < 0 && divisor > 0) {
        isNegative = true;
        dividend = -dividend;
    } else if (dividend > 0 && divisor < 0) {
        isNegative = true;
        divisor = -divisor;
    } else if (dividend < 0 && divisor < 0) {
        dividend = -dividend;
        divisor = -divisor;
    }

    let b = divisor;

    while (dividend >= b) {
        shift++;
        b = divisor << shift;
    }

    let i = shift - 1;
    while (dividend >= divisor) {
        let temp = divisor << i;
        if (dividend >= temp) {
            dividend = dividend - temp;
            result += 1 << i;
        }
        i--;
    }

    if (isNegative) {
        result = -result;
    }
    return result;
};
```
