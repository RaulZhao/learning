Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]


```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [];
    let tmp = [];
    let visitedIndex = [];
    let visited = {};
    let layer = 0;

    function calculate(tmp, layer, result) {
        if (layer === nums.length) {
            let permuteString = tmp.join("");
            if (!visited[permuteString]) {
                visited[permuteString] = 1;
                result.push(tmp.slice(0));
            }
            return;
        }

        for(let i=0; i < nums.length; i++) {
            if (visitedIndex.indexOf(i) === -1) {
                tmp.push(nums[i]);
                visitedIndex.push(i);
                calculate(tmp, layer + 1, result);
                tmp.pop();
                visitedIndex.pop();
            }
        }
    }

    calculate(tmp, layer, result);
    return result;
};
```
