Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

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
var diameterOfBinaryTree = function(root) {
    let maxLength = 0;
    if(root === null) {
        return 0;
    }

    function traversal(node) {
        let leftLength = 0;
        let rightLength = 0;
        if(node.left == null && node.right == null) {
            return 0;
        }
        if(node.left !== null) {
            leftLength = traversal(node.left) + 1;
        }
        if(node.right !== null) {
            rightLength = traversal(node.right) + 1;
        }

        maxLength = Math.max((leftLength + rightLength), maxLength);
        return Math.max(leftLength, rightLength);
    }

    traversal(root);
    return maxLength;
};
```
