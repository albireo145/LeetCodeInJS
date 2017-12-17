/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    if(root == null) return;
    var treeNode = root;
    while(treeNode != null){
        if(treeNode.left != null){
            if(treeNode.right != null){
                var cur = treeNode.left;
                while(cur.right != null) cur = cur.right;
                cur.right = treeNode.right;
            }
            treeNode.right = treeNode.left;
            treeNode.left = null;
        }
        treeNode = treeNode.right;
    }
};
/**DSF */
// var flatten = function(root) {
//     if(root == null) return;
//     var stk = [root];
//     var treeNode ;
//     while(stk.length>0){
//         treeNode = stk.pop();
//         if(treeNode.right){
//             stk.push(treeNode.right)
//         }
//         if(treeNode.left){
//             stk.push(treeNode.left)
//         }
//         if(stk.length>0){
//             treeNode.right = stk.peek();
//         }
//         treeNode.left = null;
//     }
// };
// Array.prototype.peek = function(){
//     return this[this.length-1]
// }

/**recursion */
// var flatten = function(root) {
//     if(root == null) return;

//     arguments.callee(root.left);
//     arguments.callee(root.right);
    
//     if(!root.left) return;
//     if(!root.right){
//         root.right = root.left;
//         root.left = null;
//         return;
//     } 
//     var cur = root.left;
//     while(cur.right!=null) cur = cur.right;
//     cur.right = root.right;
//     root.right = root.left;
//     root.left = null;
// };