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
var averageOfLevels = function(root) {
    var queue = [];
    var res = [];
    queue.push(root);
    while(queue.length > 0){
        var n = queue.length;
        var m = n;
        var sum = 0;
        while(n > 0){
            var node = queue.shift();
            sum += node.val;
            if(node.left != null){
                queue.push(node.left);
            }
            if(node.right != null){
                queue.push(node.right);
            }
            n--;
        }
        res.push(sum / m);
    };
    return res;
};