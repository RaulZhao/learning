Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return true;
    }
    function getLength(node) {
        let count = 0;
        while(node !== null) {
            count++;
            node = node.next;
        }
        return count;
    };

    let n = getLength(head);
    let isOdd = (n % 2 == 1);
    let half = Math.floor(n/2);
    if(isOdd) {
        half++;
    }
    let firstHead = head;
    let secondHead = head;
    let i = 0;
    let previous = null;
    while (i < half) {
        firstHead = secondHead;
        secondHead = secondHead.next;
        firstHead.next = previous;
        previous = firstHead;
        i++;
    }
    if(isOdd) {
        firstHead = firstHead.next;
    }
    while (secondHead !== null && firstHead !== null) {
        if (firstHead.val !== secondHead.val) {
            return false;
        }
        firstHead = firstHead.next;
        secondHead = secondHead.next;
    }
    return true;
};
```
