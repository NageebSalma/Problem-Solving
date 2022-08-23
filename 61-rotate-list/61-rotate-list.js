/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
       
    let tail = head;
    let length = 1;
    
    while(tail.next){
        tail = tail.next;
        length++;
    }
    k = k % length;
    
    tail.next = head;
    let last_node_of_rotated_list = head;
    
    let skip_length = length - k;
    let i = 0;
    for(i ; i < skip_length - 1; i++){
        last_node_of_rotated_list = last_node_of_rotated_list.next;
    };
      // 'last_node_of_rotated_list.next' is pointing to the sub-list of 'k' ending nodes
    head = last_node_of_rotated_list.next;
    last_node_of_rotated_list.next = null;
  
    return head;
};