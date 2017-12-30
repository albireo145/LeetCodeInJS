
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num == 0) return 0;
    return 1 + (num - 1) % 9;
};
// var addDigits = function(num) {
//     var arr = Array.from(num.toString()).map(Number);
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     while (arr.length > 1) {
//         var sum = 0;
//         for (var index = 0; index < arr.length; index++) {
//             sum += arr[index];
//         };
        
//         // Is the new sum shorter than 2?
//         if (sum.toString().length < 2) {
//             console.log('---sum has a small length');
//             return sum;
//         } else {
//             console.log('Sum has a length greater than 1, this is the new arr', arr);
//             arr = Array.from(sum.toString()).map(Number);
//         }
//     }
// };