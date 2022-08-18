/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
if(!head || !head.next) return;

  let ptr2 = find_mid(head);
  ptr2 = reverse_linkedList(ptr2);
  let ptr1 = head;

  //1 -> 2 -> 3  | 5 -> 4 -> null
  while(ptr2.next !== null){
    let keeper1 = ptr1.next;
    ptr1.next = ptr2;
    ptr1 = keeper1;

    let keeper2 = ptr2.next;
    ptr2.next = ptr1;
    ptr2 = keeper2;
  }
  return head;
}

function find_mid(head){
  let slow = head , fast = head;

  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverse_linkedList(head){
  let prev = null , current = head, keeper;

  while(current){
    keeper = current.next;
    current.next = prev;
    prev = current;
    current = keeper;
  }
  
  return prev;
}
