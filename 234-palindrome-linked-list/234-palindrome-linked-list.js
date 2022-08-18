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
  let mid = find_mid_of_linkedlist(head);
    
  let pointer1 = head;
  let pointer2 = mid;
  pointer2 = reverse_linked_list(pointer2);
    
  while(pointer2 !== null){
      if(pointer1.val !== pointer2.val) return false;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
  }
    return true;
}

function find_mid_of_linkedlist(head){
  let fast = head , slow = head;
  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  return fast!== null ? slow.next : slow;
}

function reverse_linked_list(head){
    let prev = null;
    let current = head;
    let tracker 
    while(current){
        tracker = current.next;
        current.next = prev;
        prev = current 
        current = tracker;
    }
    return prev;
}
