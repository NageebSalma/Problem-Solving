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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let visited = [];
    let current = root;
    
    (function helperTraversal(node){
        if(node.left) helperTraversal(node.left);
        visited.push(node.val)
        if(node.right) helperTraversal(node.right);
    })(current);
    
    for(let  i = 1 ; i < visited.length ; i++){
        if(visited[i] <= visited[i-1]) return false;
    }
    return true
};