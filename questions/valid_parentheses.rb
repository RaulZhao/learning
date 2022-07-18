# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# 1. Open brackets must be closed by the same type of brackets.
# 2. Open brackets must be closed in the correct order.

# @param {String} s
# @return {Boolean}
def is_valid(s)
    brackets = {'(' => ')', '[' => ']', '{' => '}'}
    stack = []
    i = 0
    while i < s.length
        if brackets.keys.include?(s[i])
            stack.push(s[i])
        else
            return false if stack.length == 0
            return false if brackets[stack.pop] != s[i]
        end
        i += 1
    end
    return stack.length == 0
end
