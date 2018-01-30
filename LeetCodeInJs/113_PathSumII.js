/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if(root == null) return [];
    var res = [];
    var list = [];
    var helper = function(root, sum){
        list.push(root.val);
        if(root.left == null && root.right == null && sum == root.val){
            res.push(list.slice(0));
        } 
        else{
            root.left != null && arguments.callee(root.left, sum - root.val);
            root.right != null && arguments.callee(root.right, sum - root.val);
        }
        list.pop();
    }
    helper(root, sum);
    return res;
};