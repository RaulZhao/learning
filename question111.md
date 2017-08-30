Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
var minDepth = function(root) {
    let temp = [];
    let min = Number.MAX_VALUE;

    function findDepth(node) {
        if(node.left == null && node.right == null) {
            const dep = temp.length;
            min = Math.min(dep, min);
        }
        if(node.left !== null) {
            temp.push(node.left);
            findDepth(node.left);
            temp.pop();
        }
        if(node.right !== null) {
            temp.push(node.right);
            findDepth(node.right);
            temp.pop();
        }
    }
    if (root == null) {
        return 0;
    }
    temp.push(root);
    findDepth(root);
    return min;
};
```
