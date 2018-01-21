/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var curMin1 = Infinity;
    var curMin2 = Infinity;
    var i = 0;
    for(var el of nums){
        if(curMin1 >= el){
            curMin1 = el;
        }else if(curMin2 >= el){
            curMin2 = el;
        }else{
            return true;
        }
    }
    return false;
};