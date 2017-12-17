/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n == 1) return 1;
    var arr = [1]
    var i2 = 0, i3 = 0, i5 = 0;
    var num = 0;
    for(var i = 1; i < n; i++){
        arr[i] = Math.min( arr[i2] * 2,Math.min(arr[i3] * 3, arr[i5] * 5));
        if(arr[i] == arr[i2] * 2) i2++;
        if(arr[i] == arr[i3] * 3) i3++;
        if(arr[i] == arr[i5] * 5) i5++;
    }
    return arr[n - 1];
};