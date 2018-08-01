/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  var curLength = 1, prevLength = res = 0
  var len = s.length
  for (var i = 1; i < len; i++) {
    if (s[i] === s[i - 1]) curLength++
    else {
      prevLength = curLength
      curLength = 1
    }
    if (prevLength >= curLength) res++
  }
  return res
}
// var countBinarySubstrings = function(s) {
//   var curLength = 1, prevLength = res = 0
//   for (var i = 1; i < s.length + 1; i++) {
//     if (s[i] === s[i - 1]) {
//       curLength++
//     } else {
//       res += Math.min(curLength, prevLength)
//       prevLength = curLength
//       curLength = 1
//     }
//   }
//   return res
// }
// var countBinarySubstrings = function(s) {
//     if (s.length < 2) return 0
//     var count = 0, left, right
//     var arr = []
//     for(var i = 0; i < s.length - 1; i++) {
//       if (s[i] !== s[i + 1]) {
//         arr.push([i, i + 1])
//       }
//     }
//     for (var pair of arr) {
//       left = pair[0]
//       right = pair[1]
//       while (true) {
//         if (left - 1 < 0 || right + 1 > s.length + 1) {
//           count += Math.ceil((right - left) / 2)
//           break
//         }
//         if (s[left] === s[left - 1] && s[right] === s[right + 1]) {
//           left--
//           right++
//         } else {
//           count += Math.ceil((right - left) / 2)
//           break
//         }
//       }
//     }
//     return count
// };
console.log(countBinarySubstrings('001100'))
console.log(countBinarySubstrings('11001100'))
