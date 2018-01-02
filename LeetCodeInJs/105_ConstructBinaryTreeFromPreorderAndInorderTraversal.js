/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    return TreeBuilder(preorder,inorder,0,0,inorder.length-1);
};

var TreeBuilder = function(preorder,inorder,preIdx,inStart,inEnd){
    if (preIdx > preorder.length - 1 || inStart > inEnd) {
        return null;
    }
    var root = new TreeNode(preorder[preIdx]);
    var inIdx = inorder.indexOf(preorder[preIdx]);
    root.left = arguments.callee(preorder,inorder,preIdx + 1, inStart ,inIdx - 1);
    root.right = arguments.callee(preorder,inorder,preIdx + inIdx - inStart + 1, inIdx + 1 ,inEnd);
    return root;
};