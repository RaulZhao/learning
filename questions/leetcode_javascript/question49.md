Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.


```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    function quickSortString(str) {
        function sort(str) {
            if (str.length < 2) {
              return str;
            }
            let left = [];
            let right = [];
            let pivot = str[0];

            for (let i = 1; i < str.length; i++) {
              if (pivot < str[i]) {
                right.push(str[i]);
              } else {
                left.push(str[i]);
              }
            }
            return sort(left.join("")) + pivot + sort(right.join(""));
        }
        return sort(str);
    }

    let visited = {};
    let result = [];
    for(let i=0; i<strs.length; i++) {
        let sortedStr = quickSortString(strs[i]);

        if(visited[sortedStr] === undefined) {
            visited[sortedStr] = result.length;
            result[result.length] = [];
            result[visited[sortedStr]].push(strs[i]);
        } else {
            result[visited[sortedStr]].push(strs[i]);
        }
    }
    return result;
};
```
