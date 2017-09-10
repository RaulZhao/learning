Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    result[0] = [];
    nums.sort((a, b) => a > b);

    for(let i=0; i < nums.length; i++) {
        let temp = [];
        result.forEach((el) => {
            temp.push(el.slice(0));
            el.push(nums[i]);
        });
        result = result.concat(temp);
    }

    return result;
};
```
