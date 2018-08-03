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
var tree2str = function(t) {
  if (!t) return ''
  var stack = [t]
  var str = ''
  var curNode
  while(stack.length > 0) {
    curNode = stack.pop()
    if  (curNode === ')') {
      str += curNode
      continue
    }
    str += '(' + curNode.val
    if (!curNode.left && curNode.right) {
      str += '()'
    }
    if (curNode.right) {
      stack.push(')')
      stack.push(curNode.right)
    }
    if (curNode.left) {
      stack.push(')')
      stack.push(curNode.left)
    }
  }
  return str.substring(1)
};
// recursion
// var tree2str = function(t) {
//   if (!t) return ''
//   var str = t.val
//   var left = t.left ? '(' + arguments.callee(t.left) + ')' : ''
//   var right = t.right ? '(' + arguments.callee(t.right) + ')' : ''
//   if (left === '' && right !== '') {
//     return str + '()' + right
//   }
//   return str + left + right
// }
var l4 = {val: 4, left: null, right: null}
var l2 = {val: 2, left: null, right: l4}
var r3 = {val: 3, left: null, right: null}
var root = {val: 1, left: l2, right: r3}
tree2str(root)
