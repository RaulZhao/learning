Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = [];
    let fwd = [1];
    let bwd = [1];
    for(let i=1; i < nums.length; i++) {
        fwd[i] = nums[i-1] * fwd[i-1];
        bwd[i] = 1;
    }
    for(let i=nums.length-2; i >= 0; i--) {
        bwd[i] = nums[i+1] * bwd[i+1];
    }
    for(let i=0; i < nums.length; i++) {
        result[i] = fwd[i] * bwd[i];
    }
    return result;
};
```
