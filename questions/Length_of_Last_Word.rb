# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal substring consisting of non-space characters only.

# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    i = s.length - 1
    count = 0
    while i >= 0
        if s[i] != " "
            count += 1
        elsif s[i] == " " && count > 0
            break
        end
        i -= 1
    end
    count
end
