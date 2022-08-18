/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head,
        fast = head;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        if(slow == fast) return start_of_cycle(cycle_length(slow) , head);
    }
    return null;
};

function cycle_length(slow){
    let new_slow = slow;
    let cycle_length = 0;
    
    while(1){
        new_slow = new_slow.next;
        cycle_length++;
        if(new_slow == slow) break;
    }
    
    return cycle_length;
};

function start_of_cycle(cycle_length , head){
    let ptr1=head ,ptr2=head;
    for(let i = 0 ; i < cycle_length ; i++) ptr2 = ptr2.next;

    while(ptr2 !== ptr1){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
}










