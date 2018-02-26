/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var left = 0, right = num;
    while(left <= right){
        var mid = Math.floor( (left + right) >> 1 );
        var sqrt = mid * mid;
        if(sqrt == num) return true;
        else if(sqrt > num) right = mid - 1;
        else left = mid + 1;
    }
    return false
};