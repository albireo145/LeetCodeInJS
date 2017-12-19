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
var maxSum = 0;
var maxPathSum = function(root) {
    if(root == null) return 0;
    maxSum = root.val;
    solution(root);
    return maxSum;
};
var solution = function(root) {
    if(root == null) return 0;
    var left = arguments.callee(root.left);
    var right = arguments.callee(root.right);
    var sum = root.val;
    if(left > 0) sum += left;
    if(right > 0) sum += right;
    if(sum > maxSum) maxSum = sum;
    return Math.max(root.val,Math.max(root.val + left,root.val + right));
}