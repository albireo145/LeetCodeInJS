/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    if(n == 1) return 1;
    var counts = [];
    counts.length = primes.length;
    counts.fill(0);
    var dp = [1];
    for(var i = 0;i < n; i++){
        var min = Infinity;
        for(var j = 0;j < primes.length;j++){
            min = Math.min(dp[counts[j]] * primes[j],min);
        }
        dp.push(min);
        for(var j = 0;j < primes.length;j++){
            if(min % primes[j] == 0) counts[j]++;
        }
    }
    return dp[n - 1];
};