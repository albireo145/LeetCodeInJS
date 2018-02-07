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
var longestUnivaluePath = function(root) {
    var max = 0;
    var helper = function(root,prev){
        if(root == null) return 0;
        var left = arguments.callee(root.left, root.val);
        var right = arguments.callee(root.right, root.val);
        max = Math.max(left + right, max);
        return prev != root.val ? 0 : Math.max(left, right) + 1;
    }
    helper(root, null);
    return max;
};