/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var dp = [];
    var len = triangle.length;
    for(var i = 0;i < triangle[len - 1].length; i++){
        dp[i] = triangle[len - 1][i];
    }
    for(var i = len - 2; i >= 0; i--){
        for(var j = 0 ; j < triangle[i].length; j++){
            dp[j] = Math.min(dp[j],dp[j+1]) + triangle[i][j];
        }
    }
    return dp[0];
};