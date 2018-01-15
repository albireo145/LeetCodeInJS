/**
 * @param {number} n
 * @return {boolean}
 */

// var isPowerOfTwo = function(n) {
//     return Number.isInteger(Math.log(n/4)/Math.log(2));
// };

var isPowerOfTwo = function(n) {
    return  n>0 && (n&(n-1)) == 0;
};

// var isPowerOfTwo = function(n) {
//     if(n <= 0) return false;
//     if(n == 1) return true;
//     while(n>3){
//         if(n%2 != 0) return false; 
//         n = parseInt(n/2);
//     }
//     return n%2 == 0;
// };