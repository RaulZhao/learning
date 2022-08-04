For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

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
    int sum;
    TreeNode root;
    public boolean hasPathSum(TreeNode root, int sum) {
        this.sum = sum;
        this.root = root;
        if(root == null) {
            return false;
        }
        return hasPath(root, 0);
    }
    public boolean hasPath(TreeNode node, int pathVal) {
        if (node.left == null && node.right == null) {
            return (pathVal + node.val) == sum;
        }
        if (node.left != null) {
            if (hasPath(node.left, pathVal + node.val)) {
                return true;
            }
        }
        if (node.right != null) {
            if (hasPath(node.right, pathVal + node.val)) {
                return true;
            }
        }
        return false;
    }
}
```
