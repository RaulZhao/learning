Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]


```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    let paths = [];

    if(root == null) {
        return result;
    }
    dfs(root, 0);
    return result;

    function dfs(node, pathVal) {
        paths.push(node.val);
        if(node.left == null && node.right == null) {
            if((pathVal + node.val) === sum) {
                result.push(paths.slice(0));
            }
            paths.pop();
            return;
        }

        if(node.left !== null) {
            dfs(node.left, pathVal + node.val);
        }
        if(node.right !== null) {
            dfs(node.right, pathVal + node.val);
        }
        paths.pop();
        return;
    }
};
```
