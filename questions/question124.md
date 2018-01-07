Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
1. Given the below binary tree,

       1
      / \
     -2  3
Return 4

2. Given the below binary tree,

       1
      / \
     2   3
Return 6

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
var maxPathSum = function(root) {
    const results = [];
    let result = Number.NEGATIVE_INFINITY;

    maxSum(root);
    results.forEach((val) => {
        result = Math.max(val, result);
    });
    return result;

    function maxSum(node) {
        if(node == null) {
            return 0;
        }
        let leftSum = maxSum(node.left);
        let rightSum = maxSum(node.right);

        if(leftSum > 0 && rightSum > 0) {
            results.push(node.val + leftSum + rightSum);
            return node.val + Math.max(leftSum, rightSum);
        } else if(leftSum > 0 && rightSum <= 0) {
            results.push(node.val + leftSum);
            return node.val + leftSum;
        } else if(rightSum > 0 && leftSum <= 0) {
            results.push(node.val + rightSum);
            return node.val + rightSum;
        } else {
            results.push(node.val);
            return node.val;
        }
    }
};
```
