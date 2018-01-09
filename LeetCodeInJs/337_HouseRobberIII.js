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
var rob = function(root) {
    var helper = function(root){
        if(root == null) return [0,0];
        var left = arguments.callee(root.left);
        var right = arguments.callee(root.right);
        var include = left[0] + right[0] + root.val;
        var exclude = Math.max(left[0] + right[0],
                               left[1] + right[0],
                               left[0] + right[1],
                               left[1] + right[1]);
        return [exclude, include];
    }
    return Math.max(helper(root)[0],helper(root)[1]);
};