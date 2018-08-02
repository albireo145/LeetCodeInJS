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
//  TODO 
// var tree2str = function(t) {
//   var arr = [t.val]
//   var stk = [t]
//   var str = ''
//   while(stk.length > 0) {
//     var curNode = stk[stk.length - 1]
//     while(curNode.left) {
//       str += '(' + curNode.left.val
//       stk.push(curNode.left)
//       curNode = curNode.left
//     }
//     if(curNode.right) {
//       stk.push(curNode.right)
//       str += '()'
//       str += '(' + curNode.right.val
//     } else {
//       str += ')'
//       stk.pop()
//     }
//   }
// };
var tree2str = function(t) {
  if (!t) return ''
  var str = t.val
  var left = t.left ? '(' + arguments.callee(t.left) + ')' : ''
  var right = t.right ? '(' + arguments.callee(t.right) + ')' : ''
  if (left === '' && right !== '') {
    return str + '()' + right
  }
  return str + left + right
}
var l2 = {val: 2, left: null, right: null}
var r3 = {val: 3, left: null, right: null}
var root = {val: 1, left: l2, right: r3}
tree2str(root)
