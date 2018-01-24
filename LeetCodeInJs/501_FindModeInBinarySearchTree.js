/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// without map
var findMode = function(root) {
    var prev;
    var max = 0;
    var count = 1;
    var res = [];
    var helper = function(root){
        if(root == null) return null;
        arguments.callee(root.left);
        if(prev != null){
            if(prev == root.val){
                count++;
            }else{
                count = 1;
            }
            if(count > max){
                res = [root.val];
                max = count;
            }else if(count == max){
                res.push(root.val);
            }
        }else{
            max = 1;
            res = [root.val];
        }
        prev = root.val;
        arguments.callee(root.right);
    }
    helper(root);
    return res;
};

// using map o(n) space
// var findMode = function(root) {
//     var map = {};
//     var helper = function(root, map){
//         if(root == null) return;
//         arguments.callee(root.left, map);
//         map[root.val] = map[root.val] == null ? 0 : map[root.val] + 1;
//         arguments.callee(root.right, map);
//     }
//     helper(root, map);
//     var res = [];var max = -Infinity;
//     for(var idx in map){
//         if(map[idx] > max){
//             res = [Number(idx)];
//             max = map[idx];
//         }else if(map[idx] == max){
//             res.push(Number(idx));
//         }
//     }
//     return res;
// };