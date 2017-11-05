The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.


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
var rob = function(root) {
    function dfs(node) {
        if(node == null) {
            return 0;
        }
        node['leftMax'] = dfs(node.left);
        node['rightMax'] = dfs(node.right);
        let childMax = node.leftMax + node.rightMax;
        let temp1 = node.left == null ? 0 : node.left.leftMax + node.left.rightMax;
        let temp2 = node.right == null ? 0 : node.right.leftMax + node.right.rightMax;
        let subChildMax = node.val + temp1 + temp2;
        node['maxVal'] = Math.max(childMax, subChildMax);
        return node.maxVal;
    }

    return dfs(root);
};
```
