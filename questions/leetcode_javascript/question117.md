Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL

```js
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(root == null) {
        return;
    }
    if(root.left != null && root.right != null) {
        root.left.next = root.right;
        if (root.next != null) {
            root.right.next = findNextLink(root.next);
        }
        connect(root.right);
        connect(root.left);
    } else if(root.left == null && root.right != null) {
        if (root.next != null) {
            root.right.next = findNextLink(root.next);
        }
        connect(root.right);
    } else if(root.right == null && root.left != null) {
        if (root.next != null) {
            root.left.next = findNextLink(root.next);
        }
        connect(root.left);
    }

    function findNextLink(nextParentNode) {
        if (nextParentNode != null) {
            if(nextParentNode.left == null && nextParentNode.right == null) {
                return findNextLink(nextParentNode.next);
            } else {
                return nextParentNode.left || nextParentNode.right;
            }
        }
        return null;
    }
};
```
