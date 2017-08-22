Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const sum = [];
    let max;

    sum[0] = nums[0];
    max = nums[0];
    for(let i=1; i < nums.length; i++) {
        if(sum[i-1] < 0) {
            sum[i] = nums[i];
        } else {
            sum[i] = sum[i-1] + nums[i];
        }

        max = Math.max(sum[i], max);
    }
    return max;
};
```
