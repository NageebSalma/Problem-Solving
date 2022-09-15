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
 * @return {string[]}
 */
function binaryTreePaths_Recursive(t , currentPath = [] ,paths){
    if(!t) return;
    
    currentPath.push(t.val);
    
    if(!t.left && !t.right) paths.push(currentPath);
    
    let left = binaryTreePaths_Recursive(t.left , currentPath.slice(0) ,paths)
    let right = binaryTreePaths_Recursive(t.right , currentPath.slice(0) ,paths)

    }

var binaryTreePaths = function(t) {
    let paths = [];
    
    binaryTreePaths_Recursive(t , currentPath = [] ,paths);
    
    let result = [];
    for(path of paths){
        let p = "";
        for(let i = 0 ; i < path.length ; i++){
            const node = path[i];
            if(i !== path.length-1) p += node + '->'
            else p+= node;
        };
        result.push(p);
    }
    
    return result;
};