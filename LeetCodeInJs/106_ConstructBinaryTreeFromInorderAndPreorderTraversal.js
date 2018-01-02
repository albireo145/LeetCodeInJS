/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return TreeBuilder(inorder,postorder, 0, postorder.length - 1, 0, inorder.length);
};

var TreeBuilder = function(inorder, postorder, postStart, postEnd, inStart, inEnd){
    if(postEnd < postStart || inStart > inEnd) return null;
    var root = new TreeNode(postorder[postEnd]);
    var inPos = inorder.indexOf(postorder[postEnd]);

    root.left = arguments.callee(inorder, postorder, postStart, postStart + inPos - inStart - 1, inStart, inPos - 1);
    
    root.right = arguments.callee(inorder, postorder, postStart + inPos - inStart, postEnd - 1, inPos + 1, inEnd);
    return root;
}