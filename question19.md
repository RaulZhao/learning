Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.


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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let cache = [];
    let i = 0;
    let current = head;
    while(current) {
        cache[i] = current;
        current = current.next;
        i++;
    }

    let index = cache.length - n;

    if (!cache[index - 1]) {
        return cache[1] || [];
    } else if (!cache[index + 1]){
        cache[index - 1].next = null;
        return cache[0];
    } else {
        cache[index - 1].next = cache[index + 1];
        return cache[0];
    }
 };
 ```
