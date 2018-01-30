 /**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var pos = 1;
    var copy = num;
    while(num != 0){
        num = num >> 1;
        pos = pos << 1;
    }
    return pos - 1 ^ copy;
};

// var findComplement = function(num) {
//     var pos = 0;
//     var copy = num;
//     while(num != 0){
//         num = num >> 1;
//         pos++;
//     }
//     return (Math.pow(2,pos) - 1) ^ copy;
// };