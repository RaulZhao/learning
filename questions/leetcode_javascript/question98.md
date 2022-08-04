Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.

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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let res = true;

    function iterate(node) {
        if(node == null) {
            return null;
        }

        let min = node.val;
        let max = node.val;
        if(node.left == null && node.right == null) {
            return [min, max];
        }
        let leftVal = iterate(node.left);
        if (leftVal !== null) {
            if (leftVal[1] >= node.val) {
                res = false;
            }
            min = leftVal[0];
        }
        let rightVal = iterate(node.right);
        if (rightVal !== null) {
            if (rightVal[0] <= node.val) {
                res = false;
            }
            max = rightVal[1];
        }
        return [min, max];
    }

    iterate(root);
    return res;
};
```
