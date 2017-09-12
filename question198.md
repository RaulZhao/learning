You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const dp = [];
    if(n < 1) return 0;
    if(n === 1) return nums[0];
    if(n === 2) return Math.max(nums[0], nums[1]);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for(let i=2; i < n; i++) {
        dp[i] = Math.max((dp[i-2] + nums[i]), dp[i-1]);
    }
    return dp[n-1];
};
```
