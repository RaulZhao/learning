# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    return false if s.length != t.length
    anagram = {}
    i = 0
    while i < s.length
        if anagram.has_key?(s[i])
            anagram[s[i]] += 1
        else
            anagram[s[i]] = 1
        end
        i += 1
    end

    j = 0
    while j < t.length
        if anagram.has_key?(t[j]) && anagram[t[j]] > 0
            anagram[t[j]] = anagram[t[j]] - 1
        else
            return false
        end
        j += 1
    end
    true
end
