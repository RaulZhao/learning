# You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
# Return the minimum size of the set so that at least half of the integers of the array are removed.

# Example 1:
# Input: arr = [3,3,3,3,5,5,5,2,2,7]
# Output: 2
# Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
# Possible sets of size 2 are {3,5},{3,2},{5,2}.
# Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.


# @param {Integer[]} arr which length is even
# @return {Integer}
def min_set_size(arr)
    length = arr.length
    hash = {}
    sum = 0
    i = 0
    while i < length
        if hash.has_key? arr[i]
            hash[arr[i]] += 1
        else
            hash[arr[i]] = 1
        end
        i += 1
    end
    sorted_hash = Hash[hash.sort_by {|k, v| v}.reverse]
    puts sorted_hash
    j = 0
    values = sorted_hash.values
    while j < values.size
        sum += values[j]
        break if sum >= length/2
        j += 1
    end
    j + 1
end
