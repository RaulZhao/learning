Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]


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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = [];
    const visited = [];
    if (root === null) {
        return result;
    }
    function dfs(node, pathArray) {
        if(node.left === null && node.right === null) {
            pathArray.push(node.val);
            result.push(pathArray.join('->'));
            pathArray.pop();
            return;
        }
        pathArray.push(node.val);
        if(node.left) {
            dfs(node.left, pathArray);
        }
        if(node.right) {
            dfs(node.right, pathArray);
        }
        pathArray.pop(node.val);
    }
    dfs(root, visited);
    return result;
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
    List<String> result = new ArrayList<String>();
    public List<String> binaryTreePaths(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        helper(root, sb);
        return result;
    }

    public void helper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            return;
        }
        int len = sb.length();
        sb.append(node.val).append("->");
        if(node.left == null && node.right == null) {
            String s = sb.toString();
            result.add(s.substring(0, s.length()-2));
            sb.setLength(len);
            return;
        }
        helper(node.left, sb);
        helper(node.right, sb);
        sb.setLength(len);
    }
}
```
