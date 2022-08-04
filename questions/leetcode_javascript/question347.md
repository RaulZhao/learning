Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.


```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const visited = new Map();
    const values = [];
    const result = [];
    nums.forEach((val) => {
        if(visited.has(val)) {
            visited.set(val, visited.get(val)+1);
        } else {
            visited.set(val, 1);
        }
    });

    let iterator = visited.values();
    let nextVal = iterator.next().value;
    while(nextVal) {
        values.push(nextVal);
        nextVal = iterator.next().value;
    }

    function find_the_i (arr, i) {
        if(arr.length <= 1) {
            return arr[0];
        }
        let pivot = arr[0];
        let left =[];
        let right = [];
        for(let j=1; j < arr.length; j++) {
            if(arr[j] >= pivot) {
                left.push(arr[j]);
            } else {
                right.push(arr[j]);
            }
        }
        if(i <= left.length) {
            return find_the_i(left, i);
        }
        if(i === left.length + 1) {
            return pivot;
        }
        if(right.length === 0) {
            return pivot;
        }
        return find_the_i(right, i-left.length-1);
    }

    const value_at_k = find_the_i(values, k);

    visited.forEach((val, key) => {
        if(val >= value_at_k) {
            result.push(key);
        }
    });

    return result;
};
```
