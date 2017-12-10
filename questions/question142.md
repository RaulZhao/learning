Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let res = null;
    let slow = head;
    let fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            res = slow;
            break;
        }
    }

    if(res !== null) {
        slow = head;
        fast = res;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    } else {
        return res;
    }
};
```
