Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let child1 = [];
    let child2 = [];
    let LCA = null;
    function dp(node, path) {
        if(node == null) {
            return;
        }
        if(child1.length > 0 && child2.length > 0) {
            return;
        }
        path.push(node);
        if(node == p) {
            child1 = path.slice(0);
        }
        if(node == q) {
            child2 = path.slice(0);
        }
        dp(node.left, path.slice(0));
        dp(node.right, path.slice(0));
        return;
    }

    dp(root, []);

    const len = Math.min(child1.length, child2.length);
    for(let i=0; i < len; i++) {
        if(child1[i] != child2[i]) {
            break;
        }
        LCA = child1[i];
    }
    return LCA;
};
```

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    function getCommon(node) {
        if(node == null) {
            return null;
        }
        if(node == p || node == q) {
            return node;
        }

        let left = getCommon(node.left);
        let right = getCommon(node.right);

        if(left !== null && right !== null) {
            return node;
        }
        if(left !== null) {
            return left;
        } else if(right !== null) {
            return right;
        }
        return null;
    }

    return getCommon(root);
};
```
