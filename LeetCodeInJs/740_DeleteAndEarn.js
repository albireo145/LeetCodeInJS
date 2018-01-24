/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    var map = {};
    var prev = 0;
    var curr = 0;
    var prevNum;
    for(var el of nums) map[el] = map[el] ? map[el] + 1 : 1;
    for(var idx in map){
        var max;
        if(prevNum != null && prevNum == idx - 1){
            max = Math.max(prev + map[idx] * idx, curr);
        }else{
            max = Math.max(prev + map[idx] * idx, curr + map[idx] * idx);
        }
        prev = curr;
        prevNum = idx;
        curr = max;
    }
    return Math.max(curr, prev)
};