/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = {};
    var res = [];
    var row = 0;
    for(var el of strs){
        var arr = el.split('');
        arr.sort();
        var str = arr.join('');
        if(map[str] == null){
            map[str] = row++;
            res.push([el]);
        }else{
            res[map[str]].push(el);
        }
    }
    return res;
};