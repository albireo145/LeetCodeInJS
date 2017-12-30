/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var list = str.split(" ");
    if(list.length != pattern.length) return false;
    var map = new Map();
    var set = new Set();
    for(var i = 0; i < pattern.length; i++){
        if(map.get(pattern[i]) == null){
            if(set.has(list[i])) return false;
            set.add(list[i]);
            map.set(pattern[i],list[i]);
        } 
        else{
            if(map.get(pattern[i]) != list[i]) return false;
        }
    }
    return true;
};