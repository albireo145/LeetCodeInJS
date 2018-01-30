/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = {};
    for(var el of magazine){
        map[el] = (map[el] || 0) + 1;
    }
    for(var i = 0; i < ransomNote.length; i++){
        if(map[ransomNote[i]] == null || --map[ransomNote[i]] < 0) return false;
    }
    return true;
};