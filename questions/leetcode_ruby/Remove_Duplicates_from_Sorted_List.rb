# Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    res_node = ListNode.new(-Float::INFINITY, head)
    previous_node = res_node
    while !head.nil?
        if previous_node.val < head.val
            previous_node.next = head
            previous_node = previous_node.next
        else
            previous_node.next = nil
        end
        head = head.next 
    end
    res_node.next
end
