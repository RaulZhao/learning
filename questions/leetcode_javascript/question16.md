Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).



```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b) {
        return a-b;
    });
    let closest = Number.MAX_VALUE;
    let result = target;

    if (nums.length < 4) {
        return nums[0] + nums[1] + nums[2];
    }

    for(let k=0; k<nums.length - 2; k++) {
        let i = k+1;
        let j = nums.length-1;
        while(i < j) {
            let sum = nums[k] + nums[i] + nums[j] - target;

            if (Math.abs(sum) < closest) {
                closest = Math.abs(sum);
                result = nums[k] + nums[i] + nums[j];
            }
            if(sum > 0) {
                j--;
            } else if(sum === 0) {
                return target;
            } else {
                i++;
            }
        }
    }
    return result;
};
```
