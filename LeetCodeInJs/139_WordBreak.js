/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var find = function(s, wordDict){
        for(var el of wordDict){
            if(s == el) return true;
        }
        return false;
    }
    var dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;
    for(var i = 1; i < dp.length; i++){
        for(var j = 0; j < i; j++){
            if(dp[j] == true && find(s.substr(j, i - j), wordDict)){
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};