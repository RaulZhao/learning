Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode preNode = head;
        while(head != null) {
            if(head.val != preNode.val) {
                preNode = head;
                head = head.next;
            } else {
                preNode.next = head.next;
                head = head.next;
            }
        }
        return dummy.next;
    }
}
```
