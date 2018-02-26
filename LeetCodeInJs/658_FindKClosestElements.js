/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    var lo = 0, hi = arr.length - k;
    while(lo < hi){
        var mid = Math.floor((lo + hi) / 2);
        if(x - arr[mid] > arr[mid + k] - x){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    return arr.slice(lo, lo + k);
};
var findClosestElements = function(arr, k, x) {
    arr.sort((a,b) => a == b ? a - b : Math.abs(a - x) == Math.abs(b - x) ? a - b : Math.abs(a - x) - Math.abs(b - x));
    arr = arr.slice(0, k);
    arr.sort((a,b) => a - b);
    return arr;
};