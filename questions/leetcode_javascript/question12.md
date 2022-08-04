Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

```js
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let value = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let result = "";

    while(num > 0) {
        for(let i = 0; i < value.length; i++) {
            if(num >= value[i]) {
                result = result + symbol[i];
                num = num - value[i];
                break;
            }
        }
    }
    return result;
};
```
