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
        /*each pointer will progress forward one index value at a time equally. 
		If one list is longer than the other,or skip condition, pointer on shorter list will switch to the head of the other list,
		eventually intersecting with each other. If the lists to not intersect, they will intersect at null, resulting in return null */
        //ternary operator (?), replaces if else statement
        //while condition ? if true, firstPointer.next : else false, headB
        firstPointer = firstPointer ? firstPointer.next : headB;
        //while condition ? if true, secondPointer.next : else false, headA
        secondPointer = secondPointer ? secondPointer.next : headA;
        // console.log('firstPointer[i]:', firstPointer);
        // console.log('secondPointer[i]:', secondPointer);
    }
    return firstPointer;
    
};