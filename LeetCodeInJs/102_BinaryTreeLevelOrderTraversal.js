/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];
    var stk = [root];
    var res = [];
    while(stk.length > 0){
        var list = [];
        var n = stk.length;
        while(n-- > 0){
            var node = stk.shift();
            list.push(node.val);
            node.left && stk.push(node.left);
            node.right && stk.push(node.right);
        }
        res.push(list);
    }
    return res;
};