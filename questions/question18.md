Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]


```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let input = nums.sort(function(a, b) {
        return a-b;
    });
    let result = [];
    let visited = {};
    if(input.length < 5) {
        let sum = input[0] + input[1] + input[2] + input[3];
        if (sum === target) {
            result[0] = input;
        }
        return result;
    }

    for(let k=0; k < input.length - 3; k++) {
        for(let n=k+1; n < input.length - 2; n++) {
            let low = n + 1;
            let high = input.length - 1;
            let newTarget = target - input[k] - input[n];
            while(low < high) {
                if(input[low] + input[high] < newTarget) {
                    low++;
                } else if (input[low] + input[high] === newTarget) {
                    let newArr = [input[k], input[n], input[low], input[high]];
                    newArr.sort(function(a,b) {return a-b});
                    let key = newArr.join("");
                    if(!visited[key]) {
                        result.push(newArr.slice(0));
                        visited[key] = 1;
                    }
                    low++;
                    high--;
                } else {
                    high--;
                }
            }
        }
    }
    return result;
};
```
