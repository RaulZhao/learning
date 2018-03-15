Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const map = new Map();

    nums.forEach((val) => {
        if(val > 0) {
            map.set(val, true);
        }
    });
    for(let i=0; i<map.size; i++) {
        if(!map.has(i+1)) {
            return i+1;
        }
    }
    return map.size+1;
};
```
