/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    var lcs = [[0]];
    for(var i = 0;i < s1.length;i++){
        lcs.push([]);
        lcs[i+1][0] = lcs[i][0] + s1[i].charCodeAt();
    }
    for(var j = 0;j < s2.length;j++){
        lcs[0][j+1] = lcs[0][j] + s2[j].charCodeAt();
    }
    for(var i = 0;i < s1.length;i++){
        for(var j = 0;j < s2.length;j++){
            if(s1[i] == s2[j]) lcs[i+1][j+1] = lcs[i][j];
            else lcs[i+1][j+1] = Math.min(lcs[i][j+1] + s1.charCodeAt(i),lcs[i+1][j]  + s2.charCodeAt(j));
        }
    }
    return lcs.pop().pop();
};