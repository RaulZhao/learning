Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let dp_negative = [0];
    let dp_positive = [0];

    if (nums.length < 2) {
        return nums[0];
    }
    if (nums[0] > 0) {
        dp_positive[0] = nums[0];
    } else {
        dp_negative[0] = nums[0];
    }
    let maxVal = dp_positive[0];

    for(let i=1; i < nums.length; i++) {
        let current = nums[i];
        if (current > 0) {
            dp_positive[i] = Math.max(current, current * dp_positive[i-1]);
            dp_negative[i] = current * dp_negative[i-1];
        } else if (current < 0) {
            dp_positive[i] = current * dp_negative[i-1];
            dp_negative[i] = Math.min(current, current * dp_positive[i-1])
        } else {
            dp_positive[i] = 0;
            dp_negative[i] = 0;
        }
        maxVal = Math.max(maxVal, dp_positive[i]);
    }

    return maxVal;
};
```
