# Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

# Example 1:
# Input: nums = [1,5,11,5]
# Output: true
# Explanation: The array can be partitioned as [1, 5, 5] and [11].

# Example 2:
# Input: nums = [1,2,3,5]
# Output: false
# Explanation: The array cannot be partitioned into equal sum subsets.

# @param {Integer[]} nums
# @return {Boolean}
def can_partition(nums)
    total = nums.reduce(0) {|sum, num| sum + num}
    return false if total % 2 != 0
    return true if nums[0] == total/2

    result = false
    dp = []
    k = 0
    dp[0] = []
    while k <= total/2
      dp[0][k] = false
      if k == nums[0] || k == 0
        dp[0][k] = true if k == nums[0] || k == 0
      end
      k += 1
    end

    i = 1
    while i < nums.size
      dp[i] = []
      j = 0
      while j <= total/2
        dp[i][j] = dp[i-1][j]
        dp[i][j] = dp[i-1][j-nums[i]] if j >= nums[i]
        result = true if dp[i][j] == true && j == total/2
        j += 1
      end
      i += 1
    end
    result
end
