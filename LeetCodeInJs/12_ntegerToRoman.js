/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    var M = ["", "M", "MM", "MMM"];
    var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var res = []
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[Math.floor((num%10))];
};
// var intToRoman = function(num) {
//     var numstr = num + "";
//     var result = [];
//     var sign = ['I','X','C','M']
//     var middle = ['V','L','D']
//     numstr = numstr.split('').reverse();
//     for(var i = 0;i<numstr.length;i++){
//         var str = '';
//         var cnum = numstr[i];
//         if(cnum%5==4){
//             if(cnum<5){
//                 str = sign[i]+middle[i];
//             }
//             else{
//                 str = sign[i]+sign[i+1];
//             }
//         }else if(cnum<5){
//             for(var j=0;j<cnum;j++){
//                 str += sign[i];
//             }
//         }
//         else{
//             str = middle[i];
//             for(var j=0;j<cnum-5;j++){
//                 str += sign[i];
//             }
//         }
//         result.unshift(str);    
//     }
//     result = result.join('')
//     return result;
// };