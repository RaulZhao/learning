Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pivot;
    let res1 = -1;
    let res2 = -1;

    while(left <= right) {
        pivot = parseInt((right + left) / 2);

        if(target < nums[pivot]) {
            right = pivot - 1;
        } else if (target > nums[pivot]){
            left = pivot + 1;
        } else {
            res1 = pivot;
            right = pivot - 1;
        }
    }

    left = 0;
    right = nums.length - 1;

    while(left <= right) {
        pivot = parseInt((right + left) / 2);

        if(target < nums[pivot]) {
            right = pivot - 1;
        } else if (target > nums[pivot]){
            left = pivot + 1;
        } else {
            res2 = pivot;
            left = pivot + 1;
        }
    }
    return [res1, res2]
};
```
