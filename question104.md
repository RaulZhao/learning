Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = function(root) {
    let temp = [];
    if (root === null) {
        return 0;
    }
    temp.push(root);
    depth = 0;
    while(temp.length > 0) {
        depth++;
        let tt = [];
        temp.forEach((node) => {
            if(node.left !== null) {
                tt.push(node.left);
            }
            if(node.right !== null) {
                tt.push(node.right);
            }
        })
        temp = tt;
    }

    return depth;
};
```
