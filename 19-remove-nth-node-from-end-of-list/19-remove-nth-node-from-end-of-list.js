/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let fastptr = head;
    let slowptr = head;
    
    for(let i = 0 ; i < n ; i++){
        fastptr = fastptr.next;
    }
    // console.log(fastptr)
    if(!fastptr) return head.next;
    
    while(fastptr.next){
        slowptr = slowptr.next;
        fastptr = fastptr.next;
    }
    // console.log(slowptr , fastptr)
    slowptr.next = slowptr.next.next;
    return head
};