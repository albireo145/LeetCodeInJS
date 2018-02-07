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
// bfs
var largestValues = function(root) {
    if(root == null) return [];
    var queue = [root];
    var node;
    var res = [];
    var depth = 0;
    while(queue.length > 0){
        var n = queue.length;
        res[depth] = -Infinity;
        while(n-- > 0){
            node = queue.shift();
            res[depth] = Math.max(node.val, res[depth]);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        depth++;
    }
    return res;
};

// dfs
// var largestValues = function(root) {
//     if(root == null) return [];
//     var stk = [[root, 0]];
//     var pair;
//     var res = [];
//     while(stk.length > 0){
//         pair = stk.pop();
//         res[pair[1]] = res[pair[1]] == null ? pair[0].val : Math.max(res[pair[1]], pair[0].val);
//         pair[0].left && stk.push([pair[0].left, pair[1] + 1]);
//         pair[0].right && stk.push([pair[0].right, pair[1] + 1]);
//     }
//     return res;
// };