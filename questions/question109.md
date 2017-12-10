Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    ListNode h;
    public TreeNode sortedListToBST(ListNode head) {
        h = head;
        int length = getLen(head);
        return sortedListToTree(0, length - 1);
    }

    public int getLen (ListNode head) {
        int len = 0;
        ListNode p = head;
        while(p != null) {
            len++;
            p = p.next;
        }
        return len;
    }

    public TreeNode sortedListToTree(int start, int end) {
        if (start > end) {
            return null;
        }
        int mid = (start + end) / 2;
        TreeNode left = sortedListToTree(start, mid - 1);
        TreeNode node = new TreeNode(h.val);
        h = h.next;
        TreeNode right = sortedListToTree(mid + 1, end);

        node.left = left;
        node.right = right;
        return node;
    }
}
```
