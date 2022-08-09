# Given a non-negative integer x, compute and return the square root of x.
# Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
# Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    return x if x < 1
    start_val = 1
    end_val = x

    while start_val < end_val - 1
        mid = (start_val + end_val)/2
        return mid if mid * mid == x
        if mid * mid < x
            start_val = mid
        else
            end_val = mid
        end
    end
    start_val
end
