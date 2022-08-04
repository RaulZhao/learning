Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

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
    public ListNode reverseBetween(ListNode head, int m, int n) {
        if(m >= n) {
            return head;
        }
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        int index = 1;
        ListNode beforeReverse = dummy;
        ListNode pre = null;
        while(head != null && index <= n) {
            if(index < m) {
                beforeReverse = head;
                head = head.next;
            } else if(index == m) {
                pre = head;
                head = head.next;
            } else {
                ListNode tmp = head;
                head = head.next;
                tmp.next = pre;
                pre = tmp;
            }
            index++;
        }
        if(beforeReverse.next != null) {
            beforeReverse.next.next = head;
        }
        beforeReverse.next = pre;

        return dummy.next;
    }
}
```
