Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

### DFS
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const visited = [];
    let result = true;

    function set(node) {
        visited.push(node.val);
        if(node.left == null && node.right == null) {
            return;
        }
        if(node.left !== null) {
            set(node.left);
        } else {
            visited.push(null);
        }
        if(node.right !== null) {
            set(node.right);
        } else {
            visited.push(null);
        }
    }

    function compare(node) {
        if(visited.shift() !== node.val) {
            result = false;
            return;
        }
        if(node.left == null && node.right == null) {
            return;
        }
        if(node.right !== null) {
            compare(node.right);
        } else {
            if(visited.shift() !== null) {
                result = false;
                return;
            }
        }
        if(node.left !== null) {
            compare(node.left);
        } else {
            if(visited.shift() !== null) {
                result = false;
                return;
            }
        }
    }

    if(root == null) {
        return result;
    }
    if(root.left == null && root.right == null) {
        return result
    }
    if(root.left && root.right) {
        set(root.left);
        compare(root.right);
        return result;
    }
    return false;
};
```

### BFS
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let leftQ = [];
    let rightQ = [];

    if(root === null) {
        return true;
    }

    leftQ.push(root.left);
    rightQ.push(root.right);
    while(leftQ.length > 0 && rightQ.length > 0) {
        let n = leftQ.length;
        let isNextLeft = false;
        let isNextRight = false;
        if(leftQ.length !== rightQ.length) {
            return false;
        }
        let tempLeft = [];
        let tempRight = [];
        for(let i=0; i < n; i++) {
            let l = leftQ.shift();
            let r = rightQ.shift();
            if(l == null && r == null) {

            } else if (l !== null && r !== null) {
                if(l.val !== r.val) {
                    return false;
                }
                if (l.left !== null || l.right !== null) {
                    isNextLeft = true;
                }
                if (r.left !== null || r.right !== null) {
                    isNextRight = true;
                }
                tempLeft.push(l.left, l.right);
                tempRight.push(r.right, r.left);
            } else {
                return false;
            }
        }
        if (isNextLeft && isNextRight) {
            leftQ = tempLeft;
            rightQ = tempRight;
        } else if (isNextLeft !== isNextRight) {
            return false;
        }
    }

    return true;
};
```
