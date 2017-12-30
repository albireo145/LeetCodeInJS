/**
 * @param {number} n
 * @return {number}
 */


var integerReplacement = function(n) {
    var step = 0;
    while(n > 1){
        if(n % 2 == 0){
            n = n >>> 1;
        }else{
            if ( (n + 1) % 4 == 0 && (n - 1 != 2) ) n++;
            else n--;
        }
        step++;
    }
    return step;
};

// var integerReplacement = function(n) {
//     var step = -1;
//     while(n){
//         if(n % 2 == 0){
//             n = n >>> 1;
//         }else if(n == 3){
//             n--;
//         }
//         else{
//             helper(n+1) > helper(n-1) ? (n += 1) : (n -= 1);
//         }
//         step++;
//     }
//     return step;
// };
// var helper = function(n){
//     var s = n.toString(2);
//     var count = 0;
//     for(var i = s.length-1;i > -1;i--){
//         if(s[i] != 0) break;
//         count++;
//     } 
//     return count;
// };