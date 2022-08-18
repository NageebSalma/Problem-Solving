/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let reversed = '';
  let forward = ''
  while(head){
    reversed = head.val+reversed;
    forward += head.val;
    head = head.next;
  }
  
  return forward !== reversed ? false : true;
};