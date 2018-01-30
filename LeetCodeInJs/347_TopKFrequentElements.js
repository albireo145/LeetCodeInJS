/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    var res = [];
    for(var el of nums){
        map[el] = (map[el] || 0) + 1;
    }
    var bullet = [];
    for(var idx in map){
        if(bullet[map[idx]] == null){
            bullet[map[idx]] = [];
        }
        bullet[map[idx]].push(~~idx);
    }
    for(var i = bullet.length; i > -1; i--){
        if(bullet[i] != null){
            res.push(...bullet[i]);
            k -= bullet[i].length;
            if(k == 0) break;
        }
    }
    return res;
};