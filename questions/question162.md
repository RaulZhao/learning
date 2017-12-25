A peak element is an element that is greater than its neighbors.

Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that num[-1] = num[n] = -∞.

For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.

click to show spoilers.

```java
class Solution {
    public int findPeakElement(int[] nums) {
        int len = nums.length;
        if(len == 0) {
            return -1;
        }
        if(len == 1) {
            return 0;
        }
        if(nums[0] > nums[1]) {
            return 0;
        }
        if(nums[len-1] > nums[len-2]) {
            return len-1;
        }
        int i=0;
        while (i < len-1) {
            if(nums[i] > nums[i+1]) {
                if(nums[i] > nums[i-1]) {
                    return i;
                } else {
                    i += 2;
                }
            } else {
                i++;
            }
        }
        return -1;
    }
}
```
