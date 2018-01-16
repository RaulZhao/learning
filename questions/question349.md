Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//Solution 1 - two pointers
var intersection = function(nums1, nums2) {
    if(nums1.length < 1 || nums2.length < 1) {
        return [];
    }
    const result = [];
    nums1.sort((a, b) => a-b);
    nums2.sort((a, b) => a-b);

    let p1 = 0;
    let p2 = 0;
    while(p1 < nums1.length && p2 < nums2.length) {
        if(nums1[p1] > nums2[p2]) {
            p2++;
        } else if (nums1[p1] === nums2[p2]) {
            if(nums1[p1] !== result[result.length-1]) {
                result.push(nums1[p1]);
            }
            p1++;
            p2++;
        } else {
            p1++;
        }
    }
    return result;
};

// Solution2 - Binary Search
var intersection = function(nums1, nums2) {
  if(nums1.length < 1 || nums2.length < 1) {
    return [];
  }
  const result = [];
  nums1.sort((a, b) => a-b);
  nums2.sort((a, b) => a-b);

  for(let i=0; i < nums1.length; i++) {
    if(binarySearch(nums2, 0, nums2.length, nums1[i]) && nums1[i] !== result[result.length-1]) {
      result.push(nums1[i]);
    }
  }
  return result;

  function binarySearch(nums, start, end, target) {
    if(start > end) {
      return false;
    }
    let mid = Math.floor((start+end)/2);

    if(target < nums[mid]) {
      return binarySearch(nums, start, mid-1, target);
    } else if(target === nums[mid]) {
      return true;
    } else {
      return binarySearch(nums, mid+1, end, target);
    }
  }
}
```
