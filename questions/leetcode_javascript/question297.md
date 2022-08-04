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
    let result = "";

    function traverse(node) {
        if(node == null) {
            result += "#,";
            return;
        }
        result += node.val + ",";
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result.slice(0, result.length-1);
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
    const elements = data.split(",");

    function buildTree(array) {
        let currVal = array.shift()

        if(currVal === "#") {
            return null;
        }
        let node = new TreeNode(parseInt(currVal));

        node.left = buildTree(array);
        node.right = buildTree(array);
        return node;
    }

    return buildTree(elements);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 * 序列化，即将二叉树转成字符串。因为二叉树中包含null节点。需要采用一个特殊字符标记，因为这里的二叉树的值都是数字，所以可以采用"#"作为标记
 * 反序列化，即将刚才生成的字符串转换成二叉树。首先，将字符串按照,split成字符串数组的形式，该数组中每一个元素即为一个二叉树的节点.
 * 可以采用List的方式，将已经遍历的节点删除，剩下的就是当该字符串不是"#"时，按照前序遍历的方式重建二叉树。
 */
 ```
