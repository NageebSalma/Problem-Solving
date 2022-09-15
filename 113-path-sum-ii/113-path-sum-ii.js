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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let output = []
    
   path_sum_helper(root, targetSum , [] , output)
    
    return output;
};

function path_sum_helper(root, targetSum , currentPath , output){
    if(!root) return;
    
    currentPath.push(root.val);
    
    if(root.val == targetSum && !root.left && !root.right) output.push(currentPath)
    
    let left = path_sum_helper(root.left , targetSum - root.val , currentPath.slice(0) , output);
    let right= path_sum_helper(root.right, targetSum - root.val , currentPath.slice(0) , output);
}