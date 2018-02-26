/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    var dfs = function(cur, n){
        if(cur > n) return;
        res.push(cur);
        cur *= 10
        for(var i = 0; i < 10; i++){
            if(cur + i <= n){
                dfs(cur + i, n);
            }else{
                return;
            }
        }
    }
    var res = [];
    for(var i = 1; i < 10; i++){
        dfs(i, n);
    }
    return res;
};