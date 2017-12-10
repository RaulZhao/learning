
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a > b);
    const result = [[]];
    const path = [];

    function dfs(nums, start) {
        let visited = {};
        if(start >= nums.length) {
            return;
        }
        for(let i=start; i < nums.length; i++) {
            if(!visited[nums[i]]) {
                visited[nums[i]] = 1;
                path.push(nums[i]);
                result.push(path.slice(0));
                dfs(nums, i+1);
                path.pop();
            }
        }
    }
    dfs(nums, 0);
    return result;
};
```
