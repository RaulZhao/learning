# You are climbing a staircase. It takes n steps to reach the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Example 1:
# Input: n = 2
# Output: 2
# Explanation: There are two ways to climb to the top.
# 1. 1 step + 1 step
# 2. 2 steps

# Example 2:
# Input: n = 3
# Output: 3
# Explanation: There are three ways to climb to the top.
# 1. 1 step + 1 step + 1 step
# 2. 1 step + 2 steps
# 3. 2 steps + 1 step

# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
    @steps = {}
    stairs(n)
end

def stairs(n)
    return 0 if n <= 0
    return 1 if n == 1
    return 2 if n == 2
    if !@steps.has_key? n-1
       @steps[n-1] = stairs(n-1) 
    end
    if !@steps.has_key? n-2
       @steps[n-2] = stairs(n-2) 
    end
    @steps[n-1] + @steps[n-2]
end
