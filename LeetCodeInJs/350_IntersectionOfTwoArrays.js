/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var res = [];
    var map = {};
    for(var i = 0; i < nums1.length; i++){
        map[nums1[i]] = (map[nums1[i]] ? map[nums1[i]] : 0) + 1;
    }
    for(var j = 0; j < nums2.length; j++){
        if(map[nums2[j]]-- > 0) res.push(nums2[j]);
    }
    return res;
};