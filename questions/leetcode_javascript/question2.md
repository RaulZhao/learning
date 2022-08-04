You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carryBit = 0;
    let currentL1, currentL2;
    let result = [];
    do {
        let currentNodeVal_L1 = l1.val || 0;
        let currentNodeVal_L2 = l2.val || 0;
        let currentSum = currentNodeVal_L1 + currentNodeVal_L2 + carryBit;
        carryBit = parseInt(currentSum/10%10);
        result.push(currentSum%10);
        l1 = l1.next || '';
        l2 = l2.next || '';
    } while (l1 || l2 || carryBit > 0);

    return result;

};
```
