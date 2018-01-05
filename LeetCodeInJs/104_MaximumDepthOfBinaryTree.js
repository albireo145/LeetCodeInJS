/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    var leftDep = arguments.callee(root.left) + 1;
    var rightDep = arguments.callee(root.right) + 1;
    return Math.max(leftDep,rightDep);
};