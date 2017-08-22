Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.


```js
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let isNegative = false;
    let digit = 0;
    let sum = 0;
    str = str.trim();

    if(str.length === 0) {
        return 0;
    }
    if (str[0] === '+' || str[0] === '-') {
        if (str[0] === '-') {
            isNegative = true;
        }
        str = str.substr(1);
    }

    for(let i = 0; i < str.length; i++) {
        digit = parseInt(str[i]);
        if (isNaN(digit)) {
            break;
        } else {
            sum = sum * 10 + digit;
        }

        if (!isNegative && sum > 2147483647) {
            sum = 2147483647;
            break;
        }
        if (isNegative && -sum < -2147483648) {
            sum = 2147483648;
            break;
        }
    }

    return isNegative ? -sum : sum;
};
```
