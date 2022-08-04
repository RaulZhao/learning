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
```java
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        for(int i=0; i < n; i++) {
            nums1[m+i] = nums2[i];
        }
        int left = 0;
        int right = m;
        while(left < right && right < m+n) {
            if (nums1[right] < nums1[left]) {
                int tmp = nums1[right];
                for(int i=right; i > left; i--) {
                    nums1[i] = nums1[i-1];
                }
                nums1[left] = tmp;
                left++;
                right++;
            } else {
                left++;
            }
        }
    }
}
```

```java
// Binary Search
class Solution {
    int leftBoundary = 0;
    int rightBoundary = 0;
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if(m == 0) {
            for(int k=0; k < n; k++) {
                nums1[k] = nums2[k];
            }
            return;
        }
        rightBoundary = Math.max(0, m-1);
        for(int i=0; i < n; i++) {
            int position = findPosition(leftBoundary, rightBoundary, nums2[i], nums1);
            insertToPosition(position, nums2[i], nums1);
        }
    }
    public void insertToPosition(int pos, int target, int[] nums1) {
        for(int i=rightBoundary+1; i > pos; i--) {
            nums1[i] = nums1[i-1];
        }
        nums1[pos] = target;
        rightBoundary++;
        leftBoundary = pos+1;
    }
    public int findPosition(int left, int right, int target, int[] nums1) {
        if (left >= right) {
            right = Math.max(right, 0);
            return target > nums1[right] ? right + 1 : right;
        }
        int midIndex = (right - left)/2 + left;
        if(target == nums1[midIndex]) {
            return midIndex;
        } else if(target < nums1[midIndex]) {
            return findPosition(left, midIndex-1, target, nums1);
        } else {
            return findPosition(midIndex+1, right, target, nums1);
        }
    }
}
```
