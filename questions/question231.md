Given an integer, write a function to determine if it is a power of two.

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) {
        return true;
    }
    let curr = n;
    let res = true;
    while(curr >1 && curr % 2 === 0) {
        curr = curr/2;
    }
    
    return curr === 1;
};
```