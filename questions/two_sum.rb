# Two Sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

def two_sum(nums, target)
    table = {}
    i = 0
    while i < nums.length
        table[target - nums[i]] = i
        i += 1
    end
    
    j = 0
    while j < nums.length
        if table.key?(nums[j]) && j != table[nums[j]]
           return [j, table[nums[j]]] 
        end
        j += 1
    end
end
