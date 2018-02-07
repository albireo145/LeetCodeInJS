/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var map = {};
    for(var el of s) map[el] = (map[el] || 0) + 1;
    var res = '';
    map = Object.entries(map).sort((a,b) => b[1] - a[1]);
    for(var i = 0; i < map.length; i++){
        for(var j = 0; j < map[i][1];j++){
            res += map[i][0];
        }
    }
    return res;
};
// var frequencySort = function(s) {
//     var bucket = [];
//     var map = {};
//     for(var el of s) map[el] = (map[el] || 0) + 1;
//     for(var key in map){
//         var str = '';
//         for(var i = 0; i < map[key]; i++){
//             str += key;
//         }
//         bucket[map[key]] == null ? (bucket[map[key]] = str) : (bucket[map[key]] += str);
//     }
//     return bucket.reverse().join('');
// };