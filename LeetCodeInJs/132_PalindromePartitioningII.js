/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    if(s.length == 0) return 0;
    var dp = [];
    var len = s.length;
    var cut = [];
    for(var i = 0; i < len; i++){
        var arr = new Array(len);
        arr.fill(false);
        dp.push(arr);
    }
    for(var left = len - 1; left > -1; left--){
        cut[left] = len - left - 1;
        for(var right = left; right < len ;right++){
            if(s[left] == s[right] && (right - left < 2 || dp[left+1][right-1])){
                dp[left][right] = true;
                if(right == len - 1) cut[left] = 0;
                else cut[left] = Math.min(cut[left],cut[right + 1] + 1);
            } 
        }
    }
    return cut[0];
};
