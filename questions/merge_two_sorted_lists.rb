# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
# Return the head of the merged linked list.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
    return list2 if list1.nil?
    return list1 if list2.nil?
    
    head = ListNode.new(-1, nil)
    curr_node = head

    while !list1.nil? && !list2.nil?
        if list1.val <= list2.val
            curr_node.next = list1
            list1 = list1.next
        else
            curr_node.next = list2
            list2 = list2.next
        end
        curr_node = curr_node.next
    end
    
    curr_node.next = list2 if list1.nil?
    curr_node.next = list1 if list2.nil?
    head.next
end
