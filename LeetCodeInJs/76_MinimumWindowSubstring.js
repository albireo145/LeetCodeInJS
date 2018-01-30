/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    var map = {};
    for(var i = 0; i < t.length; i++){
        map[t[i]] = (map[t[i]] || 0) + 1;
    }
    var count = t.length;
    var begin = 0; var end = 0; var dist = Infinity; var minIdx = 0;
    while(end < s.length){
        if(map[s[end++]]-- > 0) count--;
        while(count == 0){
            if(dist > end - begin) dist = end - (minIdx = begin);
            if(map[s[begin++]]++ == 0) count++;
        }
    }
    return dist == Infinity ? '' : s.substr(minIdx, dist);
};

// var minWindow = function(s, t) {
//     if(s == '' || t == '') return s[0] || '';
//     var map = {};
//     for(var i = 0; i < t.length; i++){
//         map[t[i]] = map[t[i]] == null ? 1 : map[t[i]] + 1;
//     }
//     var count = t.length;
//     var begin = 0; var end = -1; var dist = Infinity;
//     var minIdx = 0;
//     while(begin < s.length && end < s.length){
//         if(count){
//             end++;
//             if(map[s[end]] != null){
//                 map[s[end]] > 0 && count--;
//                 map[s[end]]--;
//             }
//         }
//         else{
//             if(dist > end - begin + 1){
//                 dist = end - begin + 1;
//                 minIdx = begin;
//             }
//             if(map[s[begin]] != null){
//                 map[s[begin]] >= 0 && count++;
//                 map[s[begin]]++;
//             }
//             begin++;
//         }
//     }
//     if(dist == Infinity) return '';
//     return s.substr(minIdx, dist);
// };