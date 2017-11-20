```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const visited = new Map();
    let i = 0;
    while(i < nums.length) {
        if(visited.get(nums[i]) === undefined) {
            visited.set(nums[i], 1);
            i++;
        } else if (visited.get(nums[i]) === 1) {
            visited.set(nums[i], 2);
            i++;
        } else {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
```
