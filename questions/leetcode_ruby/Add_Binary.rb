# Given two binary strings a and b, return their sum as a binary string.

# Example 1:
# Input: a = "11", b = "1"
# Output: "100"

# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
    i = a.length - 1
    j = b.length - 1
    addition = 0
    sum = []
    while i >= 0 || j >= 0
        val_a = i<0 ? 0 : a[i].to_i
        val_b = j<0 ? 0 : b[j].to_i
        if val_a + val_b + addition >= 2
            sum.unshift(val_a + val_b + addition - 2)
            addition = 1
        else
            sum.unshift(val_a + val_b + addition)
            addition = 0
        end
        i -= 1
        j -= 1
    end
    sum.unshift(addition) if addition == 1
    sum.join("")
end
