# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

# Symbol       Value
# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000

# @param {String} s
# @return {Integer}
def roman_to_int(s)
    i = 0
    prev = 0
    sum = 0
    num_table = {'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D'=> 500, 'M' => 1000}
    while i < s.length
        if num_table[s[i]] > prev
            sum += num_table[s[i]] - prev - prev
        else
            sum += num_table[s[i]]
        end
        prev = num_table[s[i]]
        i+=1
    end
    sum
end
