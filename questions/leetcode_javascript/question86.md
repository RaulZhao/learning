Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.


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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let dummyLeft = new ListNode(-1);
	let dummyRight = new ListNode(-1);
	let leftHead = dummyLeft;
	let rightHead = dummyRight;

	while(head != null) {
		if(head.val < x) {
			leftHead.next = head;
			leftHead = head;
		} else {
			rightHead.next = head;
			rightHead = head;
		}
		head = head.next;
	}

	rightHead.next = null
	leftHead.next = dummyRight.next;
	return dummyLeft.next;
};
```
