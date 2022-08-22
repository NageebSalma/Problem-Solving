/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(right == left) return head;
    
    let steps_ahead = right - left + 1,
        slow = head, 
        fast = head,
        steps = 0;
    
    let node_before_left = slow;
    let i = 1 ;
    while(i < left){
        node_before_left = slow;
        slow = slow.next;
        
        while(steps < steps_ahead){
            fast = fast.next;
            steps++;
        }
       i++;
    }
    
    // console.log(slow , node_before_left, fast);
    
    //we need to reverse the list from node_before_left and fast;
    
    let current = slow;
    let prev    = null;
    i = 0;
    
    while(current !== null && i < right - left + 1){
        let keeper = current.next;
        current.next = prev;
        prev = current;
        current = keeper;
        i++;
    }
    // console.log(current)
    

     node_before_left.next = prev;
     slow.next = current;
    
     return left == 1 ? prev : head; 
};