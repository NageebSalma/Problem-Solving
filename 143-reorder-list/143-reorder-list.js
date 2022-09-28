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
    if(!head || head == null) return head;
    
    //find the head of the middle of my list
    let head_of_middle_list = find_mid(head);
    //reverse it
    let reversed_middle = reverse_list(head_of_middle_list);
    
//      let keeper1 = ptr1.next;
//     ptr1.next = ptr2;
//     ptr1 = keeper1;

//     let keeper2 = ptr2.next;
//     ptr2.next = ptr1;
//     ptr2 = keeper2;
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

// var reorderList = function(head) {
// if(!head || !head.next) return;

//   let ptr2 = find_mid(head);
//   ptr2 = reverse_linkedList(ptr2);
//   let ptr1 = head;

//   //1 -> 2 -> 3  | 5 -> 4 -> null
//   while(ptr2.next !== null){
//     let keeper1 = ptr1.next;
//     ptr1.next = ptr2;
//     ptr1 = keeper1;

//     let keeper2 = ptr2.next;
//     ptr2.next = ptr1;
//     ptr2 = keeper2;
//   }
//   return head;
// }

// function find_mid(head){
//   let slow = head , fast = head;

//   while(fast !== null && fast.next !== null){
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// }

// function reverse_linkedList(head){
//   let prev = null , current = head, keeper;

//   while(current){
//     keeper = current.next;
//     current.next = prev;
//     prev = current;
//     current = keeper;
//   }
  
//   return prev;
// }

// 1 , 2 , 3 ,4
// head1=> 1 , 2 ___ head2=> 4 ,3

// 1 , 4 , 2 ,  3
// head1Saver = head1.next
// head2Saver = head2.next
// head1.next= head2
// head2.next= head1Saver
// head1Saver.next = head2Saver