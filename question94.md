Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

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
 * @return {number[]}
 */
 // Recursive
var inorderTraversal = function(root) {
    const result = [];
    function dfs(node) {
        if(node == null) {
            return;
        }
        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
};

// Iterate
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let node = root;

    while(stack.length > 0 || node !== null) {
        if(node == null) {
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        } else {
            stack.push(node);
            node = node.left;
        }
    }
    return result;
};
```
