# There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
# Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
# The test cases are generated so that the answer will be less than or equal to 2 * 109.

# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def unique_paths(m, n)
    @existing_paths = Array.new(m + 1) { Array.new(n + 1) }
    back_steps(m, n)
end

def back_steps(m, n)
    return 1 if m <= 1
    return 1 if n <= 1
    @existing_paths[m-1][n] = back_steps(m-1, n) if @existing_paths[m-1][n].nil?
    @existing_paths[m][n-1] = back_steps(m, n-1) if @existing_paths[m][n-1].nil?
    steps = @existing_paths[m-1][n] + @existing_paths[m][n-1]
    steps
end
