```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root == null) {
        return "";
    }
    let str = "";
    str += root.val + ",";
    str += serialize(root.left);
    str += serialize(root.right);

    return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "") {
        return null;
    }
    data = data.slice(0, data.length-1);

    const elements = data.split(',');
    const root = new TreeNode(parseInt(elements[0]));

    elements.forEach((val, index) => {
        if(index !== 0) {
            insertToTree(root, val);
        }
    });
    function insertToTree(treeNode, num) {
        num = parseInt(num);
        if(num < treeNode.val) {
            if(treeNode.left == null) {
                treeNode.left = new TreeNode(num);
            } else {
                insertToTree(treeNode.left, num);
            }
        } else {
            if(treeNode.right == null) {
                treeNode.right = new TreeNode(num);
            } else {
                insertToTree(treeNode.right, num);
            }
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 ```
