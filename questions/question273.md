Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

```js
/**
 * @param {number} num
 * @return {string}
 */
const UNIT_0 = ["", "Thousand", "Million", "Billion"];
const UNIT_1 = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const UNIT_2 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

var numberToWords = function(num) {
    if(num < 1) {
        return "Zero"
    }
    let result = "";
    let bit = 0;

    while(num > 0) {
        if((num % 1000) > 0) {
            let str = tanslateNumToString(num % 1000);
            str += UNIT_0[bit] + " ";
            result = str + result;
        }
        num = Math.floor(num/1000);
        bit++;
    }

    return result.trim();
};
// translate number from 0 to 999.
function tanslateNumToString(num) {
    let str = "";
    if(num < 1) {
        return "";
    }
    if(num >= 100) {
        str += UNIT_2[Math.floor(num/100)] + " Hundred ";
        num = num % 100;
    }
    if(num >= 20) {
        str += UNIT_1[Math.floor(num/10)] + " ";
        num = num % 10;
        if(num > 0) {
            str += UNIT_2[num] + " ";
        }
    } else if(num > 0) {
        str += UNIT_2[num] + " ";
    }
    
    return str;
}
```