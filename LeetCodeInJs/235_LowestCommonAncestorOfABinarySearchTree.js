/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var node = root;
    while(true){
        if(Math.max(p,q) < node.val){
            node = node.left;
        }else if(Math.min(p,q) > node.val){
            node = node.right;
        }else{
            return node;
        }
    }
};