# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    i = 0
    prefix = ""
    while i < strs[0].length
        curr_char = strs[0][i]
        j = 1    
        while j < strs.length
            return prefix if curr_char != strs[j][i]
            j += 1
        end
        prefix << curr_char 
        i += 1
    end
    prefix
end
