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
var findBottomLeftValue = function(root) {
    let nextMaxLevel = 0;
    let bottomleftVal = 0;
    const dfs = (root, level) => {
        if(!root) return;
        if(level === nextMaxLevel) {
            bottomleftVal = root.val
            nextMaxLevel+=1;
        }
        dfs(root.left, level+1);
        dfs(root.right, level+1);
    }
    dfs(root, 0);
    return bottomleftVal;
};