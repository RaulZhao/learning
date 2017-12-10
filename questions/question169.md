Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    if(nums.length < 2) {
        return nums[0];
    }

    for(let i=0; i<nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1;
        } else {
            map[nums[i]] = 1;
        }

        if(map[nums[i]] > nums.length/2) {
            return nums[i];
        }
    }
};
```
