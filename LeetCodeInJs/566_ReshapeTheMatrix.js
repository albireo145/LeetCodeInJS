/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var row = nums.length;
    var col = nums[0].length;
    if(row * col != r * c) return nums;
    var res = [];
    for(var i = 0; i < r; i++) res.push([]);
    for(var i = 0; i < r * c; i++){
        res[Math.floor(i / c)][i % c] = nums[Math.floor(i / col)][i % col];
    }
    return res;
};