/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var dp = [];
    dp.length = word1.length + 1;
    for(var k = 0;k < dp.length;k++){
        dp[k] = [];
    }
    var sum = 0;
    while(sum < word2.length + 1){
        dp[0].push(sum++);
    }
    for(var k = 1; k < dp.length;k++){
        dp[k].push(k);
    }
    for(var i = 0; i < word1.length; i++){
        for(var j = 0;j < word2.length; j++){
            if(word1[i] == word2[j]){
                dp[i+1][j+1] = dp[i][j]
            }else{
                dp[i+1][j+1] = Math.min(dp[i][j] + 1,Math.min(dp[i][j + 1] + 1, dp[i + 1][j] + 1));
            }
        }
    }
    return dp.pop().pop();
};