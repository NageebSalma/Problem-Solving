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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root) return 0;
    
    let visited = [];
    
   (function helper(root){
        if(root.left) helper(root.left);
        visited.push(root.val);
        if(root.right) helper(root.right);
    })(root);
    
    return visited[k-1];
};