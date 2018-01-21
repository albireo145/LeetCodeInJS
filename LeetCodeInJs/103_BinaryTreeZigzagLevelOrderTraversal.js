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
var zigzagLevelOrder = function(root) {
    if(root == null) return [];
    var stk = [root];
    var res = [];
    while(stk.length > 0){
        var n = stk.length;
        var list = [];
        var node;
        var temp = [];
//         l2r
        for(;n > 0; n--){
            node = stk.pop();
            list.push(node.val);
            node.left && temp.push(node.left);
            node.right && temp.push(node.right);
        }
        stk = temp;
        res.push(list.slice(0));
        list = [];
        n = stk.length;
//         r2l
        temp = [];
        if(n > 0){
            for(;n > 0; n--){
                node = stk.pop();
                list.push(node.val);
                node.right && temp.push(node.right);
                node.left && temp.push(node.left);
            }
            stk = temp;
            res.push(list.slice(0));
        }
    }
    return res;
};