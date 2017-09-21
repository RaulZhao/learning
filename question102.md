Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    let temp = [];
    if (root == null) {
        return res;
    }
    temp.push(root);
    while (temp.length > 0) {
        let n = temp.length;
        res[res.length] = [];

        for (let i=0; i < n; i++) {
            let node = temp.shift();
            res[res.length - 1].push(node.val);
            if(node.left !== null) {
                temp.push(node.left);
            }
            if(node.right !== null) {
                temp.push(node.right);
            }
        }
    }

    return res;
};
```
