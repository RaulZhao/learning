Determine whether an integer is a palindrome. Do this without extra space.

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let num = x+"";
    let i = 0;
    let j = num.length - 1;
    while(i < j) {
        if (num[i] !== num[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
```
