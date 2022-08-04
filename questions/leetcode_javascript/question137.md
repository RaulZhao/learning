Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


```java
class Solution {
    public int singleNumber(int[] nums) {
        Arrays.sort(nums);
        for(int i=0; i <= nums.length - 3; i += 3) {
            if(nums[i] == nums[i+1] && nums[i] == nums[i+2]) {
            } else {
                if(nums[i] == nums[i+1]) {
                    return nums[i+2];
                } else if(nums[i] == nums[i+2]) {
                    return nums[i+1];
                } else {
                    return nums[i];
                }
            }
        }

        return nums[nums.length - 1];
    }
}
```
