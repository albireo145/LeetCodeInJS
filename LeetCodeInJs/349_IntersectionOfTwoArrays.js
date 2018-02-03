/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// two set
var intersection = function(nums1, nums2) {
    var res = new Set();
    var set = new Set();
    for(var i = 0; i < nums1.length; i++){
        set.add(nums1[i]);
    }
    for(var j = 0; j < nums2.length; j++){
        if(set.has(nums2[j])) res.add(nums2[j]);
    }
    return Array.from(res);
};
// sort two pointers
// var intersection = function(nums1, nums2) {
//     nums1.sort((a,b) => a-b);
//     nums2.sort((a,b) => a-b);
//     var res = [];
//     var i = 0,j = 0;
//     while(i < nums1.length && j < nums2.length){
//         if(nums1[i] == nums2[j]){
//             res.push(nums1[i]);
//             while(nums1[++i] == nums1[i - 1]);
//             while(nums2[++j] == nums2[j - 1]);
//         }
//         else if(nums1[i] < nums2[j]){
//             i++;
//         }else{
//             j++;
//         }
//     }
//     return res;
// };