/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length){
        let size = queue.length;
        let previous_node = null;
        
        for(let i = 0 ; i  < size ; i++){
            let node = queue.shift();
            
            if(previous_node){
                previous_node.next = node;
            }
            previous_node = node;
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return root;
};