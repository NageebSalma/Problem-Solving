/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head) return null
    if(!head.next) return null
  let slow = head, fast = head;

  while(fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
  }
    if(slow.next !== null){
        slow.val = slow.next.val;
        slow.next = slow.next.next;
        return head;
    }
    else head.next = null;
    return head;
 
};