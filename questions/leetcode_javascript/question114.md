Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    function flat(node) {
        if(node.left == null && node.right == null) {
            return node;
        }
        if (node.left !== null) {
            if (node.right == null) {
                node.right = node.left;
                node.left = null;
            } else {
                let temp = node.right;
                node.right = node.left;
                let leftPointer = flat(node.left);
                leftPointer.right = temp;
                node.left = null;
                return flat(temp);
            }
        }
        return flat(node.right);
    }
    if (root !== null) {
        flat(root);
    }
};
```
