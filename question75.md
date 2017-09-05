Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left_index = 0;
    let right_index = nums.length - 1;
    let i = left_index;

    function swap(k, j) {
        [nums[k], nums[j]] = [nums[j], nums[k]];
    }

    if (nums.length > 1) {
        while (i <= right_index) {
            current = nums[i];
            if (current < 1) {
                swap(i, left_index);
                left_index++;
                i++;
            } else if (current === 1) {
                i++;
            } else {
                swap(i, right_index);
                right_index--;
            }
        }
    }
};
```
