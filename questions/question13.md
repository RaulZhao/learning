Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let nextVal;
    let currentVal;
    let sum = 0;

    if (s.length === 1) {
        return romanMap[s[0]];
    }
    for(let i = 0; i < s.length - 1; i++) {
        currentVal = romanMap[s[i]];
        nextVal = romanMap[s[i+1]];

        if (currentVal < nextVal) {
            sum = sum - currentVal;
        } else {
            sum = currentVal + sum;
        }
    }
    return sum + nextVal;
};
```
