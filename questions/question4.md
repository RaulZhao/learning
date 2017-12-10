There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5


```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var pickedVal;
    var tmpArray = [];
    var tmpLength = nums1.length + nums2.length;

    for (let i = 0; i < tmpLength; i++) {
        if (nums1.length > 0 && nums2.length > 0) {
            if (nums1[0] <= nums2[0]) {
                pickedVal = nums1[0];
                nums1.splice(0,1);
            } else {
                pickedVal = nums2[0];
                nums2.splice(0,1);
            }
        } else if (nums1.length > 0 && nums2.length === 0) {
            pickedVal = nums1[0];
            nums1.splice(0,1);
        } else if (nums1.length === 0 && nums2.length > 0) {
            pickedVal = nums2[0];
            nums2.splice(0,1);
        } else {}
        tmpArray[i] = pickedVal;
    }

    if (tmpArray.length % 2 === 0) {
        return (tmpArray[tmpArray.length/2] + tmpArray[tmpArray.length/2 - 1])/2;
    } else {
        return tmpArray[(tmpArray.length - 1)/2];
    }
};
```
