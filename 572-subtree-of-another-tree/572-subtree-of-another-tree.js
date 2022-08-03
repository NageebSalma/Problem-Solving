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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {    
    if(subRoot == null) return true;
    else if(root == null) return false
    if(isSameTree(root,subRoot)) return true;
    else return (isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot))
}

var isSameTree = function(p, q) {
    if(p==null && q==null) return true;
    else if(p==null || q==null) return false;
    
    if(p.val == q.val) return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
    else return false
};
//  const isSame = (n1, n2) => {
//         if (!n1 && !n2) return true;
//         if (!n1 || !n2 || n1.val !== n2.val) return false;
//         return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
//     };
    
//        // check if subRoot is subtree of root:
//     const DFS = (node) => {
//         if (!node) return false;
//         if (isSame(node, subRoot)) return true;
//         return DFS(node.left) || DFS(node.right);
//     };

//     return DFS(root);