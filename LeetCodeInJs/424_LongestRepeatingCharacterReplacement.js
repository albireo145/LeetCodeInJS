/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if(s == '') return 0;
    var map = {};
    for(var i = 0;i < 26; i++){
        map[String.fromCharCode(65 + i)] = 0;
    }
    map[s[0]]++;
    var left = 0;
    var right = 1;
    var max = 1;
    var most = 1;
    while(right < s.length){
        most = Math.max(most , ++map[s[right]]);
        if(right - left + 1 - most > k){
            map[s[left++]]--;
        }else{
            max = Math.max(right - left + 1 , max);
        }
        right++;
    }
    return max;
};

// var characterReplacement = function(s, k) {
//     if(s == '') return 0;
//     var map = new Array(26);
//     map.fill(0);
//     map[s[0].charCodeAt() - 65]++;
//     var left = 0;
//     var right = 1;
//     var max = 1;
//     var most = 1;
//     while(right < s.length){
// //          most must bigger than before , then the result can be update;
//         most = Math.max(most , ++map[s[right].charCodeAt() - 65]);
//         if(right - left + 1 - most > k){
//             map[s[left++].charCodeAt() - 65]--;
//         }else{
// //          update max when window size plus
//             max = Math.max(right - left + 1 , max);
//         }
// //         useless to small window size;
//         right++;
//     }
//     return max;
// };