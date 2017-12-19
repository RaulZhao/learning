Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
Note: If the given node has no in-order successor in the tree, return null.

Link： http://leetcode.com/problems/inorder-successor-in-bst/

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
public class Solution {
  public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
    TreeNode successor = null;
    while(root != null) {
      if(p.val < root.val) {
        root = root.left;
      } else if (p.val > root.val) {
        root = root.right;
      } else {
        successor = root;
      }
    }

    return successor;
  }
}

```
