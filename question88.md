Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.


```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=0; i < n; i++) {
        nums1[m+i] = nums2[i];
    }
    let pointer1 = 0;
    let pointer2 = m;
    while(pointer1 < pointer2 && pointer2 < (m+n)) {
        if(nums1[pointer1] > nums1[pointer2]) {
            let tmp = nums1[pointer2];
            for(let i=pointer2; i > pointer1; i--) {
                nums1[i] = nums1[i-1];
            }
            nums1[pointer1] = tmp;
            pointer2++;
        }
        pointer1++;
    }
};
```
