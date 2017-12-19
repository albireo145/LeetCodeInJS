/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    var startpos = 0;
    for(var i = 0; i < s.length; i++){
        var find = t.indexOf(s[i],startpos);
        if( find == -1){
            return false;
        }else{
            startpos = find + 1;
        }
    }
    return true;
};

// var isSubsequence = function(s, t) {
//     if(s.length == 0) return true;
//     var p1 = 0;
//     var p2 = 0;
//     while( p2 < s.length){
//         while(p1 < t.length){
//             if(s[p2] == t[p1++]){
//                 p2++;
//                 if(p2 == s.length) return true;
//             }
//         }
//         return false;
//     }
// };