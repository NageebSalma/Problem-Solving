/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let merge = (list1 , list2) => {
    // console.log('here is merge')
    let current = new ListNode();
    let dummy = current;
        
    while(list1 && list2){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }
        else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next
     }
    if(list1){
        current.next = list1;
    }
    if(list2){
        current.next = list2;
    }
    // console.log(dummy.next)
    return dummy.next;
}

var sortList = function(head) {
    if(!head || !head.next) return head;
    let fast = head, slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let middle = slow.next;
    slow.next = null;
    // console.log(head)
    // console.log(middle)
    return merge(sortList(head), sortList(middle));
}







