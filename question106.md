Given inorder and postorder traversal of a tree, construct the binary tree.

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
    int postorderIndex;
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        this.postorderIndex = postorder.length-1;
        return construct(inorder, postorder, 0, postorderIndex);
    }
    public TreeNode construct(int[] inorder, int[] postorder, int left, int right) {
        if (left > right) {
            return null;
        }
        int indexOfRoot = -1;
        TreeNode root = new TreeNode(postorder[postorderIndex]);
        postorderIndex -= 1;
        for(int i=left; i <= right; i++) {
            if(inorder[i] == root.val) {
                indexOfRoot = i;
            }
        }
        TreeNode rightNode = construct(inorder, postorder, indexOfRoot+1, right);
        TreeNode leftNode = construct(inorder, postorder, left, indexOfRoot-1);
        root.right = rightNode;
        root.left = leftNode;
        return root;
    }
}
```
