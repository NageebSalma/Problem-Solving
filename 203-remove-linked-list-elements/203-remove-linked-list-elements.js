/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//  [2 , 6]
//
var removeElements = function(head, val) {
    if(!head) return null;
    if(head.next == null) return head.val == val ? null : head;
    
    let pointer = head;
    let prev;
    
    while(pointer !== null && pointer.next !== null){
        prev = pointer;
        if(pointer.next.val == val) pointer.next = pointer.next.next;
        else pointer = pointer.next;
    }
    return head.val == val ? head.next : head;
};