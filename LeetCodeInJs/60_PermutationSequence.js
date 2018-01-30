/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var factorial = [1];
    var sum = 1;
    var res = '';
    for(var i = 1; i <= n; i++){
        sum *= i;
        factorial[i] = sum;
    }
    k--;
    var nums = [];
    for(var i = 1; i <= n; i++){
        nums.push(i);
    }
    for(var i = 1; i <= n; i++){
        var idx = Math.floor(k / factorial[n - i]);
        res += nums[idx];
        nums.splice(idx,1);
        k -= idx * factorial[n- i];
    }
    return res;
};