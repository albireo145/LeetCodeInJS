/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    var res = [''];
    for(var i = 0; i < S.length; i++){
        if('A' <= S[i] && S[i] <= 'Z' || 'a' <= S[i] && S[i] <= 'z'){
            var copy = res.slice(0);
            res.forEach((el,idx,arr) => {arr[idx] = el + S[i].toLowerCase()});
            copy.forEach((el,idx,arr) => {arr[idx] = el + S[i].toUpperCase()});
            res.push(...copy);
        }
        if(0 <= S[i] && S[i] <= 9) res.forEach((el, idx, arr) => {arr[idx] = el + S[i]});
    }
    return res;
};