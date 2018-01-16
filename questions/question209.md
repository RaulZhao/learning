Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

```js
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(nums.length < 1) {
        return 0;
    }
    let res = nums.slice(0, nums.length);
    let left = 0;
    let right = 0;
    let sum = nums[0];

    while (right < nums.length && left <= right) {
        if(sum < s) {
            right++;
            if(nums[right] != undefined) {
                sum += nums[right];
            }
        } else {
            if((right - left + 1) < res.length) {
                res = nums.slice(left, right+1);
            }
            left++;
            sum -= nums[left-1];
        }
    }
    if(left === 0 && sum < s) {
        return 0;
    }
    return res.length;
};
```
