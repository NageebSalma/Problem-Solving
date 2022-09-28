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
    if(!head || !head.next) return head;
    
    //find the head of the middle of my list
    let head_of_middle_list = find_mid(head);
    //reverse it
    let reversed_middle = reverse_list(head_of_middle_list);
    
    while(reversed_middle.next){
        let head1Saver = head.next
        let head2Saver = reversed_middle.next
        head.next= reversed_middle
        reversed_middle.next= head1Saver
        head = head1Saver;
        reversed_middle = head2Saver
    }; 
};

function find_mid(head){
    let slow = head, fast = head;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    };
    
    return slow
};
//1 ,2 , null
//c , k, p
//1 ,  null
//p

function reverse_list(head){
    
    let prev = null, current=head, keeper;
    
    while(current){
        keeper = current.next;
        current.next = prev;
        prev = current;
        current = keeper;
    }
    return prev
}

