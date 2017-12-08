Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?

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
    List<Integer> result =  new ArrayList<Integer>();
    public List<Integer> preorderTraversal(TreeNode root) {
        traverse(root);
	    return result;
    }
    public void traverse(TreeNode node) {
        if(node == null) {
            return;
        }
        result.add(node.val);
        traverse(node.left);
        traverse(node.right);
        return;
    }
}
```
