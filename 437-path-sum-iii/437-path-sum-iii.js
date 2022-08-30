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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    return pathSumHelper(root , [] , targetSum);
};

function pathSumHelper(currentNode , currentPath , S){
    if(!currentNode) return 0;
    
    currentPath.push(currentNode.val);
    
    let pathCounter = 0,
        pathSum = 0;
    
    for(let i = currentPath.length-1 ; i >= 0 ; i--){
        let node = currentPath[i];
        
        pathSum += node;
        
        if(pathSum == S) pathCounter++;
    }
    
    //do this for left and right subtress
    pathCounter += pathSumHelper(currentNode.left , currentPath , S);
    pathCounter += pathSumHelper(currentNode.right , currentPath , S);
    
    currentPath.pop();
    
    return pathCounter;
}