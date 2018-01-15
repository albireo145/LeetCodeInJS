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
var diameterOfBinaryTree = function(root) {
    var max = 0;
    var helper = function(root){
        if(root == null) return 0;
        var left = arguments.callee(root.left);
        var right = arguments.callee(root.right);
        if(max < left + right) max = left + right;
        return Math.max(left, right) + 1;
    };
    helper(root);
    return max;
};