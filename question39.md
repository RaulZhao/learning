Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7,
A solution set is:
[
  [7],
  [2, 2, 3]
]

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let numArr = [];
    let traceArr = [];
    let visited = {};
    candidates.sort(function(a, b) {
        return a-b;
    });
    for(let k=0; k < candidates.length; k++) {
        if (candidates[k] < target) {
            numArr.push(candidates[k]);
        } else if(candidates[k] === target) {
            result.push([target]);
        }
    }

    function findNum(arr, currentTarget) {
        let currentCandidates = [];
        for(let k=0; k < arr.length; k++) {
            if (arr[k] < currentTarget) {
                currentCandidates.push(arr[k]);
            } else if(arr[k] === currentTarget) {
                traceArr.push(currentTarget);
                let tmp = traceArr.slice(0);

                tmp.sort(function(a, b) {
                    return a-b;
                });
                if (!visited[tmp.join("")]) {
                    result.push(tmp);
                    visited[tmp.join("")] = 1;
                }
                traceArr.pop();
            }
        }
        if (currentCandidates.length === 0) {
            return;
        }

        for(let i=0; i < currentCandidates.length; i++) {
            traceArr.push(currentCandidates[i]);
            findNum(currentCandidates, currentTarget - currentCandidates[i]);
            traceArr.pop();
        }
    }

    findNum(numArr, target);
    return result;
};
```
