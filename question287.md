Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let minVal = 1;
    let maxVal = nums.length - 1;
    let lessSum = 0;
    let greaterSum = 0;
    let midVal;

    function find(min, max) {
        midVal = min + Math.floor((max-min)/2);
        if(max - min <= 0) {
            return midVal;
        }
        lessSum = 0;
        greaterSum = 0;
        for(let i=0; i < nums.length; i++) {
            if (nums[i] >= min && nums[i] <= midVal) {
                lessSum++;
            } else if (nums[i] > midVal && nums[i] <= max) {
                greaterSum++;
            }
        }
        if (lessSum > (midVal - min + 1)) {
            return find(min, midVal);
        } else if (greaterSum > (max - midVal)) {
            return find(midVal + 1, max);
        }
    }

    return find(minVal, maxVal);
};
```
