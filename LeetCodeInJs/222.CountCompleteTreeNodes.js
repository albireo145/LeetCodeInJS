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
var countNodes = function(root) {
    var height = function(root){
        return root == null ? -1 : arguments.callee(root.left) + 1;
    }
    var nodes = 0, h = height(root);
    while(root != null){
        if(height(root.right) == h - 1){
            nodes += 1 << h;
            root = root.right;
        }else{
            nodes += 1 << h-1;
            root = root.left;
        }
        h--;
    }
    return nodes;
};
// var countNodes = function(root) {
//     var helper = function(root){
//         if(root == null) return 0;
//         var left = root.left;
//         var right = root.right;
//         var l = 1;
//         var r = 1;
//         while(left != null) {l++; left = left.left;}
//         while(right != null) {r++; right = right.right;}
//         if(l == r) return (1 << l) - 1; /*Math.pow(2, l) - 1;*/
//         else return 1 + arguments.callee(root.left) + arguments.callee(root.right);
//     }
//     return helper(root);
// };