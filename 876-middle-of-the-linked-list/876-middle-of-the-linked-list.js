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
// 1 , 2 , 3 , 4 , 5 , null
//         s
//                f
//l = 3
var middleNode = function(head) {
  let slow = head, fast = head;
  let length = 0;

  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next; length+=2;
  }

  return slow;
};