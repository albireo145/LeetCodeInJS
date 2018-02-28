/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if(root == null) return root;
    var stk = [root];
    var node = root;
    var sum = 0;
    while(stk.length > 0){
        while(node.right != null){
            node = node.right;
            stk.push(node);
        }
        while(stk.length > 0){
            node = stk.pop();
            sum += node.val;
            node.val = sum;
            if(node.left != null){
                node = node.left;
                stk.push(node);
                break;
            }
        }
    }
    return root;
};
var convertBST = function(root) {
    var sum = 0;
    var helper = function(root){
        if(root == null) return;
        helper(root.right);
        sum += root.val;
        root.val = sum;
        helper(root.left);
    }
    helper(root);
    return root;
};