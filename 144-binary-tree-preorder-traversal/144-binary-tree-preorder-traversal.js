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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return [];
    
    let visited = [];
    let current = root;

    (function helperTraversal(node){
        visited.push(node.val)

        if(node.left) helperTraversal(node.left);
        if(node.right) helperTraversal(node.right);
    })(current);
    
    return visited;
};