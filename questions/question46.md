Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    let tmp = [];
    let visited = {};
    let layer = 0;

    function calculate(tmp, layer, result) {
        if (layer === nums.length) {
            result.push(tmp.slice(0));
            return;
        }

        for(let i=0; i < nums.length; i++) {
            if (visited[nums[i]]) {
            } else {
                tmp.push(nums[i]);
                visited[nums[i]] = true;
                calculate(tmp, layer + 1, result);
                tmp.pop();
                visited[nums[i]] = false;
            }

        }
    }

    calculate(tmp, layer, result);
    return result;

};
```
