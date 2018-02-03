/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var stk = [root];
    var cur = root;
    while(stk.length > 0 || cur != null){
        while(cur != null){
            stk.push(cur);
            cur = cur.left;
        }
        cur = stk.pop();
        if(--k == 0) return cur.val;
        cur = cur.right;
    }
};
var kthSmallest = function(root, k) {
    var count = 1;
    var helper = function(root, k){
        if(root == null) return;
        var left = arguments.callee(root.left, k);
        if(left != null) return left;
        if(k == count++){
            return root.val;
        }
        var right = arguments.callee(root.right, k);
        if(right != null)
            return right;
    }
    return  helper(root, k);
};