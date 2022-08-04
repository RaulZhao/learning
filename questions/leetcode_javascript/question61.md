Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.


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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const dummy = new ListNode(-1);
    dummy.next = head;

    let p = head;
    let length = 0;
    while(p !== null) {
        length++;
        p = p.next;
    }

    k = k % length;
    if(k === 0) {
        return head;
    }

    let current = head;
    while(length > 0) {
        let next = current.next
        if(length === k+1) {
            current.next = null;
        }
        if(length === k) {
            dummy.next = current;
        }
        if(length === 1) {
            current.next = head;
        }

        length--;
        current = next;
    }

    return dummy.next;
};
```
