Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = {};
    const root = new TreeNode(preorder[0]);
    if (inorder.length == 0) {
        return null;
    }

    for(let i=0; i < inorder.length; i++) {
        map[inorder[i]] = i;
    }
    for(let i=1; i < preorder.length; i++) {
        findPosition(root, preorder[i]);
    }

    function findPosition(node, currentVal) {
        let isLeft = map[currentVal] < map[node.val];
        if(isLeft) {
            if(node.left == null) {
                node.left = new TreeNode(currentVal);
                return;
            } else {
                findPosition(node.left, currentVal);
            }
        } else {
            if(node.right == null) {
                node.right = new TreeNode(currentVal);
                return;
            } else {
                findPosition(node.right, currentVal);
            }
        }
    }

    return root;
};
```
