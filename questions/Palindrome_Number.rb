# Palindrome Number
# Given an integer x, return true if x is palindrome integer.
# An integer is a palindrome when it reads the same backward as forward.

# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    i = 0
    src = "#{x}"
    j = src.length - 1
    
    while i < (src.length/2.to_f).round
        return true if i == j
        return false if src[i] != src[j]
        i+=1
        j-=1
    end
    true
end
