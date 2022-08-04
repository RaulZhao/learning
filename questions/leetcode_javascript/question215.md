Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.


```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pivot = nums[0];
    if(nums.length < 2) {
        return pivot;
    }
    const left = [];
    const right = [];

    for(let i=1; i < nums.length; i++) {
        if(nums[i] >= pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    if(k <= left.length) {
        return findKthLargest(left, k);
    } else if(k == left.length + 1) {
        return pivot;
    } else {
        return findKthLargest(right, k - left.length - 1);
    }
};
```
