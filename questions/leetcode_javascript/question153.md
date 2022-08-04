Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.


```java
class Solution {
    public int findMin(int[] nums) {
        int len = nums.length;
        if (len < 1) {
            return -1;
        }
        if (nums[0] <= nums[len -1]) {
            return nums[0];
        } else {
            for(int i=1; i < len; i++) {
                if(nums[i] < nums[i-1]) {
                    return nums[i];
                }
            }
        }
        return nums[0];
    }
}
```
