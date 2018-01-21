/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function(root, L, R) {
    if(root == null) return null;
    
    if(root.val < L) return arguments.callee(root.right, L, R);
    if(root.val > R) return arguments.callee(root.left, L, R);
    
    root.left = arguments.callee(root.left, L, R);
    root.right = arguments.callee(root.right, L, R);
    return root;
};