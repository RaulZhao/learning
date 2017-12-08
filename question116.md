Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode left;
      TreeLinkNode right;
      TreeLinkNode next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example,
Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL

```java
/**
 * Definition for binary tree with next pointer.
 * public class TreeLinkNode {
 *     int val;
 *     TreeLinkNode left, right, next;
 *     TreeLinkNode(int x) { val = x; }
 * }
 */
public class Solution {
    LinkedList<TreeLinkNode> tmpList = new LinkedList<TreeLinkNode>();
    LinkedList<TreeLinkNode> stack = new LinkedList<TreeLinkNode>();
    TreeLinkNode preNode = null;

    public void connect(TreeLinkNode root) {
        if(root == null) {
            return;
        }
        stack.add(root);
        while(stack.size() > 0) {
            TreeLinkNode curr = stack.remove();
            if (curr.left != null) {
                tmpList.add(curr.left);
            }
            if (curr.right != null) {
                tmpList.add(curr.right);
            }
            if(preNode != null) {
                preNode.next = curr;
            }
            preNode = curr;

            if(stack.size() == 0) {
                stack = tmpList;
                tmpList = new LinkedList<TreeLinkNode>();
                preNode = null;
            }
        }
    }
}

/**
 * Definition for binary tree with next pointer.
 * public class TreeLinkNode {
 *     int val;
 *     TreeLinkNode left, right, next;
 *     TreeLinkNode(int x) { val = x; }
 * }
 */
public class Solution {
    TreeLinkNode preNode = null;

    public void connect(TreeLinkNode root) {
        if (root == null) {
            return;
        }
        if (root.left != null) {
            root.left.next = root.right;
            if (root.next != null) {
                root.right.next = root.next.left;
            }
        }
        connect(root.left);
        connect(root.right);
    }
}
```
