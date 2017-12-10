Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const tempList = [];
    const mergeTwo = (list1, list2) => {
        let result_pointer =  new ListNode(-1);
        let result = result_pointer;

        while(list1 != null && list2 != null) {
            if (list1.val >= list2.val) {
                result_pointer.next = list2;
                list2 = list2.next;
            } else {
                result_pointer.next = list1;
                list1 = list1.next;
            }
            result_pointer = result_pointer.next;
        }
        if (list1 == null) {
            result_pointer.next = list2;
        } else if (list2 == null) {
            result_pointer.next = list1;
        }

        return result.next ;
    };

    if (lists.length < 1) {
        return null;
    }

    while(lists.length > 1) {
        const temp = mergeTwo(lists.pop(), lists.pop());
        lists.unshift(temp);
    }
    return lists[0];
};
```
