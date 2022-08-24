/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    
    let minDepth = 0;
    let queue = [root];
    
    while(queue.length){
        let queueSize = queue.length;
        minDepth++;
        
        for(let i = 0 ; i < queueSize ; i++){
            let node = queue.shift();
            
            if(!node.right && !node.left) return minDepth;
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    
    return minDepth;
};