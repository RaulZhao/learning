Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.


```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const visited = {};
    for(let i=0; i < nums.length; i++) {
        if(visited[nums[i]]) {
            return true;
        }
        visited[nums[i]] = true;
    }
    return false;
};
```
