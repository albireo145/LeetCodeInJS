/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  var arr = [t.val]
  var stk = [t]
  var str = ''
  while(stk.length > 0) {
    var curNode = stk[stk.length - 1]
    while(curNode.left) {
      str += '(' + curNode.left.val
      stk.push(curNode.left)
      curNode = curNode.left
    }
    str += '()('
    if(curNode.right) {
      stk.push(curNode.right)
      str += curNode.right.val
      curNode = curNode.rigth
    } else {
      str += '))'
      stk.pop()
    }
  }
};