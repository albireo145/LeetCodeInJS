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
var minDiffInBST = function(root) {
    var min = Infinity;
    var prev = null;
    var helper = function(root){
        if(root == null) return;
        helper(root.left);
        if(prev != null){
            min = Math.min(root.val - prev, min);
        }
        prev = root.val;
        helper(root.right);
    }
    helper(root);
    return min;
};