Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.

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
 * @return {number}
 */
var sumNumbers = function(root) {
    let result = [];
    if(root === null) {
        return 0;
    }
    function dfs(node, val) {
        if(node.left === null && node.right === null) {
            result.push(val*10 + node.val);
            return;
        }
        let currVal = node.val + val*10;
        if(node.left !== null) {
            dfs(node.left, currVal);
        }
        if(node.right !== null) {
            dfs(node.right, currVal);
        }
        return;
    }
    dfs(root, 0);

    return result.reduce((sum, val) => sum+val);
};
```
