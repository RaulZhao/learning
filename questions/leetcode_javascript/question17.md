Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.


```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = [];
    map[1]="";
    map[2]="abc";
    map[3]="def";
    map[4]="ghi";
    map[5]="jkl";
    map[6]="mno";
    map[7]="pqrs";
    map[8]="tuv";
    map[9]="wxyz";
    map[0]="";
    let temp = [];
    let result = [];
    let deep = 0;

    if (digits.length < 1) {
        return [];
    }

    function getString(temp, result, deep) {
        if(deep === digits.length) {
            result.push(temp.join(""));
            return;
        }

        for(let i = 0; i < map[digits[deep]].length; i++) {
            temp.push(map[digits[deep]][i]);
            getString(temp, result, deep+1);
            temp.pop();
        }
    }

    getString(temp, result, deep);
    return result;
};
```
