/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) =>{
        return Number(b + '' + a) - Number(a + '' + b);
    })
    var str = nums.join('');
    return str[0] == '0' ? '0' : str;
};