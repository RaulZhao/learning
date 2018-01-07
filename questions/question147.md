Sort a linked list using insertion sort.

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
    ListNode dummy = new ListNode(-1);
    public ListNode insertionSortList(ListNode head) {
        if(head == null) {
            return null;
        }
        dummy.next = head;
        ListNode head_previous = head;
        head = head.next;
        ListNode p = null;
        ListNode previous = null;

        while(head != null) {
            p = dummy.next;
            previous = p;
            while(p != null && p != head) {
                if (p.val > head.val) {
                    break;
                }
                previous = p;
                p = p.next;
            }

            ListNode tmp = head;
            head = head.next;
            if(p != tmp) {
                if (previous == p) {
                    dummy.next = tmp;
                } else {
                    previous.next = tmp;
                }
                tmp.next = p;
                head_previous.next = head;
            } else {
                head_previous = tmp;
            }

        }
        return dummy.next;
    }
}
```
