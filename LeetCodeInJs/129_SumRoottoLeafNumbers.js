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
var sumNumbers = function(root) {
    if(root == null) return 0;
    var helper = function(root,number,numset){
        number = number * 10 + root.val;
        if(root.left == null && root.right == null){
            numset.push(number);
            return;
        }
        root.left && arguments.callee(root.left,number,numset);
        root.right && arguments.callee(root.right,number,numset);
    };
    const numset = [];
    var num = 0;
    helper(root,num,numset);
    // for(var i = 0; i < numset.length; i++){
    //     res += numset[i];
    // }
    return numset.reduce((cur,next) => cur + next);
};
