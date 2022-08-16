# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

# Example 1:
# Input: s = "leetcode"
# Output: 0

# @param {String} s
# @return {Integer}
def first_uniq_char(s)
    chars = {}
    i = 0
    while i < s.length
        if chars.has_key? s[i]
            chars[s[i]] += 1
        else
            chars[s[i]] = 1
        end
        i += 1
    end
    first_unique = chars.select {|key, val| val == 1}.first
    return -1 if first_unique.nil?
    s.index(first_unique[0])
end
