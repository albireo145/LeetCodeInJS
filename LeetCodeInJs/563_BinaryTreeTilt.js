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
var findTilt = function(root) {
    var result = 0;
    var helper = function(root){
        if(root == null) return 0;
        var left = arguments.callee(root.left);
        var right = arguments.callee(root.right);
        result += Math.abs(left - right);
        return left + right + root.val;
    }
    helper(root)
    return result;
};