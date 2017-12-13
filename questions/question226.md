Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1

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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(root === null) {
        return null;
    }

    function invert(node) {
        if(node.left == null && node.right == null) {
            return;
        }
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left !== null) {
            invert(node.left);
        }
        if(node.right !== null) {
            invert(node.right);
        }
    }

    invert(root);
    return root;
};
```

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        revert(root);
        return root;
    }
    public void revert(TreeNode node) {
        if(node == null) {
            return;
        }
        TreeNode tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        revert(node.left);
        revert(node.right);
    }
}
```
