/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let firstPointer = headA;
    let secondPointer = headB;

    while(firstPointer != secondPointer) {
        firstPointer = firstPointer ? firstPointer.next : headB;
        secondPointer = secondPointer ? secondPointer.next : headA;
    }
    return firstPointer;
    
};