# Given an integer n, return true if it is a power of four. Otherwise, return false.
# An integer n is a power of four, if there exists an integer x such that n == 4x.
  
# @param {Integer} n
# @return {Boolean}
def is_power_of_four(n)
    modulus = 0
    remaining = n
    while remaining > 1
        modulus = remaining % 4
        return false if modulus != 0
        remaining = remaining/4
    end
    return true if remaining == 1
    false
end
