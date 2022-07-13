/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let current = head
    current.val = 'v'
    while(current.next){
        if(current.next.val!== 'v'){
            // console.log(current.next)
            current.next.val = 'v'
            current = current.next;
        }
        else return true;
    }
    return false;
};