Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    function serialize(root) {
        if(root == null) {
            return "#";
        }
        if(root.left == null && root.right == null) {
            return `${root.val}#`;
        }
        let current = `${root.val}`;
        return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
    }
    let str_s = ',' + serialize(s);
    let str_t = ',' + serialize(t);
    return str_s.indexOf(str_t) >= 0
};
```
