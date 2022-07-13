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
    if(!head) return;
    
    let fast = head;
    let slow = head;
    
    //to find the middle of list: 
    //slow will point at the beginning of mid point at the end of this loop
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //reverse second part of list:
    let prev = null ; 
    let current = slow;
    while(current){
        let tracker = current.next;
        current.next = prev;
        prev = current;
        current = tracker;
    }
    // console.log(prev)
    
    //now we will merge the two lists alternatively:
    let h1 = head;
    let h2 = prev;
    while(h2.next){
        let tracker1 = h1.next;
        let tracker2 = h2.next;
        h1.next = h2;
        h1 = tracker1;
        
        h2.next = h1;
        h2 = tracker2;
    }
    
    
};