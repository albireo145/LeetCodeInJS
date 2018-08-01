/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var res = [], map = {}, list = [], len = nums.length
  for (var i of nums) {
    map[i] = (map[i] || 0) + 1
  }
  function backtrace(pos) {
    if (list.length === len) {
      res.push(Array.from(list))
      return
    }
    for (; pos < len; pos++) {
      if (map[nums[pos]] > 0) {
        map[nums[pos]]--
        list.push(nums[pos])
        arguments.callee(0)
        list.pop()
        map[nums[pos]]++
      }
    }
  }
  backtrace(0)
  return res
};

// other
// var permute = function(nums) {
//   var res = [], map = {}, list = [], len = nums.length
//   function backtrace(remain) {
//     if (list.length === len) {
//       res.push(Array.from(list))
//       return
//     }
//     for (var pos = 0; pos < remain.length; pos++) {
//       list.push(remain[pos])
//       var next = remain.filter(x => x !== remain[pos])
//       arguments.callee(next)
//       list.pop()
//     }
//   }
//   backtrace(nums)
//   return res
// };
