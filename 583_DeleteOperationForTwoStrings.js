/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var lcs = [];
    lcs.length = word2.length + 1;
    lcs.fill(0)
    for(var i = 0;i < word1.length;i++){
        var temp = [];
        temp.length = lcs.length;
        temp.fill(0);
        for(var j = 0;j < word2.length;j++){
            if(word1[i] == word2[j]){
                temp[j + 1] = lcs[j] + 1;
            }else{
                temp[j + 1] = Math.max(lcs[j + 1],temp[j]);
            }
        }
        lcs = temp;
    }
    return word1.length + word2.length - 2 * lcs[lcs.length-1];
};