# Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.
# A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
# Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
# Example 1:
# Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
# Output: ["mee","aqq"]
# Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
# "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

# Example 2:
# Input: words = ["a","b","c"], pattern = "a"
# Output: ["a","b","c"]

# @param {String[]} words
# @param {String} pattern
# @return {String[]}
def find_and_replace_pattern(words, pattern)
    i = 0
    results = []
    while i < words.length
        map = {}
        j = 0
        while j < words[i].length
            if map.has_key?(pattern[j])
                break if map[pattern[j]] != words[i][j]
            else
                break if map.has_value?(words[i][j])
                map[pattern[j]] = words[i][j]
            end
            j += 1
        end
        results << words[i] if j == words[i].length
        i += 1
    end
    results
end
